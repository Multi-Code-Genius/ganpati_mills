"use client";

import { useState } from "react";
import Banner from "@layouts/components/Banner";

const RFDPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const services = [
    {
      icon: "🌿",
      title: "Custom Dyeing Solutions",
      description:
        "We analyze fabric types, dye preferences, and client requirements to create custom dyeing solutions tailored to your business.",
    },
    {
      icon: "🚀",
      title: "Quick and Reliable Turnaround",
      description:
        "Our expertise ensures that fabric dyeing processes are completed with speed and consistency, meeting your production deadlines.",
    },
    {
      icon: "🔬",
      title: "Comprehensive Support",
      description:
        "From pre-treatment of fabrics to post-dye finishing, we offer full guidance to ensure the best outcomes at every step.",
    },
    {
      icon: "🏆",
      title: "Flexible and Scalable Services",
      description:
        "Whether you need small batch custom orders or large-scale commercial dyeing, we can scale our services to fit your business needs.",
    },
  ];

  const benefits = [
    "Comprehensive pre-treatment for perfect dye absorption.",
    "State-of-the-art dyeing technology for precise color application.",
    "Fast turnarounds for high-demand orders with consistent results.",
    "Eco-friendly dyes that meet industry standards for sustainability.",
  ];

  const faqs = [
    {
      question: "What fabrics are ideal for dyeing at Ganpati Dyeing Mills?",
      answer:
        "We work with a variety of fabrics including cotton, polyester, and blends. Our dyeing process is adaptable to most textiles.",
    },
    {
      question: "How long does it take to dye fabric?",
      answer:
        "Our standard dyeing process can take between 24 to 72 hours depending on fabric type and order volume.",
    },
    {
      question: "Do you offer eco-friendly dyeing options?",
      answer:
        "Yes, we use environmentally safe dyes that meet sustainability standards and reduce water consumption.",
    },
  ];

  return (
    <div>
      {/* <Banner title="RFD Services" /> */}

      {/* Hero Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="row items-center justify-center">
            <div className="animate lg:col-6 mb-10 lg:mb-0">
              <div className="relative">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                  Ready for Dyeing Experts
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
                  Transforming fabrics with precision dyeing.
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  At Ganpati Dyeing Mills, we specialize in high-quality textile
                  dyeing services. We work with a variety of fabrics to produce
                  vibrant, long-lasting colors, meeting the highest standards in
                  the textile industry. Our services are ideal for bulk orders
                  with guaranteed consistency and reliability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn btn-primary bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full">
                    Over 500+ fabric batches dyed weekly.
                  </button>
                </div>
              </div>
            </div>
            <div className="animate lg:col-6">
              <div className="relative p-4">
                <div className="bg-gray-100 rounded-2xl p-8 text-center">
                  <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center">
                    <span className="text-6xl">🌿</span>
                  </div>
                  <p className="text-gray-500 mt-4">RFD Service Sample</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section bg-green-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              How Ganpati Dyeing Mills supports your textile business with Ready
              for Dyeing Services?
            </h2>
          </div>

          {/* Service Cards */}
          <div className="row justify-center mb-16">
            {services.map((service, index) => (
              <div key={index} className="md:col-6 lg:col-3 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg h-full text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-lg font-semibold text-dark mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="row text-center">
                  <div className="md:col-4 mb-6 md:mb-0">
                    <div className="text-4xl font-bold text-primary mb-2">
                      4.9
                    </div>
                    <p className="text-gray-600 text-sm">RATING</p>
                    <p className="text-xs text-gray-500">
                      2,000+ trusted client reviews
                    </p>
                  </div>
                  <div className="md:col-4 mb-6 md:mb-0">
                    <div className="text-4xl font-bold text-primary mb-2">
                      97%
                    </div>
                    <p className="text-gray-600 text-sm">CLIENT SATISFACTION</p>
                    <p className="text-xs text-gray-500">
                      Clients rate us as a key partner in production planning.
                    </p>
                  </div>
                  <div className="md:col-4">
                    <div className="text-4xl font-bold text-primary mb-2">
                      250+
                    </div>
                    <p className="text-gray-600 text-sm">COMPLETED PROJECTS</p>
                    <p className="text-xs text-gray-500">
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
            <div className="animate lg:col-6 mb-10 lg:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-8">
                The Benefits of Ganpati Dyeing Mills&apos; Ready for Dyeing Services
              </h2>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="mr-3 mt-1 h-5 w-5 text-green-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="btn btn-primary bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg">
                  Request Quote
                </button>
                <button className="btn btn-outline border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg">
                  View Samples
                </button>
              </div>
            </div>

            <div className="animate lg:col-6">
              <div className="bg-gray-100 rounded-2xl p-8">
                <div className="w-full h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-8xl">🔬</span>
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
                  🔍 Still have questions? Get high-quality RFD services from
                  us.
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

export default RFDPage;
