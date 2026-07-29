"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="font-heading text-3xl font-semibold text-eden-forest mb-4">
          Something went wrong
        </h1>
        <p className="text-eden-forest/70 mb-8">
          We&rsquo;re sorry about that. Please try again, or reach out to us
          directly if the problem continues.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-eden-forest text-white font-medium rounded-lg hover:bg-eden-forest/90 transition-colors"
          >
            Try Again
          </button>
          <a
            href="tel:5128816560"
            className="px-6 py-3 bg-eden-sage/40 text-eden-forest font-medium rounded-lg hover:bg-eden-sage/60 transition-colors"
          >
            Call (512) 881-6560
          </a>
        </div>
      </div>
    </section>
  );
}
