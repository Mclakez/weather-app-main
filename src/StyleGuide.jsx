export default function StyleGuide() {
  return (
    <div className="p-6 space-y-8">
      {/* Typography */}
      <section>
        <h2 className="font-heading text-3xl mb-2">Heading (Bricolage Grotesque)</h2>
        <p className="font-sans text-base text-neutral-700">
          Body text using DM Sans, size 18px.
        </p>
      </section>

      {/* Colors */}
      <section className="grid grid-cols-3 gap-4">
        <div className="bg-neutral-900 text-neutral-0 p-4 rounded">Neutral 900</div>
        <div className="bg-blue-500 text-neutral-0 p-4 rounded">Blue 500</div>
        <div className="bg-orange-500 text-neutral-0 p-4 rounded">Orange 500</div>
      </section>
    </div>
  );
}
