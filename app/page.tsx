"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Topics", href: "#topics" },
    { name: "Speakers", href: "#speakers" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <div className="min-h-screen bg-white font-(--font-poppins)">
      {/* Fixed Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className={`text-xl font-bold tracking-tight ${isScrolled ? "text-(--primary-900)" : "text-white"}`}>
            <span className="font-(--font-playfair)">CET</span>
            <span className="text-(--accent-500) ml-1">2026</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-(--accent-500) ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-gray-700" : "text-white"}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 font-medium py-2 border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center bg-linear-to-br from-(--dark-bg) via-(--primary-900) to-(--primary-950) overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-(--accent-500)/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-(--primary-500)/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-(--primary-500)/5 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-(--accent-400) rounded-full animate-pulse"></span>
                <span className="text-white/90 text-sm font-medium">Timothy Institute Presents</span>
              </div>

              <h1 className="font-(--font-playfair) text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6" style={{ lineHeight: 1.3 }}>
                Child Evangelism
                <br />
                <span className="text-(--accent-400)">
                  Training 2026
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                A transformational training program equipping young Christian leaders to meaningfully engage in ministry among children and youth.
              </p>

              {/* Event Info Cards */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                <div className="glass rounded-xl px-5 py-3 text-center flex flex-col justify-center">
                  <p className="text-(--accent-400) text-xs font-semibold uppercase tracking-wider">Date</p>
                  <p className="text-white font-semibold">Jan 30 - Feb 1</p>
                </div>
                <div className="glass rounded-xl px-5 py-3 text-center flex flex-col justify-center">
                  <p className="text-(--accent-400) text-xs font-semibold uppercase tracking-wider">Venue</p>
                  <p className="text-white font-semibold text-sm">Faith Home, <br></br>Kollakadavu, Chengannur</p>
                </div>
                <div className="glass rounded-xl px-5 py-3 text-center flex flex-col justify-center">
                  <p className="text-(--accent-400) text-xs font-semibold uppercase tracking-wider">Age</p>
                  <p className="text-white font-semibold">18-30 Years</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/10"
                >
                  Learn More
                </a> */}
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-(--accent-500)/30 to-(--primary-500)/30 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-3xl h-[500px] overflow-hidden shadow-2xl">
                  <Image 
                    src="/hero.jpg"
                    alt="Teacher with children in classroom"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/50 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-(--accent-600) font-semibold text-sm uppercase tracking-wider mb-3">About The Program</span>
              <h2 className="font-(--font-playfair) text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What is CET?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                CET was launched to meet the pressing need for a contextual and
                creative training program in children&apos;s and youth ministry.
                This intensive course is tailored for those who carry a burden to
                minister among the younger generation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Equip with Skills",
                  desc: "Gain practical ministry skills for children's evangelism that work in real-world settings",
                },
                {
                  icon: "💪",
                  title: "Build Confidence",
                  desc: "Learn to teach effectively in any context with proven methods and techniques",
                },
                {
                  icon: "✝️",
                  title: "Lead to Christ",
                  desc: "Guide children to faith with clarity, conviction, and biblical foundation",
                },
                {
                  icon: "🛠️",
                  title: "Hands-on Training",
                  desc: "Use modern tools and creative methods relevant for today's digital world",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-linear-to-br from-slate-50 to-(--primary-50)/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-(--primary-200)"
                >
                  <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{item.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section id="features" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-(--accent-600) font-semibold text-sm uppercase tracking-wider mb-3">Training Modules</span>
            <h2 className="font-(--font-playfair) text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What You&apos;ll Learn
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Practical, hands-on training designed to help you confidently use
              these methods in real ministry settings
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { icon: "🧒", name: "Child Psychology" },
              { icon: "📚", name: "Bible Lesson Presentation" },
              { icon: "💡", name: "Object Lessons" },
              { icon: "📖", name: "Storytelling" },
              { icon: "🎵", name: "Action Songs" },
              { icon: "✂️", name: "Craft Time" },
              { icon: "🎭", name: "Puppetry" },
              { icon: "❓", name: "Interactive Quizzes" },
              { icon: "✍️", name: "Creative Writing" },
              { icon: "💻", name: "Digital Tools" },
              { icon: "🎤", name: "Live Q&A" },
              { icon: "🤹", name: "Hand Tricks" },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 text-center shadow-xs hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-(--accent-200) hover:-translate-y-1"
              >
                <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{feature.icon}</span>
                <p className="text-gray-800 font-semibold">
                  {feature.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Topics */}
      <section id="topics" className="py-20 md:py-28 bg-linear-to-br from-(--dark-bg) via-(--primary-900) to-(--primary-950) text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-(--accent-400) font-semibold text-sm uppercase tracking-wider mb-3">Curriculum</span>
            <h2 className="font-(--font-playfair) text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Course Topics
            </h2>
            <p className="text-(--primary-200) text-lg max-w-2xl mx-auto">
              Comprehensive curriculum covering all aspects of children&apos;s ministry
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              "Lesson Preparation & Presentation",
              "Child Psychology",
              "Teaching Children's Songs",
              "Creative Memory Verse Teaching",
              "Mentoring a Child",
              "Communication & Media Skills",
              "Digital Games & Crafts",
              "Leading a Child to Christ",
              "Setting Up a Digital Classroom",
              "Hand Tricks & Puppetry",
            ].map((topic, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 glass rounded-xl p-5 hover:bg-white/20 transition-all"
              >
                <span className="bg-(--accent-400) text-(--dark-bg) w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-110 transition-transform">
                  {index + 1}
                </span>
                <span className="font-medium text-lg">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Persons */}
      <section id="speakers" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-(--accent-600) font-semibold text-sm uppercase tracking-wider mb-3">Our Trainers</span>
            <h2 className="font-(--font-playfair) text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Resource Persons
            </h2>
            <p className="text-gray-600 text-lg">
              Learn from experienced national and international trainers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { name: "Dr. P. R. D. Prabhu", role: "Senior Trainer", image: "/prabhu.png" },
              { name: "Bensic Miranda", role: "Trainer", image: "/bensic.png" },
              { name: "Anson P Elias", role: "Trainer", image: "/anson.png" },
              { name: "Sunny Keerithodu", role: "Trainer", image: "/sunny.png" },
            ].map((person, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  {person.image ? (
                    <div className="w-32 h-40 md:w-40 md:h-48 mx-auto rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                      <Image 
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover object-top rounded-2xl"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-40 md:w-40 md:h-48 mx-auto bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 group-hover:border-(--accent-400) transition-all">
                      <svg className="w-14 h-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{person.name}</h3>
                <p className="text-(--accent-600) text-sm font-medium">{person.role}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-12 text-sm bg-gray-50 rounded-full py-3 px-6 max-w-fit mx-auto">
            ...and several other national and international resource persons from Timothy Institute
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-(--accent-600) font-semibold text-sm uppercase tracking-wider mb-3">Got Questions?</span>
            <h2 className="font-(--font-playfair) text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "When does CET begin?",
                a: "The Child Evangelism Training (CET) will be conducted from January 30 to February 1, 2026.",
              },
              {
                q: "How will the sessions be conducted?",
                a: "All CET sessions will be held offline at Faith Home, Kollakadvu Chengannur. Participants are expected to be physically present throughout the program.",
              },
              {
                q: "Who can participate?",
                a: "Young men and women aged between 18 and 30, with or without a theological degree, who have a passion for ministering to children and youths are welcome. This includes professionals, those with secular degrees, theological students, and anyone who desires to grow in children's ministry.",
              },
              {
                q: "What is the medium of instruction?",
                a: "Sessions will be conducted in both English and Malayalam to ensure clarity and accessibility.",
              },
              {
                q: "What is the course fee?",
                a: "There is no registration fee for CET. However, participants are encouraged to make a small contribution toward camp expenses, with a minimum suggested amount of ₹500.",
              },
              {
                q: "How will I receive updates?",
                a: "After registering, you will receive a registration confirmation email and continuous updates. A temporary WhatsApp group will provide session updates, curriculum information, feedback forms, and daily assignments.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xs border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleSection(`faq-${index}`)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${activeSection === `faq-${index}` ? "bg-(--accent-500) rotate-180" : "bg-gray-100"}`}>
                    <svg className={`w-5 h-5 transition-colors ${activeSection === `faq-${index}` ? "text-white" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeSection === `faq-${index}` ? "max-h-96" : "max-h-0"}`}>
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 md:py-28 bg-linear-to-br from-(--dark-bg) via-(--primary-900) to-(--primary-950) text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-(--accent-500)/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-(--primary-500)/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-(--accent-400) font-semibold text-sm uppercase tracking-wider mb-3">Join Us</span>
          <h2 className="font-(--font-playfair) text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Transform Your Ministry?
          </h2>
          <p className="text-(--primary-200) text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of young leaders who are being equipped to reach the
            next generation for Christ. Registration is completely free!
          </p>

          <div className="glass rounded-3xl p-5 sm:p-8 md:p-10 max-w-lg mx-auto mb-10 border border-white/10">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-(--primary-200) font-medium text-sm sm:text-base">Registration Fee</span>
                <span className="text-xl sm:text-2xl font-bold text-(--accent-400)">FREE</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-(--primary-200) text-sm sm:text-base">Suggested Contribution</span>
                <span className="font-semibold text-sm sm:text-base text-right">₹500</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-(--primary-200) text-sm sm:text-base">Age Requirement</span>
                <span className="font-semibold text-sm sm:text-base">18 - 30 years</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-(--primary-200) text-sm sm:text-base">Duration</span>
                <span className="font-semibold text-sm sm:text-base">3 Days</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-(--primary-200) text-sm sm:text-base">Language</span>
                <span className="font-semibold text-sm sm:text-base">English & Malayalam</span>
              </div>
            </div>
          </div>

          <a
            href="https://forms.gle/bVtNjCTyBmnkeWcp6"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 md:gap-3 bg-(--accent-400) hover:bg-(--accent-300) text-(--dark-bg) font-bold px-5 py-3.5 sm:px-8 sm:py-4 md:px-12 md:py-5 rounded-full text-sm sm:text-base md:text-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105 mx-4 sm:mx-0"
          >
            <span className="whitespace-nowrap">Register Now — It&apos;s Free</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-(--primary-300) text-sm mt-6">
            ⚡ Limited seats available • Register early to secure your spot
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <h3 className="font-(--font-playfair) text-2xl font-bold mb-4">
                <span>CET</span>
                <span className="text-(--accent-500) ml-1">2026</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A signature initiative of Timothy Institute, designed to equip
                and empower young Christian leaders for children&apos;s ministry.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Event Details</h3>
              <div className="text-gray-400 space-y-3">
                <p className="flex items-center gap-2">
                  <span className="text-(--accent-500)">📅</span> January 30 - February 1, 2026
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-(--accent-500)">📍</span> Faith Home, Kollakadvu Chengannur
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-(--accent-500)">🗣️</span> English & Malayalam
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="block text-gray-400 hover:text-(--accent-500) transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Timothy Institute. All rights reserved.
            </p>
            <a
              href="https://forms.gle/bVtNjCTyBmnkeWcp6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--accent-500) hover:text-(--accent-400) font-semibold text-sm transition-colors"
            >
              Register Now →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
