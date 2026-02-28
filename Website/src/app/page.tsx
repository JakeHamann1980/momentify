import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Platform from "@/components/Platform";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Problem />
      <Platform />
      {/* CTA band */}
      <section id="demo" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-teal mb-5">
            Get Started
          </p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-light text-charcoal tracking-[-0.02em] leading-[1.15]">
            What you do not measure is what you lose.
          </h2>
          <p className="mt-5 text-gray-body text-[16px] leading-[1.75] max-w-lg">
            Most teams walk away from events with a spreadsheet. You will walk
            away with intelligence.
          </p>
          <div className="mt-10">
            <a
              href="#demo"
              className="bg-charcoal text-white font-medium text-[14px] py-3 px-7 rounded-md hover:bg-charcoal/85 transition-colors"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
