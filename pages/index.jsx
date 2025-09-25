import React, { useState, useRef, useEffect } from "react";

// Bhuniro Landing Page
// Refactored into smaller, reusable components for better readability and maintenance.

export default function BhuniroLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased font-sans">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="pt-16">
        <HeroSection />
        <CustomerTrustSection />
        <IndustrySection />
        <FeaturesSection />
        <PricingSection />
        <ResourcesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

// Sub-components for each section for cleaner code

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="bg-white border-b fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/busylogo.png"
            alt="Bhuniro Logo"
            className="h-10 w-10 object-contain"
          />
          <div>
            <div className="font-semibold text-lg">Bhuniro</div>
            <div className="text-xs text-gray-500">Official Channel Partner of Busy (India) in Nepal</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#resources" className="hover:underline">Resources</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="/signin" className="px-4 py-2 rounded-md border text-sm">Sign in</a>
          <a href="#trial" className="px-4 py-2 rounded-md bg-blue-700 text-white text-sm">Start Free Trial</a>
        </nav>

        <div className="md:hidden">
          <button className="p-2 rounded-md border" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">Menu</button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center gap-6 py-6 text-lg">
          <a href="#features" className="hover:underline" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#pricing" className="hover:underline" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#resources" className="hover:underline" onClick={() => setMenuOpen(false)}>Resources</a>
          <a href="#contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="/signin" className="px-4 py-2 rounded-md border text-sm" onClick={() => setMenuOpen(false)}>Sign in</a>
          <a href="#trial" className="px-4 py-2 rounded-md bg-blue-700 text-white text-sm" onClick={() => setMenuOpen(false)}>Start Free Trial</a>
        </nav>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        <div className="md:w-1/2 text-center md:text-left">
          <img
            src="/busylogo.png"
            alt="Bhuniro Logo"
            className="h-30 w-40 mx-auto md:mx-0 mb-4 object-contain"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Smart, Simple Accounting for Your Business
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-gray-700">
            Streamline your finances, manage VAT, and automate billing. Our solution is built to simplify your business operations.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a href="#trial" className="px-7 py-3 rounded-xl bg-blue-700 text-white font-bold shadow-lg hover:bg-blue-800 transition-all duration-150 text-base">Start Free Trial</a>
            <a href="#contact" className="px-7 py-3 rounded-xl border-2 border-blue-700 text-blue-700 font-bold bg-white hover:bg-blue-50 transition-all duration-150 text-base">Request Demo</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://via.placeholder.com/600x400?text=Software+UI+Placeholder"
            alt="Software User Interface"
            className="w-full max-w-xl rounded-xl shadow-xl border border-gray-100"
          />
        </div>
      </div>
    </section>
  );
}

function CustomerTrustSection() {
  const testimonials = [
    {
      text: "The software has completely streamlined our accounting processes. The local support has been incredibly helpful in getting everything set up correctly for our Nepali business. Highly recommended for any business owner in Nepal.",
      author: "Priya Sharma",
      title: "CFO, Tech Solutions Nepal",
    },
    {
      text: "We were looking for a reliable, IRD-compliant accounting solution. Busy provided exactly that. It's user-friendly, robust, and the features for inventory management are a game-changer.",
      author: "Sanjay Gurung",
      title: "CEO, Himalayan Traders Co.",
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-blue-900 mb-2">Trusted by 3,60,000+ businesses globally</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-700">20+</div>
              <p className="text-sm text-gray-600">Years of business management solutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-700">35+</div>
              <p className="text-sm text-gray-600">Countries trust our solutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-700">#1</div>
              <p className="text-sm text-gray-600">Preferred choice for SMEs</p>
            </div>
          </div>
          <div className="mt-8">
            <a href="#success-stories" className="px-6 py-3 rounded-md bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition">Read Success Stories</a>
          </div>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-2xl font-extrabold text-center text-blue-900 mb-6">What Our Customers Say</h3>
          <div className="flex overflow-x-auto gap-8 snap-x snap-mandatory md:grid md:grid-cols-1 hide-scrollbar">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[85vw] md:w-full snap-center md:snap-start">
                <blockquote className="bg-white rounded-2xl shadow-lg p-8">
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                  <div className="text-gray-600 text-sm">
                    <span className="font-semibold">{testimonial.author}</span><br />
                    {testimonial.title}
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const IndustryIcon = ({ type }) => {
  const icons = {
    'auto': '🚗',
    'retail': '🛍️',
    'chemical': '🧪',
    'fmcg': '🛒',
    'food': '🍔',
    'computer': '💻',
    'book': '📚',
    'electrical': '⚡',
    'paper': '📄',
    'travel': '✈️',
    'furniture': '🛋️',
    'pharma': '💊',
    'paint': '🎨',
    'mobile': '📱',
    'garments': '👕',
    'jewellery': '💎',
    'agriculture': '🌾',
    'stationery': '✏️',
  };
  return <div className="text-4xl">{icons[type]}</div>;
};

function IndustrySection() {
  const industries = [
    { name: "Auto Parts", icon: "auto" },
    { name: "Retail", icon: "retail" },
    { name: "Chemical", icon: "chemical" },
    { name: "FMCG", icon: "fmcg" },
    { name: "Food & Beverage", icon: "food" },
    { name: "Computer Hardware", icon: "computer" },
    { name: "Book Publishing", icon: "book" },
    { name: "Electrical Goods", icon: "electrical" },
    { name: "Paper", icon: "paper" },
    { name: "Travel", icon: "travel" },
    { name: "Furniture", icon: "furniture" },
    { name: "Pharma", icon: "pharma" },
    { name: "Paint", icon: "paint" },
    { name: "Mobile Store", icon: "mobile" },
    { name: "Garments", icon: "garments" },
    { name: "Gems & Jewellery", icon: "jewellery" },
    { name: "Agriculture", icon: "agriculture" },
    { name: "Stationery", icon: "stationery" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-2">Accounting Software For Your Industry</h2>
      <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">We understand that every industry has its own unique accounting & business requirements, and Bhuniro Accounting Software is designed to address them effectively.</p>
      <div className="bg-white rounded-2xl p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-2">
                <IndustryIcon type={industry.icon} />
              </div>
              <div className="mt-2 text-sm font-medium text-gray-700">{industry.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const featuresData = [
  { title: "Accounting & VAT", desc: "Complete ledger, voucher types, VAT-ready reports and return files.", icon: "📑" },
  { title: "Inventory & Billing", desc: "Batch and serial tracking, multi-location stock, barcode support.", icon: "📦" },
  { title: "Payroll & HR", desc: "Salary processing, PF/ESI (where applicable), payslips and leave management.", icon: "👥" },
  { title: "Bank Reconciliation", desc: "Automated import templates and reconciliation workflows.", icon: "🏦" },
  { title: "Reports & Dashboards", desc: "Prebuilt financial statements and custom report builder.", icon: "📊" },
  { title: "Local Support", desc: "Nepali language support and on-ground implementation assistance.", icon: "🤝" },
];

function FeaturesSection() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-16">
      <h2 className="text-2xl font-bold">Key features</h2>
      <p className="text-gray-600 mt-2 max-w-2xl">Everything you need for accounting, inventory, payroll, and compliance in Nepal.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} desc={feature.desc} icon={feature.icon} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon = "✨", title, desc }) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg border shadow-sm">
      <div className="text-3xl">{icon}</div>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

const pricingPlans = [
  {
    name: "Basic",
    priceSingle: 66,
    priceMulti: 166,
    bullets: ["Create Accounting Vouchers", "Unlimited Receipts, Invoices", "Digital Sign Invoice & Receipts", "Fully Configurable Invoicing", "Add Books of Accounts and Final Accounts", "Inventory up to 500 SKUs", "Configurable & Prebuilt Reports", "Data Exchange Among GST/VAT Users"],
  },
  {
    name: "Standard",
    priceSingle: 93,
    priceMulti: 239,
    recommended: true,
    bullets: ["All features of Basic", "GST/VAT returns in JSON", "Direct Upload GST/VAT to IRD", "Auto Reconciliation of GSTR", "Post Dated Cheque Register", "Multiple Account Aliases", "Message Center", "Multiple Jobs for Each Item", "Production/Job Work", "Receivables & Payables", "Data Security & User-wise Controls"],
  },
  {
    name: "Enterprise",
    priceSingle: 133,
    priceMulti: 332,
    bullets: ["All features of Standard", "Voucher/Member Approval & Security", "Message Center", "Project Management", "Incident Management", "GST/VAT Segmentation", "Messaging/Alerts GST/VAT"],
  },
];

const PriceCard = React.forwardRef(({ name, priceNPR, bullets = [], recommended = false }, ref) => {
  return (
    <div ref={ref} className={`relative p-8 rounded-2xl border-2 border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-500 ${recommended ? 'ring-2 ring-blue-500' : ''} flex-shrink-0 w-[85vw] md:w-auto snap-center md:snap-start`}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-xl font-bold tracking-tight">{name}</div>
        {recommended && (
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">Most Popular</span>
        )}
      </div>
      <div className={`mt-2 text-4xl font-extrabold text-blue-700 tracking-tight`}>
        ${priceNPR}<span className="text-base font-normal">*</span>
      </div>
      <div className="text-xs text-gray-500 mb-4">per month</div>
      <ul className="mt-4 space-y-3 text-gray-700 text-base">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <a href="#trial" className="block text-center px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition-all duration-200">Get Free Demo</a>
      </div>
    </div>
  );
});

function PricingSection() {
  const [multiUser, setMultiUser] = useState(false);
  const scrollContainerRef = useRef(null);
  const standardCardRef = useRef(null);

  useEffect(() => {
    // Only scroll to the standard card on the initial load and on small screens
    if (scrollContainerRef.current && standardCardRef.current && window.innerWidth < 768) {
      scrollContainerRef.current.scrollLeft = standardCardRef.current.offsetLeft;
    }
  }, []);

  return (
    <section id="pricing" className="bg-gray-100 border-t font-sans py-16 px-6 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center">Pricing</h2>
        <p className="text-center text-gray-600 mt-2">Choose the plan that's right for your business.</p>
        <div className="flex items-center gap-4 mt-8 justify-center">
          <span className="font-semibold text-base text-gray-700">Single User</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="userTypeToggle" className="sr-only peer" onChange={e => setMultiUser(e.target.checked)} checked={multiUser} />
            <div className={`w-14 h-8 bg-gray-200 rounded-full border border-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 transition-all ${multiUser ? 'bg-blue-600' : ''}`}>
              <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ${multiUser ? 'translate-x-6' : ''}`}></div>
            </div>
          </label>
          <span className="ml-4 font-semibold text-base text-gray-700">Multi User</span>
        </div>
        
        <div ref={scrollContainerRef} className="mt-8 flex md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-8 flex-row overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar">
          {pricingPlans.map((plan, index) => (
            <PriceCard
              key={index}
              name={plan.name}
              priceNPR={multiUser ? plan.priceMulti : plan.priceSingle}
              bullets={plan.bullets}
              recommended={plan.recommended}
              ref={plan.recommended ? standardCardRef : null}
            />
          ))}
        </div>
        
        <div className="mt-8 text-sm text-gray-500 text-center">
          <strong>Payment:</strong> We accept bank transfer, eSewa, Khalti, and letter of credit for enterprise deals.
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section id="resources" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold">Getting started</h3>
          <ul className="mt-4 space-y-3 text-gray-600">
            <li>Free migration consultation for your accounting data.</li>
            <li>Local training and configuration packages.</li>
            <li>Step-by-step guides and video tutorials.</li>
            </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Support</h3>
          <p className="mt-4 text-gray-600">Email: <a className="text-blue-600" href="mailto:support@busynepal.com">support@busynepal.com</a></p>
          <p className="mt-2 text-gray-600">Phone/WhatsApp: +977 98000 00000</p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-bold">Contact our Nepal team</h3>
          <p className="mt-3 text-gray-600">We provide demos, implementation, and post-sales support across Nepal.</p>
          <div className="mt-6 space-y-3">
            <div className="text-sm text-gray-700"><strong>Address</strong>: Kathmandu, Nepal</div>
            <div className="text-sm text-gray-700"><strong>Email</strong>: <a href="mailto:partner@busynepal.com" className="text-blue-700">partner@busynepal.com</a></div>
            <div className="text-sm text-gray-700"><strong>Phone</strong>: +977 98000 00000</div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted. This is a placeholder for your backend integration.");
    alert("Request submitted. We will contact you shortly.");
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg border shadow-sm">
      <div className="grid grid-cols-1 gap-4">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
        <input name="name" id="name" required className="px-3 py-2 border rounded-md" />

        <label htmlFor="company" className="text-sm font-medium text-gray-700">Business / Company</label>
        <input name="company" id="company" className="px-3 py-2 border rounded-md" />

        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
        <input name="email" id="email" type="email" required className="px-3 py-2 border rounded-md" />

        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone / WhatsApp</label>
        <input name="phone" id="phone" className="px-3 py-2 border rounded-md" />

        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
        <textarea name="message" id="message" rows={4} className="px-3 py-2 border rounded-md" />
        
        <div className="flex items-center gap-3 mt-3">
          <button type="submit" className="px-4 py-2 rounded-md bg-blue-700 text-white font-semibold">Send request</button>
          <button type="button" onClick={() => window.location.href = 'mailto:partner@busynepal.com'} className="px-4 py-2 rounded-md border text-gray-700">Email</button>
        </div>
      </div>
    </form>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Bhuniro. Official Channel Partner of Busy in Nepal.</div>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="text-sm text-gray-600">Privacy</a>
          <a href="#terms" className="text-sm text-gray-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}