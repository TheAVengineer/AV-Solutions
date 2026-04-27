import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen relative">
      <Nav />
      <article className="mx-auto max-w-3xl px-6 pt-40 pb-24 text-white/80">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
          Terms of Service
        </h1>
        <p className="text-white/50 mb-12">Last updated: April 2026</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Agreement</h2>
            <p>
              By accessing AV Solutions (&ldquo;the Service&rdquo;), you agree
              to be bound by these Terms of Service. If you disagree with any
              part of the terms, you may not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
            <p>
              AV Solutions provides AI and automation consulting, custom
              software development, and related services. Specific deliverables,
              timelines, and pricing are agreed in a separate engagement letter
              for each project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Intellectual Property
            </h2>
            <p>
              Unless otherwise agreed in writing, AV Solutions retains ownership
              of any pre-existing tools, libraries, or methodologies used in
              client projects. Custom code written specifically for a client is
              transferred upon final payment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Limitation of Liability
            </h2>
            <p>
              AV Solutions provides services on an &ldquo;as is&rdquo; basis. To
              the fullest extent permitted by law, AV Solutions is not liable
              for any indirect, incidental, or consequential damages arising
              from use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Contact</h2>
            <p>
              Questions about these Terms? Email{" "}
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
