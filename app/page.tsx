import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aeraf Khan",
  jobTitle: "Regulatory Affairs Professional",
  email: "mailto:khan.ae@northeastern.edu",
  telephone: "+1-857-421-8116",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boston",
    addressRegion: "MA",
    addressCountry: "US"
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Northeastern University"
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Taywade College of Pharmacy"
    }
  ],
  sameAs: ["https://www.linkedin.com/in/aerafkhan"],
  knowsAbout: [
    "FDA Submissions",
    "510(k)",
    "PMA",
    "EU MDR",
    "Health Canada Regulations",
    "ISO 13485",
    "21 CFR 820",
    "Quality Systems",
    "Regulatory Strategy"
  ]
};

export default function HomePage() {
  return (
    <>
      <CursorGlow />
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
