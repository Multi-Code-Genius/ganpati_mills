"use client";

import { useState } from "react";

const ContactFormSection = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section
      className="section py-16 md:py-20 bg-white text-gray-800"
      id="contact"
    >
      <div className="container-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch with Ganpati Dyeing Mills
            </h2>
            <p className="text-base md:text-lg mb-4">
              We specialize in premium fabric dyeing and finishing solutions.
              Contact us for inquiries, collaborations, and service requests.
            </p>
          </div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData.entries());

              try {
                const response = await fetch("/api/home-contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                });

                const result = await response.json();

                if (response.ok) {
                  console.log("Success:", result.message);
                  e.target.reset();
                } else {
                  console.error(
                    "Error:",
                    result.message || "An error occurred.",
                  );
                }
              } catch (error) {
                console.error("Error submitting form:", error);
              } finally {
                setLoading(false);
              }
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  FULL NAME*
                </label>
                <input
                  type="text"
                  className="form-input w-full"
                  placeholder="Enter your name"
                  name="name"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  className="form-input w-full"
                  placeholder="Enter your phone number"
                  name="phone"
                  disabled={loading}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  EMAIL ADDRESS*
                </label>
                <input
                  type="email"
                  className="form-input w-full"
                  placeholder="Enter your email address"
                  name="email"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  INQUIRY TYPE
                </label>
                <input
                  type="text"
                  className="form-input w-full"
                  placeholder="Dyeing, Printing, Custom Orders, etc."
                  name="inquiryType"
                  disabled={loading}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                YOUR MESSAGE
              </label>
              <textarea
                className="form-textarea w-full"
                placeholder="Describe your fabric dyeing needs"
                name="message"
                disabled={loading}
              ></textarea>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center">
              <p className="text-xs text-gray-500 mb-4 sm:mb-0">
                We value your privacy. Your information is secure with us.
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-end">
                <button
                  type="submit"
                  className="btn btn-primary w-full sm:w-auto px-6 py-3 text-center whitespace-nowrap"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center">Submit Inquiry</span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
