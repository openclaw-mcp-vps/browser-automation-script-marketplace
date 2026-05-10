export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Marketplace
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Buy &amp; Sell{" "}
          <span className="text-[#58a6ff]">Browser Automation</span>{" "}
          Scripts
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Discover production-ready Puppeteer &amp; Playwright scripts. Sell your own automations and earn revenue sharing — all in one marketplace built for developers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Selling — $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-sm text-[#8b949e]">Scripts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">70%</div>
            <div className="text-sm text-[#8b949e]">Revenue Share</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">1.2k+</div>
            <div className="text-sm text-[#8b949e]">Developers</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
          <div className="text-4xl font-extrabold text-white mb-1">$29<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] mb-6">Everything you need to automate &amp; earn</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited script downloads",
              "Sell your own scripts",
              "70% revenue share on sales",
              "Secure script delivery",
              "Seller dashboard &amp; analytics",
              "Priority support"
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What frameworks are supported?</h3>
            <p className="text-[#8b949e] text-sm">All scripts are built with Puppeteer or Playwright and run on Node.js. Each listing specifies its dependencies and tested environments.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does revenue sharing work?</h3>
            <p className="text-[#8b949e] text-sm">Sellers keep 70% of every sale. Payouts are processed monthly via Stripe with no minimum threshold. You set your own script prices.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel your subscription at any time from your dashboard. You retain access until the end of your billing period with no cancellation fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} ScriptMarket. All rights reserved.
      </footer>
    </main>
  );
}
