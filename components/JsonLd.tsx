/**
 * Renders a JSON-LD structured-data block. Server component — safe to drop into
 * any page or layout. `data` is serialized as-is into a <script> tag.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
