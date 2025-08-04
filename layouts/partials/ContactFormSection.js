"use client";

const ContactFormSection = () => {
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
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  FULL NAME*
                </label>
                <input
                  type="text"
                  className="form-input w-full"
                  placeholder="Enter your name"
                  required
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
                  required
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
              ></textarea>
            </div>
            <div className="flex justify-between items-center mt-6">
              <p className="text-xs text-gray-500">
                We value your privacy. Your information is secure with us.
              </p>
              <button type="submit" className="btn btn-primary">
                <span className="mdi mdi-email-outline mr-2"></span> Submit
                Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
