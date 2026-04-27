"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "./LanguageProvider";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const MAX_INPUT_CHARS = 2000;

export default function Chatbot() {
  const { t, locale } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [retryAfter, setRetryAfter] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // Honeypot — kept out of view, only bots will fill it
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: "assistant", content: t.chatbot.greeting }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Tick down retry-after countdown
  useEffect(() => {
    if (retryAfter <= 0) return;
    const id = setInterval(() => {
      setRetryAfter((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [retryAfter]);

  function rateLimitMessage(reason: string, seconds: number): string {
    if (reason === "rate_limit_minute")
      return t.chatbot.rateLimitMinute.replace("{s}", String(seconds));
    if (reason === "rate_limit_hour")
      return t.chatbot.rateLimitHour;
    if (reason === "rate_limit_day")
      return t.chatbot.rateLimitDay;
    return t.chatbot.rateLimitGeneric;
  }

  async function send(content: string) {
    const trimmedContent = content.trim();
    if (!trimmedContent || loading) return;
    if (retryAfter > 0) return;

    if (trimmedContent.length > MAX_INPUT_CHARS) {
      setError(t.chatbot.tooLong);
      return;
    }

    setError("");

    const userMsg: Message = { role: "user", content: trimmedContent };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next,
          locale,
          hp: honeypotRef.current?.value || "",
        }),
      });

      if (res.status === 429) {
        const data = await res.json().catch(() => ({}));
        const seconds = Number(data.retryAfter) || 60;
        setRetryAfter(seconds);
        throw new Error(rateLimitMessage(data.error || "", seconds));
      }

      // 403 with error "banned" → permanent (until timer expires) block
      if (res.status === 403) {
        const data = await res.json().catch(() => ({}));
        if (data.error === "banned") {
          const seconds = Number(data.retryAfter) || 3600;
          setRetryAfter(seconds);
          throw new Error(data.message || t.chatbot.banned);
        }
        throw new Error(t.chatbot.errorGeneric);
      }

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || t.chatbot.errorGeneric);
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error(t.chatbot.errorGeneric);

      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: updated[updated.length - 1].content + chunk,
          };
          return updated;
        });
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : t.chatbot.errorGeneric;
      setError(msg);
      // Remove the empty assistant placeholder on error
      setMessages((prev) =>
        prev[prev.length - 1]?.role === "assistant" && prev[prev.length - 1].content === ""
          ? prev.slice(0, -1)
          : prev
      );
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  const charCount = input.length;
  const overLimit = charCount > MAX_INPUT_CHARS;
  const disabled = loading || retryAfter > 0 || overLimit || !input.trim();

  return (
    <>
      {/* Floating launcher button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className={`fixed z-[60] bottom-6 right-6 h-14 w-14 rounded-full grid place-items-center text-white shadow-2xl shadow-violet-600/50 transition-all duration-300 ${
          open
            ? "bg-white/10 backdrop-blur-md border border-white/20 rotate-90"
            : "bg-gradient-to-br from-violet-500 to-violet-700 hover:scale-105 hover:shadow-violet-600/70"
        }`}
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed z-[55] right-6 bottom-24 w-[calc(100vw-3rem)] sm:w-[400px] h-[calc(100vh-8rem)] sm:h-[600px] max-h-[600px] rounded-2xl border border-violet-500/25 bg-black/85 backdrop-blur-xl shadow-2xl shadow-black/60 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-white/10 bg-gradient-to-r from-violet-900/30 to-transparent">
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-400 to-violet-700 grid place-items-center text-white shadow-lg shadow-violet-600/40">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="9" r="3" />
                <path d="M3 20c0-4 4-7 9-7s9 3 9 7" strokeLinecap="round" />
              </svg>
            </div>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-black" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-white">{t.chatbot.title}</div>
            <div className="text-xs text-white/50">{t.chatbot.subtitle}</div>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed whitespace-pre-wrap ${
                  m.role === "user"
                    ? "bg-violet-600 text-white rounded-br-md"
                    : "bg-white/[0.06] border border-white/10 text-white/90 rounded-bl-md"
                }`}
              >
                {m.content}
                {m.role === "assistant" && loading && idx === messages.length - 1 && !m.content && (
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-300 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-300 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-300 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                )}
              </div>
            </div>
          ))}

          {error && (
            <div className="text-xs text-red-300 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30">
              {error}
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={onSubmit} className="p-3 border-t border-white/10 bg-black/40">
          {/* Honeypot — visually hidden but present in DOM. Bots fill it; humans don't. */}
          <input
            ref={honeypotRef}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            name="hp"
            className="absolute left-[-9999px] opacity-0 pointer-events-none"
          />

          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder={
                retryAfter > 0
                  ? retryAfter > 120
                    ? t.chatbot.blocked
                    : t.chatbot.rateLimitMinute.replace("{s}", String(retryAfter))
                  : t.chatbot.placeholder
              }
              rows={1}
              maxLength={MAX_INPUT_CHARS + 200}
              disabled={retryAfter > 0}
              className="flex-1 resize-none bg-white/[0.05] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-violet-500/50 max-h-32 disabled:opacity-50"
              style={{ minHeight: "42px" }}
            />
            <button
              type="submit"
              disabled={disabled}
              aria-label="Send"
              className="h-[42px] w-[42px] grid place-items-center rounded-xl bg-violet-600 hover:bg-violet-500 disabled:bg-white/10 disabled:text-white/30 text-white transition-colors shrink-0"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="mt-2 flex items-center justify-between text-[10px]">
            <span className="text-white/30">{t.chatbot.poweredBy}</span>
            {charCount > MAX_INPUT_CHARS - 200 && (
              <span className={overLimit ? "text-red-400" : "text-white/40"}>
                {charCount} / {MAX_INPUT_CHARS}
              </span>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
