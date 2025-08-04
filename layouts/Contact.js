import config from "@config/config.json";
import Banner from "./components/Banner";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;
  const { email, phone } = config.contact_info;

  return (
    <>
      <section className="section pt-0">
        {/* <Banner title={title} /> */}

        {/* Locations Section */}
        <div className="section bg-white py-12">
          <div className="container">
            <div className="row items-start justify-center">
              {/* Left Side - Info and CTA */}
              <div className="animate lg:col-6 mb-10 lg:mb-0">
                <div className="mb-8 lg:mb-0">
                  <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
                    GET IN TOUCH WITH GANPATI DYEING MILLS
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
                    Call or visit us at one of our locations.
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Reach out to us today to discuss how we can assist with your
                    dyeing and textile solutions. We are committed to delivering
                    high-quality, eco-friendly dyeing services to enhance your
                    business.
                  </p>
                  <button
                    className="btn btn-primary mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-all duration-300"
                    type="button"
                  >
                    🔔 Schedule a call
                  </button>
                </div>
              </div>

              {/* Right Side - Locations */}
              <div className="animate lg:col-6">
                <div className="space-y-6">
                  {["Pandesara", "Palsana"].map((location, index) => (
                    <div
                      key={"location-" + index}
                      className="bg-white rounded-xl p-5 shadow-lg"
                    >
                      <h4 className="text-lg font-semibold text-dark mb-2">
                        {location}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        249, 2, GIDC Pandesara Rd, behind Rachna Dyeing,
                        Pandesara, Udhana, Surat, Gujarat 394221
                      </p>
                      <a
                        href="#"
                        className="text-primary text-sm hover:underline mt-2 block"
                      >
                        View on map
                      </a>
                      <a
                        href="tel:+919824111765"
                        className="text-dark font-medium hover:text-primary mt-4 block transition-colors"
                      >
                        +91 98241 11765
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="section bg-white py-16">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
                FIND US
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                Visit Our Manufacturing Facility
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Surat's textile hub, our state-of-the-art facility
                is equipped with modern machinery and expert craftsmanship.
              </p>
            </div>
            
            <div className="row items-center">
              {/* Map */}
              <div className="lg:col-8 mb-8 lg:mb-0">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0862699999995!2d72.8559088!3d21.1702401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e7777d81b21%3A0x7c4a8dffa7fe5d5a!2s249%2C%202%2C%20GIDC%20Pandesara%20Rd%2C%20behind%20Rachna%20Dyeing%2C%20Pandesara%2C%20Udhana%2C%20Surat%2C%20Gujarat%20394221!5e0!3m2!1sen!2sin!4v1704389108205!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              
              {/* Location Info */}
              <div className="lg:col-4">
                <div className="bg-primary rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6">Ganpati Dyeing Mills</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-sm opacity-90">
                          249, 2, GIDC Pandesara Rd, behind Rachna Dyeing,<br />
                          Pandesara, Udhana, Surat, Gujarat 394221
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+919824111765" className="text-sm opacity-90 hover:opacity-100">
                          +91 98241 11765
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-sm opacity-90">
                          Mon - Sat: 9:00 AM - 6:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <a 
                      href="https://maps.google.com/?q=249,2,GIDC+Pandesara+Rd,behind+Rachna+Dyeing,Pandesara,Udhana,Surat,Gujarat+394221" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="section bg-gray-50">
          <div className="container">
            <div className="row items-start justify-center">
              {/* Left Side - Contact Information */}
              <div className="animate lg:col-6 mb-10 lg:mb-0">
                <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                  <div className="mb-8">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
                      LET'S WORK TOGETHER
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
                      Ready to help you at Ganpati Dyeing Mills!
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      We're here to help and answer any questions you might
                      have. Reach out to us for the best in dyeing and textile
                      solutions.
                    </p>
                  </div>

                  {/* Contact Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-dark mb-2">
                        Call us directly?
                      </h4>
                      <a
                        href={`tel:${phone}`}
                        className="text-dark font-medium hover:text-primary transition-colors"
                      >
                        {phone}
                      </a>
                    </div>

                    <div>
                      <h4 className="font-semibold text-dark mb-2">
                        Need live support?
                      </h4>
                      <a
                        href={`mailto:${email}`}
                        className="text-dark font-medium hover:text-primary transition-colors"
                      >
                        {email}
                      </a>
                    </div>

                    <div>
                      <h4 className="font-semibold text-dark mb-2">
                        Join the growing team?
                      </h4>
                      <a
                        href="mailto:careers@ganpatidyeingmills.com"
                        className="text-dark font-medium hover:text-primary transition-colors"
                      >
                        careers@ganpatidyeingmills.com
                      </a>
                    </div>

                    <div>
                      <h4 className="font-semibold text-dark mb-2">
                        Visit our headquarters?
                      </h4>
                      <a
                        href="#"
                        className="text-primary font-medium hover:underline"
                      >
                        View on Google Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="animate lg:col-6">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-8">
                    Looking for any help at Ganpati Dyeing Mills?
                  </h2>

                  <form
                    method="POST"
                    action={config.params.contact_form_action}
                    className="space-y-6"
                  >
                    <div>
                      <label
                        className="block text-sm font-medium text-dark mb-2"
                        htmlFor="name"
                      >
                        ENTER YOUR NAME <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="form-input w-full border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-primary focus:ring-0 bg-transparent"
                        name="name"
                        placeholder="What's your good name"
                        type="text"
                        required
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium text-dark mb-2"
                        htmlFor="email"
                      >
                        EMAIL ADDRESS <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="form-input w-full border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-primary focus:ring-0 bg-transparent"
                        name="email"
                        placeholder="Enter your email address"
                        type="email"
                        required
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium text-dark mb-2"
                        htmlFor="message"
                      >
                        YOUR MESSAGE
                      </label>
                      <textarea
                        className="form-textarea w-full border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-primary focus:ring-0 bg-transparent resize-none"
                        name="message"
                        placeholder="Describe about your project"
                        rows="4"
                      />
                    </div>

                    <div className="pt-4">
                      <p className="text-xs text-gray-500 mb-6">
                        We will never collect information about you without your
                        explicit consent.
                      </p>
                      <button
                        type="submit"
                        className="btn btn-primary bg-dark hover:bg-primary text-white px-8 py-3 rounded-full transition-all duration-300"
                      >
                        Send message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="section py-12">
          <div className="container">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-dark mb-4">
                Connect with us on social media
              </h3>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors p-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
