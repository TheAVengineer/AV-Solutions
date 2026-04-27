import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen relative">
      <Nav />
      <article className="mx-auto max-w-3xl px-6 pt-40 pb-24 text-white/80">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
          Privacy Policy
        </h1>
        <p className="text-white/50 mb-12">Last updated: April 2026</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you contact AV Solutions through the contact form or email,
              we collect your name, email address, and any information you
              voluntarily share in your message.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. How We Use Information
            </h2>
            <p>
              We use the information you provide solely to respond to your
              inquiry and discuss potential projects. We do not sell, rent, or
              share your personal information with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Cookies & Analytics
            </h2>
            <p>
              This site may use basic analytics (e.g., Vercel Analytics) to
              understand traffic patterns. No personally identifying information
              is collected through analytics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Data Retention
            </h2>
            <p>
              We retain communications for as long as necessary to provide
              services. You may request deletion of your data at any time by
              contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Contact</h2>
            <p>
              Questions about this Privacy Policy? Email{" "}
              <a
                href="mailto:contact@avsolutions.dev"
                className="text-violet-400 hover:text-violet-300"
              >
                contact@avsolutions.dev
              </a>
              .
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
