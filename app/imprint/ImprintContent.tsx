"use client";

import { useTranslation } from "@/components/LanguageProvider";

const linkCls = "text-violet-400 hover:text-violet-300";

function Wrapper({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-40 pb-24 text-white/80">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
        {title}
      </h1>
      <p className="text-white/50 mb-12">{subtitle}</p>
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

function EnglishImprint() {
  return (
    <Wrapper
      title="Imprint"
      subtitle="Information pursuant to Bulgarian E-Commerce Act (ЗЕДЕП), Art. 4"
    >
      <Section heading="Company">
        <p>
          <strong className="text-white">АйВи Солюшънс ЕООД</strong>
          <br />
          (AV Solutions EOOD — single-member limited liability company registered in Bulgaria)
        </p>
      </Section>
      <Section heading="Registered office">
        <p>
          ул. Пирински проход 47, вх. А, ет. 6, ат. 1<br />
          ж.к. Борово, гр. София 1680
          <br />
          България / Bulgaria
        </p>
      </Section>
      <Section heading="Trade registry">
        <p>
          Registered in the Commercial Register and Register of Non-Profit Legal Entities
          maintained by the Bulgarian Registry Agency.
          <br />
          <strong className="text-white">UIC (ЕИК):</strong> 207491066
          <br />
          <span className="text-white/55 text-sm">
            Not registered for VAT under the Bulgarian VAT Act.
          </span>
        </p>
      </Section>
      <Section heading="Represented by">
        <p>Alexander Videnov, Manager (Управител)</p>
      </Section>
      <Section heading="Contact">
        <p>
          Email:{" "}
          <a href="mailto:contact@avsolutions.dev" className={linkCls}>
            contact@avsolutions.dev
          </a>
          <br />
          Phone:{" "}
          <a href="tel:+359879976699" className={linkCls}>
            +359 879 976 699
          </a>
        </p>
      </Section>
      <Section heading="Responsible for content">
        <p>Alexander Videnov (address as above)</p>
      </Section>
      <Section heading="EU online dispute resolution">
        <p>
          The European Commission provides a platform for online dispute resolution (ODR) at{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            ec.europa.eu/consumers/odr
          </a>
          . We are neither obliged nor willing to participate in dispute resolution proceedings
          before a consumer arbitration board.
        </p>
      </Section>
      <Section heading="Data protection supervisory authority">
        <p>
          Commission for Personal Data Protection (Комисия за защита на личните данни) —{" "}
          <a
            href="https://www.cpdp.bg"
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            cpdp.bg
          </a>
        </p>
      </Section>
      <Section heading="Liability">
        <p>
          The content of this website has been prepared with care, but we do not warrant that
          it is accurate, complete, or up to date at all times. External links lead to
          third-party websites for whose content we are not responsible.
        </p>
      </Section>
    </Wrapper>
  );
}

function BulgarianImprint() {
  return (
    <Wrapper
      title="Импресум"
      subtitle="Информация по чл. 4 от Закона за електронната търговия (ЗЕДЕП)"
    >
      <Section heading="Дружество">
        <p>
          <strong className="text-white">„АйВи Солюшънс&ldquo; ЕООД</strong>
          <br />
          (еднолично дружество с ограничена отговорност, регистрирано в Република България)
        </p>
      </Section>
      <Section heading="Седалище и адрес на управление">
        <p>
          ул. „Пирински проход&ldquo; № 47, вх. А, ет. 6, ат. 1<br />
          ж.к. Борово, гр. София 1680
          <br />
          Република България
        </p>
      </Section>
      <Section heading="Търговски регистър">
        <p>
          Вписано в Търговския регистър и регистъра на ЮЛНЦ към Агенцията по вписванията.
          <br />
          <strong className="text-white">ЕИК:</strong> 207491066
          <br />
          <span className="text-white/55 text-sm">
            Дружеството не е регистрирано по ЗДДС.
          </span>
        </p>
      </Section>
      <Section heading="Представляващ">
        <p>Александър Виденов, Управител</p>
      </Section>
      <Section heading="Контакт">
        <p>
          Имейл:{" "}
          <a href="mailto:contact@avsolutions.dev" className={linkCls}>
            contact@avsolutions.dev
          </a>
          <br />
          Телефон:{" "}
          <a href="tel:+359879976699" className={linkCls}>
            +359 879 976 699
          </a>
        </p>
      </Section>
      <Section heading="Отговорен за съдържанието">
        <p>Александър Виденов (адрес — горепосоченият)</p>
      </Section>
      <Section heading="Онлайн решаване на потребителски спорове (ОРС)">
        <p>
          Европейската комисия поддържа платформа за онлайн решаване на спорове, достъпна на{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            ec.europa.eu/consumers/odr
          </a>
          . Не сме длъжни и не желаем да участваме в процедури за извънсъдебно решаване на
          потребителски спорове пред арбитражна комисия.
        </p>
      </Section>
      <Section heading="Надзорен орган за защита на личните данни">
        <p>
          Комисия за защита на личните данни (КЗЛД) —{" "}
          <a
            href="https://www.cpdp.bg"
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            cpdp.bg
          </a>
        </p>
      </Section>
      <Section heading="Отговорност">
        <p>
          Съдържанието на този сайт е подготвено с грижа, но не гарантираме, че по всяко време е
          точно, пълно и актуално. Външните връзки водят към сайтове на трети лица, за чието
          съдържание не носим отговорност.
        </p>
      </Section>
    </Wrapper>
  );
}

function GermanImprint() {
  return (
    <Wrapper
      title="Impressum"
      subtitle="Angaben gemäß Art. 4 des bulgarischen E-Commerce-Gesetzes (ЗЕДЕП)"
    >
      <Section heading="Unternehmen">
        <p>
          <strong className="text-white">АйВи Солюшънс ЕООД</strong>
          <br />
          (AV Solutions EOOD — Einpersonen-Gesellschaft mit beschränkter Haftung nach
          bulgarischem Recht)
        </p>
      </Section>
      <Section heading="Sitz der Gesellschaft">
        <p>
          ул. Пирински проход 47, вх. А, ет. 6, ат. 1<br />
          ж.к. Борово, 1680 Sofia
          <br />
          Bulgarien
        </p>
      </Section>
      <Section heading="Handelsregister">
        <p>
          Eingetragen im Handelsregister und Register der gemeinnützigen juristischen Personen
          bei der bulgarischen Registeragentur.
          <br />
          <strong className="text-white">UIC (ЕИК):</strong> 207491066
          <br />
          <span className="text-white/55 text-sm">
            Nicht umsatzsteuerpflichtig nach bulgarischem UStG.
          </span>
        </p>
      </Section>
      <Section heading="Vertreten durch">
        <p>Alexander Videnov, Geschäftsführer (Управител)</p>
      </Section>
      <Section heading="Kontakt">
        <p>
          E-Mail:{" "}
          <a href="mailto:contact@avsolutions.dev" className={linkCls}>
            contact@avsolutions.dev
          </a>
          <br />
          Telefon:{" "}
          <a href="tel:+359879976699" className={linkCls}>
            +359 879 976 699
          </a>
        </p>
      </Section>
      <Section heading="Verantwortlich für den Inhalt">
        <p>Alexander Videnov (Anschrift wie oben)</p>
      </Section>
      <Section heading="EU-Online-Streitbeilegung">
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            ec.europa.eu/consumers/odr
          </a>
          . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </Section>
      <Section heading="Datenschutz-Aufsichtsbehörde">
        <p>
          Kommission für den Schutz personenbezogener Daten (Комисия за защита на личните данни) —{" "}
          <a
            href="https://www.cpdp.bg"
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            cpdp.bg
          </a>
        </p>
      </Section>
      <Section heading="Haftung">
        <p>
          Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Wir übernehmen jedoch keine
          Gewähr für die Aktualität, Vollständigkeit oder Richtigkeit der Inhalte. Für externe
          Links zu Inhalten Dritter sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </Section>
    </Wrapper>
  );
}

export default function ImprintContent() {
  const { locale } = useTranslation();
  if (locale === "bg") return <BulgarianImprint />;
  if (locale === "de") return <GermanImprint />;
  return <EnglishImprint />;
}
