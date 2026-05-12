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

function EnglishTerms() {
  return (
    <Wrapper title="Terms of Service" updated="Last updated: May 2026">
      <Section heading="1. Provider">
        <p>
          This website is operated by АйВи Солюшънс ЕООД (AV Solutions EOOD), UIC 207491066,
          registered in Bulgaria. Full details on our{" "}
          <a href="/imprint" className={linkCls}>
            Imprint
          </a>{" "}
          page.
        </p>
      </Section>
      <Section heading="2. Agreement">
        <p>
          By accessing this site (&ldquo;the Service&rdquo;), you agree to these Terms of
          Service. If you disagree, please do not use the Service.
        </p>
      </Section>
      <Section heading="3. Services">
        <p>
          AV Solutions provides AI and automation consulting, custom software development, and
          related services. Specific deliverables, timelines, and pricing are agreed in a
          separate engagement letter for each project.
        </p>
      </Section>
      <Section heading="4. Intellectual property">
        <p>
          Unless otherwise agreed in writing, AV Solutions retains ownership of any pre-existing
          tools, libraries, or methodologies used in client projects. Custom code written
          specifically for a client is transferred upon final payment.
        </p>
      </Section>
      <Section heading="5. Limitation of liability">
        <p>
          The website and any free preliminary information are provided on an &ldquo;as
          is&rdquo; basis. To the fullest extent permitted by law, AV Solutions is not liable
          for indirect, incidental, or consequential damages arising from use of the website.
          Liability under paid client engagements is governed by the engagement letter.
        </p>
      </Section>
      <Section heading="6. Consumer rights">
        <p>
          Nothing in these Terms limits the mandatory rights of consumers under the law of
          their habitual residence within the EU, including the right of withdrawal where
          applicable.
        </p>
      </Section>
      <Section heading="7. Governing law and jurisdiction">
        <p>
          These Terms are governed by the laws of the Republic of Bulgaria. Mandatory consumer
          protection rules of the consumer&rsquo;s country of residence continue to apply.
          Disputes are subject to the competent courts in Sofia, Bulgaria, unless mandatory law
          provides otherwise.
        </p>
      </Section>
      <Section heading="8. Contact">
        <p>
          Questions about these Terms? Email <ContactEmail />.
        </p>
      </Section>
    </Wrapper>
  );
}

function BulgarianTerms() {
  return (
    <Wrapper title="Общи условия" updated="Последна актуализация: май 2026 г.">
      <Section heading="1. Доставчик">
        <p>
          Този сайт се поддържа от „АйВи Солюшънс&ldquo; ЕООД, ЕИК 207491066, със седалище в
          Република България. Пълните данни са в{" "}
          <a href="/imprint" className={linkCls}>
            Импресум
          </a>
          .
        </p>
      </Section>
      <Section heading="2. Съгласие">
        <p>
          С достъпа си до този сайт („Услугата&ldquo;) Вие приемате настоящите Общи условия. Ако
          не сте съгласни, моля, не използвайте Услугата.
        </p>
      </Section>
      <Section heading="3. Услуги">
        <p>
          AV Solutions предоставя консултации в областта на AI и автоматизация, разработка на
          специализиран софтуер и свързани услуги. Конкретните дейности, срокове и цени се
          договарят с отделно писмено възлагане (engagement letter) за всеки проект.
        </p>
      </Section>
      <Section heading="4. Интелектуална собственост">
        <p>
          Освен ако не е уговорено друго в писмена форма, AV Solutions запазва правата върху
          предварително съществуващи инструменти, библиотеки и методологии, използвани в
          клиентски проекти. Кодът, написан специално за клиента, се прехвърля при пълно
          плащане.
        </p>
      </Section>
      <Section heading="5. Ограничение на отговорността">
        <p>
          Сайтът и предоставената безплатно предварителна информация се ползват „както са&ldquo;.
          В максимално допустимата от закона степен AV Solutions не носи отговорност за
          непреки, инцидентни или последващи вреди, произтичащи от ползването на сайта.
          Отговорността по платени проектни ангажименти се урежда от съответния договор.
        </p>
      </Section>
      <Section heading="6. Потребителски права">
        <p>
          Настоящите Общи условия не ограничават императивните права на потребителите по
          приложимото право на държавата им на обичайно пребиваване в ЕС, включително правото
          на отказ, когато е приложимо.
        </p>
      </Section>
      <Section heading="7. Приложимо право и подсъдност">
        <p>
          Настоящите Общи условия се уреждат от законите на Република България. Императивните
          норми за защита на потребителите в страната на пребиваване на потребителя продължават
          да се прилагат. Споровете са подсъдни на компетентните съдилища в гр. София, освен
          ако императивна правна норма не предвижда друго.
        </p>
      </Section>
      <Section heading="8. Контакт">
        <p>
          Въпроси относно тези условия? Пишете на <ContactEmail />.
        </p>
      </Section>
    </Wrapper>
  );
}

function GermanTerms() {
  return (
    <Wrapper title="Allgemeine Geschäftsbedingungen" updated="Stand: Mai 2026">
      <Section heading="1. Anbieter">
        <p>
          Diese Website wird betrieben von der АйВи Солюшънс ЕООД (AV Solutions EOOD), UIC
          207491066, mit Sitz in Bulgarien. Vollständige Angaben im{" "}
          <a href="/imprint" className={linkCls}>
            Impressum
          </a>
          .
        </p>
      </Section>
      <Section heading="2. Geltungsbereich">
        <p>
          Mit dem Zugriff auf diese Website („der Dienst&ldquo;) erklären Sie sich mit diesen
          AGB einverstanden. Wenn Sie nicht einverstanden sind, nutzen Sie den Dienst bitte
          nicht.
        </p>
      </Section>
      <Section heading="3. Leistungen">
        <p>
          AV Solutions erbringt Beratungsleistungen in den Bereichen KI und Automatisierung,
          Individualsoftwareentwicklung und verwandte Dienstleistungen. Konkrete Leistungen,
          Zeitpläne und Preise werden in einem gesonderten Auftragsschreiben für jedes Projekt
          vereinbart.
        </p>
      </Section>
      <Section heading="4. Geistiges Eigentum">
        <p>
          Sofern nicht schriftlich anders vereinbart, behält AV Solutions das Eigentum an
          vorbestehenden Werkzeugen, Bibliotheken und Methoden, die in Kundenprojekten
          eingesetzt werden. Speziell für den Kunden geschriebener Code wird mit vollständiger
          Bezahlung übertragen.
        </p>
      </Section>
      <Section heading="5. Haftungsbeschränkung">
        <p>
          Die Website und kostenfreie Vorabinformationen werden „wie besehen&ldquo; bereitgestellt.
          Soweit gesetzlich zulässig haftet AV Solutions nicht für mittelbare, zufällige oder
          Folgeschäden aus der Nutzung der Website. Die Haftung in bezahlten Projektmandaten
          richtet sich nach dem jeweiligen Auftragsschreiben.
        </p>
      </Section>
      <Section heading="6. Verbraucherrechte">
        <p>
          Diese AGB schränken zwingende Verbraucherrechte nach dem Recht des gewöhnlichen
          Aufenthalts des Verbrauchers innerhalb der EU nicht ein — einschließlich eines
          etwaigen Widerrufsrechts.
        </p>
      </Section>
      <Section heading="7. Anwendbares Recht und Gerichtsstand">
        <p>
          Es gilt das Recht der Republik Bulgarien. Zwingende verbraucherschützende Vorschriften
          des Wohnsitzlandes des Verbrauchers bleiben unberührt. Gerichtsstand ist Sofia
          (Bulgarien), soweit nicht zwingendes Recht etwas anderes bestimmt.
        </p>
      </Section>
      <Section heading="8. Kontakt">
        <p>
          Fragen zu diesen AGB? Schreiben Sie an <ContactEmail />.
        </p>
      </Section>
    </Wrapper>
  );
}

export default function TermsContent() {
  const { locale } = useTranslation();
  if (locale === "bg") return <BulgarianTerms />;
  if (locale === "de") return <GermanTerms />;
  return <EnglishTerms />;
}
