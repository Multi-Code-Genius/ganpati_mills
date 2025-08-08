"use client";

import { useState } from "react";
import Banner from "@layouts/components/Banner";

const DigitalPrintingPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const services = [
    {
      icon: "🎨",
      title: "Tailored Strategy",
      description:
        "We analyze your fabric type, order size, and market to advise on the ideal digital print method and cost-effective run",
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      description:
        "Reduce trial errors—our experience helps you finalize color profiles and print setups in record time.",
    },
    {
      icon: "🛡️",
      title: "Technical Guidance",
      description:
        "We offer ongoing support for print optimization, fabric prep, ink usage, and finishing processes.",
    },
    {
      icon: "📊",
      title: "Scalable Solutions",
      description:
        "From startups to bulk production, we help scale with quality consistency, sustainable dyes, and rapid outputs.",
    },
  ];

  const benefits = [
    "Fast turnaround time for urgent projects.",
    "High-quality & full-color printing results",
    "Cost-effective for short print runs.",
    "Wide range of colors and texture available",
  ];

  const faqs = [
    {
      question: "What materials can we use for digital printing?",
      answer:
        "Digital printing supports paper, cardstock, vinyl, canvas, fabric, and more depending on the printer type.",
    },
    {
      question: "How long does digital printing take?",
      answer:
        "Most jobs can be completed within 24–48 hours depending on complexity and quantity.",
    },
    {
      question: "Is digital printing eco-friendly?",
      answer:
        "Yes, it produces less waste, uses fewer chemicals, and offers on-demand printing to avoid overproduction.",
    },
  ];

  return (
    <div>
      {/* <Banner title="Digital Printing Services" /> */}

      {/* Hero Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="row items-center justify-center">
            <div className="animate lg:col-6 mb-10 lg:mb-0">
              <div className="relative">
                <div className="bg-red-500 text-white px-3 py-2 rounded-full text-xs sm:text-sm font-medium inline-block mb-4">
                  DIGITAL PRINTING SERVICES
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 sm:mb-6">
                  Precision meets creativity in textile printing.
                </h1>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-8">
                  From fashion apparel to home furnishings, our digital printing
                  service offers unmatched color accuracy, design flexibility,
                  and eco-friendly production techniques—tailored to meet
                  high-demand bulk orders with consistent quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <button className="btn btn-primary bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                    <span className="block sm:hidden">500+ patterns weekly</span>
                    <span className="hidden sm:block">Over 500+ vibrant patterns printed weekly.</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="animate lg:col-6">
              <div className="relative p-2 sm:p-4">
                <div className="bg-gray-100 rounded-2xl p-4 sm:p-8 text-center">
                  <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center">
                    <img src="/images/printing.jpeg" alt="Digital Printing" className="w-full h-full object-cover rounded-xl"/>
                  </div>
                  <p className="text-gray-500 mt-2 sm:mt-4 text-xs sm:text-sm">Digital Printing Sample</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section bg-green-50">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mb-4">
              How Ganpati Dyeing Mills supports your textile business?
            </h2>
          </div>

          {/* Service Cards */}
          <div className="row justify-center mb-12 sm:mb-16">
            {services.map((service, index) => (
              <div key={index} className="sm:col-6 lg:col-3 mb-6 sm:mb-8">
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg h-full text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
                  <h4 className="text-base sm:text-lg font-semibold text-dark mb-2 sm:mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <div className="row text-center">
                  <div className="sm:col-4 mb-4 sm:mb-0">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">
                      4.9
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">RATING</p>
                    <p className="text-2xs sm:text-xs text-gray-500">
                      2,000+ trusted client reviews
                    </p>
                  </div>
                  <div className="sm:col-4 mb-4 sm:mb-0">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">
                      97%
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">CLIENT SATISFACTION</p>
                    <p className="text-2xs sm:text-xs text-gray-500">
                      Clients rate us as a key partner in production planning.
                    </p>
                  </div>
                  <div className="sm:col-4">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">
                      250+
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">COMPLETED PROJECTS</p>
                    <p className="text-2xs sm:text-xs text-gray-500">
                      Successful digital print projects each month.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="row items-center justify-center">
            <div className="animate lg:col-6 mb-6 sm:mb-10 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mb-4 sm:mb-6 lg:mb-8">
                Benefits of digital printing services.
              </h2>

              <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="mr-2 sm:mr-3 mt-1 h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
                <button className="btn btn-primary bg-primary hover:bg-primary/90 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg text-sm sm:text-base font-medium">
                  Request Quote
                </button>
                <button className="btn btn-outline border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg text-sm sm:text-base font-medium">
                  View Samples
                </button>
              </div>
            </div>

            <div className="animate lg:col-6">
              <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8">
                <div className="w-full h-48 sm:h-64 lg:h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl lg:text-8xl">📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-dark mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="font-medium text-dark">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 transform transition-transform ${openFAQ === index ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">
                  🔍 Still has questions? Get high quality and services from us.{" "}
                  <a
                    href="/contact"
                    className="text-primary font-medium hover:underline"
                  >
                    Contact us now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalPrintingPage;
