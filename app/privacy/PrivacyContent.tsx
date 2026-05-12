"use client";

import { useTranslation } from "@/components/LanguageProvider";

const linkCls = "text-violet-400 hover:text-violet-300";

function Wrapper({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-40 pb-24 text-white/80">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
        {title}
      </h1>
      <p className="text-white/50 mb-12">{updated}</p>
      <div className="space-y-8 leading-relaxed">{children}</div>
    </article>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-3">{heading}</h2>
      {children}
    </section>
  );
}

function ContactEmail() {
  return (
    <a href="mailto:contact@avsolutions.dev" className={linkCls}>
      contact@avsolutions.dev
    </a>
  );
}

function EnglishPrivacy() {
  return (
    <Wrapper title="Privacy Policy" updated="Last updated: May 2026">
      <Section heading="1. Who we are">
        <p>
          This site (&ldquo;AV Solutions&rdquo;) is operated by АйВи Солюшънс ЕООД (AV Solutions
          EOOD), registered in Bulgaria — full legal details on our{" "}
          <a href="/imprint" className={linkCls}>
            Imprint
          </a>{" "}
          page. For privacy questions, email <ContactEmail />.
        </p>
      </Section>
      <Section heading="2. What we collect and why">
        <p className="mb-3">
          We process personal data only when you choose to interact with the site:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">Contact form / email:</strong> name, email address,
            and the contents of your message. Legal basis: your consent and our legitimate
            interest in responding (GDPR Art. 6(1)(a) and (f)).
          </li>
          <li>
            <strong className="text-white">Booking a consultation:</strong> name, email,
            time-zone and meeting details, handled by Cal.com (see section 3). Legal basis:
            performance of pre-contractual steps (Art. 6(1)(b)).
          </li>
          <li>
            <strong className="text-white">Chatbot:</strong> the text of your messages,
            processed by Anthropic to generate replies (see section 3). Legal basis: your
            consent by sending a message (Art. 6(1)(a)). Don&rsquo;t share confidential
            information.
          </li>
          <li>
            <strong className="text-white">Server logs:</strong> our hosting provider receives
            standard request data (IP address, user-agent, timestamp) for security and abuse
            prevention. Legal basis: legitimate interest (Art. 6(1)(f)).
          </li>
        </ul>
      </Section>
      <Section heading="3. Third parties (processors)">
        <p className="mb-3">
          We use the following service providers. Each acts as a data processor or independent
          controller under its own privacy policy:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">Vercel Inc.</strong> — hosting and request logs.{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Vercel Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Cloudflare, Inc.</strong> — DNS and traffic
            protection.{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Cloudflare Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Cal.com, Inc.</strong> — appointment scheduling. EU
            users are routed to <code>cal.eu</code> (EU-hosted).{" "}
            <a
              href="https://cal.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Cal.com Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Anthropic, PBC</strong> — powers the AI chatbot.
            Messages you send are transmitted to Anthropic to generate a response. Per
            Anthropic&rsquo;s commercial terms, API inputs and outputs are not used to train
            their models.{" "}
            <a
              href="https://www.anthropic.com/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Anthropic Privacy Policy
            </a>
            .
          </li>
        </ul>
        <p className="mt-3">
          Some of these providers are based in the United States. Transfers outside the EEA rely
          on Standard Contractual Clauses and/or the EU-US Data Privacy Framework.
        </p>
      </Section>
      <Section heading="4. Cookies and analytics">
        <p className="mb-3">
          We use only strictly necessary storage by default — for example, remembering your
          language preference (<code>localStorage</code>). No tracking cookies are set without
          your consent.
        </p>
        <p>
          If you accept analytics in our cookie banner, we enable privacy-friendly, aggregate
          analytics (Vercel Analytics) to measure traffic patterns. You can change your choice
          at any time by clearing site data in your browser.
        </p>
      </Section>
      <Section heading="5. How we use your information">
        <p>
          We use the information you provide only to respond to your inquiry, schedule meetings,
          deliver requested services, and meet legal obligations. We do not sell your personal
          data and we do not use it for advertising.
        </p>
      </Section>
      <Section heading="6. Data retention">
        <p>
          Contact messages and project correspondence: up to 24 months after our last contact,
          unless a longer period is required for legal or accounting reasons. Server logs:
          typically up to 30 days. Chatbot transcripts stored on our infrastructure are retained
          only as long as needed for abuse prevention and debugging.
        </p>
      </Section>
      <Section heading="7. Your rights">
        <p className="mb-3">
          Under GDPR, you have the right to: access your personal data, request correction or
          deletion, restrict or object to processing, request data portability, and withdraw
          consent at any time. You can also lodge a complaint with the Bulgarian Commission for
          Personal Data Protection (CPDP) or your local supervisory authority.
        </p>
        <p>
          To exercise any of these rights, email <ContactEmail />. We respond within 30 days.
        </p>
      </Section>
      <Section heading="8. Security">
        <p>
          We apply reasonable technical and organisational measures to protect personal data,
          including encryption in transit (HTTPS), access controls, and abuse-prevention
          measures on the chatbot endpoint. If a breach affects your personal data, we will
          notify you and the supervisory authority as required by law.
        </p>
      </Section>
      <Section heading="9. Changes to this policy">
        <p>
          We may update this policy as our services evolve. Material changes will be reflected
          in the &ldquo;Last updated&rdquo; date above.
        </p>
      </Section>
    </Wrapper>
  );
}

function BulgarianPrivacy() {
  return (
    <Wrapper title="Политика за поверителност" updated="Последна актуализация: май 2026 г.">
      <Section heading="1. Кои сме ние">
        <p>
          Този сайт („AV Solutions&ldquo;) се поддържа от „АйВи Солюшънс&ldquo; ЕООД,
          регистрирано в Република България — пълните данни са на страницата{" "}
          <a href="/imprint" className={linkCls}>
            Импресум
          </a>
          . За въпроси относно поверителността пишете на <ContactEmail />.
        </p>
      </Section>
      <Section heading="2. Какво събираме и защо">
        <p className="mb-3">
          Обработваме лични данни само когато решите да взаимодействате със сайта:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">Форма за контакт / имейл:</strong> име, имейл адрес
            и съдържанието на съобщението. Основание: Вашето съгласие и нашият законен интерес
            да отговорим (чл. 6, §1, б. „а&ldquo; и б. „е&ldquo; от GDPR).
          </li>
          <li>
            <strong className="text-white">Запазване на консултация:</strong> име, имейл,
            часова зона и данни за срещата, обработвани чрез Cal.com (вижте т. 3). Основание:
            изпълнение на преддоговорни стъпки (чл. 6, §1, б. „б&ldquo;).
          </li>
          <li>
            <strong className="text-white">Чатбот:</strong> текстът на Вашите съобщения,
            обработван от Anthropic за генериране на отговори (вижте т. 3). Основание: Вашето
            съгласие чрез изпращане на съобщение (чл. 6, §1, б. „а&ldquo;). Моля, не споделяйте
            поверителна информация.
          </li>
          <li>
            <strong className="text-white">Сървърни логове:</strong> хостинг доставчикът
            получава стандартни данни за заявката (IP адрес, user-agent, часова марка) за
            сигурност и предотвратяване на злоупотреби. Основание: законен интерес (чл. 6, §1,
            б. „е&ldquo;).
          </li>
        </ul>
      </Section>
      <Section heading="3. Трети страни (обработващи)">
        <p className="mb-3">
          Използваме следните доставчици на услуги. Всеки действа като обработващ лични данни
          или независим администратор съгласно собствената си политика:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">Vercel Inc.</strong> — хостинг и логове на заявките.{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Политика на Vercel
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Cloudflare, Inc.</strong> — DNS и защита на трафика.{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Политика на Cloudflare
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Cal.com, Inc.</strong> — резервации за консултации.
            Потребителите от ЕС се обслужват от <code>cal.eu</code> (хостван в ЕС).{" "}
            <a
              href="https://cal.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Политика на Cal.com
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Anthropic, PBC</strong> — захранва AI чатбота.
            Изпратените съобщения се предават на Anthropic за генериране на отговор. Съгласно
            търговските условия на Anthropic, входните и изходните данни на API не се използват
            за обучение на модели.{" "}
            <a
              href="https://www.anthropic.com/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Политика на Anthropic
            </a>
            .
          </li>
        </ul>
        <p className="mt-3">
          Някои от тези доставчици са със седалище в САЩ. Трансферите извън ЕИП се основават на
          Стандартни договорни клаузи и/или Рамката за защита на личните данни ЕС-САЩ.
        </p>
      </Section>
      <Section heading="4. Бисквитки и анализи">
        <p className="mb-3">
          По подразбиране използваме само строго необходимото съхранение — например запазване на
          избрания език (<code>localStorage</code>). Не се поставят проследяващи бисквитки без
          Вашето съгласие.
        </p>
        <p>
          Ако приемете анализи в банера за бисквитки, активираме поверителен агрегиран анализ
          (Vercel Analytics), за да измерваме модели на трафика. Можете да промените избора си по
          всяко време, като изчистите данните на сайта в браузъра си.
        </p>
      </Section>
      <Section heading="5. Как използваме информацията">
        <p>
          Използваме предоставената информация само за да отговорим на запитванията Ви, да
          насрочваме срещи, да предоставяме поисканите услуги и да изпълняваме нормативни
          задължения. Не продаваме Вашите лични данни и не ги използваме за реклама.
        </p>
      </Section>
      <Section heading="6. Срок на съхранение">
        <p>
          Съобщения за контакт и проектна кореспонденция: до 24 месеца след последния ни
          контакт, освен ако по-дълъг срок не се изисква по закон или по счетоводни причини.
          Сървърни логове: обикновено до 30 дни. Записи от чатбота, съхранени на нашата
          инфраструктура, се пазят само толкова, колкото е необходимо за предотвратяване на
          злоупотреби и отстраняване на грешки.
        </p>
      </Section>
      <Section heading="7. Вашите права">
        <p className="mb-3">
          По GDPR имате право на: достъп до Вашите лични данни, искане за коригиране или
          изтриване, ограничаване или възражение срещу обработването, преносимост на данните и
          оттегляне на съгласието по всяко време. Можете да подадете жалба и до Комисията за
          защита на личните данни (КЗЛД) или до Вашия местен надзорен орган.
        </p>
        <p>
          За упражняване на тези права пишете на <ContactEmail />. Отговаряме в срок до 30 дни.
        </p>
      </Section>
      <Section heading="8. Сигурност">
        <p>
          Прилагаме разумни технически и организационни мерки за защита на личните данни —
          криптиране на трансфера (HTTPS), контрол на достъпа и мерки за предотвратяване на
          злоупотреби в крайната точка на чатбота. При нарушение, засягащо Вашите лични данни,
          ще Ви уведомим, както и надзорния орган, съгласно закона.
        </p>
      </Section>
      <Section heading="9. Промени в политиката">
        <p>
          Можем да актуализираме тази политика с развитието на услугите ни. Съществените промени
          ще се отразят в датата „Последна актуализация&ldquo; по-горе.
        </p>
      </Section>
    </Wrapper>
  );
}

function GermanPrivacy() {
  return (
    <Wrapper title="Datenschutzerklärung" updated="Stand: Mai 2026">
      <Section heading="1. Verantwortlicher">
        <p>
          Diese Website („AV Solutions&ldquo;) wird betrieben von der АйВи Солюшънс ЕООД (AV
          Solutions EOOD), eingetragen in Bulgarien — vollständige Angaben im{" "}
          <a href="/imprint" className={linkCls}>
            Impressum
          </a>
          . Für Datenschutzanfragen: <ContactEmail />.
        </p>
      </Section>
      <Section heading="2. Welche Daten wir verarbeiten und warum">
        <p className="mb-3">
          Wir verarbeiten personenbezogene Daten nur, wenn Sie aktiv mit der Website
          interagieren:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">Kontaktformular / E-Mail:</strong> Name,
            E-Mail-Adresse und der Inhalt Ihrer Nachricht. Rechtsgrundlage: Ihre Einwilligung
            und unser berechtigtes Interesse an einer Antwort (Art. 6 Abs. 1 lit. a und f
            DSGVO).
          </li>
          <li>
            <strong className="text-white">Terminbuchung:</strong> Name, E-Mail, Zeitzone und
            Termindetails, abgewickelt über Cal.com (siehe Abschnitt 3). Rechtsgrundlage:
            Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
          </li>
          <li>
            <strong className="text-white">Chatbot:</strong> der Text Ihrer Nachrichten, von
            Anthropic zur Generierung von Antworten verarbeitet (siehe Abschnitt 3).
            Rechtsgrundlage: Ihre Einwilligung durch Absenden einer Nachricht (Art. 6 Abs. 1
            lit. a DSGVO). Bitte teilen Sie keine vertraulichen Informationen mit.
          </li>
          <li>
            <strong className="text-white">Server-Logs:</strong> unser Hosting-Anbieter erhält
            Standard-Anfragedaten (IP-Adresse, User-Agent, Zeitstempel) zur Sicherheit und
            Missbrauchsvermeidung. Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f
            DSGVO).
          </li>
        </ul>
      </Section>
      <Section heading="3. Auftragsverarbeiter und Drittanbieter">
        <p className="mb-3">
          Wir nutzen folgende Dienstleister. Jeder handelt als Auftragsverarbeiter oder
          eigenständig Verantwortlicher gemäß eigener Datenschutzerklärung:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">Vercel Inc.</strong> — Hosting und Request-Logs.{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Datenschutz von Vercel
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Cloudflare, Inc.</strong> — DNS und
            Traffic-Schutz.{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Datenschutz von Cloudflare
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Cal.com, Inc.</strong> — Terminbuchung. Nutzer aus
            der EU werden über <code>cal.eu</code> (EU-Hosting) bedient.{" "}
            <a
              href="https://cal.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Datenschutz von Cal.com
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Anthropic, PBC</strong> — betreibt den KI-Chatbot.
            Ihre Nachrichten werden zur Antwortgenerierung an Anthropic übermittelt. Gemäß den
            kommerziellen Bedingungen von Anthropic werden API-Ein- und -Ausgaben nicht zum
            Training der Modelle verwendet.{" "}
            <a
              href="https://www.anthropic.com/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Datenschutz von Anthropic
            </a>
            .
          </li>
        </ul>
        <p className="mt-3">
          Einige dieser Anbieter haben ihren Sitz in den USA. Übermittlungen außerhalb des EWR
          erfolgen auf Grundlage von Standardvertragsklauseln und/oder dem EU-US Data Privacy
          Framework.
        </p>
      </Section>
      <Section heading="4. Cookies und Analyse">
        <p className="mb-3">
          Standardmäßig nutzen wir ausschließlich technisch notwendigen Speicher — etwa zur
          Speicherung Ihrer Sprachwahl (<code>localStorage</code>). Ohne Ihre Einwilligung
          werden keine Tracking-Cookies gesetzt.
        </p>
        <p>
          Wenn Sie im Cookie-Banner Analyse-Cookies zustimmen, aktivieren wir eine
          datenschutzfreundliche, aggregierte Analyse (Vercel Analytics) zur Messung von
          Besucherströmen. Sie können Ihre Wahl jederzeit ändern, indem Sie die Website-Daten
          in Ihrem Browser löschen.
        </p>
      </Section>
      <Section heading="5. Verwendung Ihrer Daten">
        <p>
          Wir verwenden Ihre Daten ausschließlich, um Anfragen zu beantworten, Termine zu
          koordinieren, beauftragte Leistungen zu erbringen und gesetzlichen Pflichten
          nachzukommen. Wir verkaufen keine Daten und nutzen sie nicht für Werbung.
        </p>
      </Section>
      <Section heading="6. Speicherdauer">
        <p>
          Kontaktnachrichten und Projektkorrespondenz: bis zu 24 Monate nach unserem letzten
          Kontakt, soweit nicht längere gesetzliche oder steuerliche Fristen gelten.
          Server-Logs: in der Regel bis zu 30 Tage. Bei uns gespeicherte Chatbot-Transkripte
          werden nur so lange aufbewahrt, wie es für Missbrauchsvermeidung und Fehlersuche
          erforderlich ist.
        </p>
      </Section>
      <Section heading="7. Ihre Rechte">
        <p className="mb-3">
          Nach der DSGVO haben Sie das Recht auf: Auskunft über Ihre personenbezogenen Daten,
          Berichtigung oder Löschung, Einschränkung oder Widerspruch gegen die Verarbeitung,
          Datenübertragbarkeit und jederzeitigen Widerruf einer Einwilligung. Sie können sich
          außerdem bei der bulgarischen Datenschutzaufsicht (CPDP) oder Ihrer örtlichen
          Aufsichtsbehörde beschweren.
        </p>
        <p>
          Zur Ausübung dieser Rechte schreiben Sie an <ContactEmail />. Wir antworten innerhalb
          von 30 Tagen.
        </p>
      </Section>
      <Section heading="8. Sicherheit">
        <p>
          Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz
          personenbezogener Daten, darunter Transportverschlüsselung (HTTPS), Zugriffskontrollen
          und Schutzmaßnahmen am Chatbot-Endpunkt. Bei einer Datenpanne, die Sie betrifft,
          informieren wir Sie und die Aufsichtsbehörde wie gesetzlich vorgeschrieben.
        </p>
      </Section>
      <Section heading="9. Änderungen dieser Erklärung">
        <p>
          Wir passen diese Erklärung an, wenn sich unsere Dienste weiterentwickeln. Wesentliche
          Änderungen werden im oben angegebenen Datum „Stand&ldquo; vermerkt.
        </p>
      </Section>
    </Wrapper>
  );
}

export default function PrivacyContent() {
  const { locale } = useTranslation();
  if (locale === "bg") return <BulgarianPrivacy />;
  if (locale === "de") return <GermanPrivacy />;
  return <EnglishPrivacy />;
}
