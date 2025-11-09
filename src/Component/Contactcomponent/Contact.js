function Contact(){
    return(
        <>
        
    
      <section id="contact" className="contact section">
        {/* Title */}
        <div
          className="container section-title"
          data-aos="fade-up"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              fontFamily: "'Poppins', sans-serif",
              background:
                "linear-gradient(90deg, #ff512f, #dd2476)", // red-pink gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "1px 1px 4px rgba(0,0,0,0.15)",
              marginBottom: "15px",
            }}
          >
            Contact Us
          </h2>

          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "#555",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            <span style={{ color: "#ff6b6b", fontWeight: "600" }}>Reserve</span>{" "}
            <span
              className="description-title"
              style={{ color: "#2c3e50", fontWeight: "700" }}
            >
              Your Table Now
            </span>
          </p>
        </div>

        {/* Contact Section */}
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Info Section */}
            <div className="col-lg-5">
              <div className="info p-4 bg-white shadow-lg rounded-4">
                <div className="mb-4 d-flex align-items-center">
                  <i className="bi bi-geo-alt fs-3 text-danger me-3"></i>
                  <div>
                    <h5 className="fw-bold mb-1">Our Location</h5>
                    <p className="mb-0 text-muted">
                      45 Food Street, Indore, India
                    </p>
                  </div>
                </div>

                <div className="mb-4 d-flex align-items-center">
                  <i className="bi bi-phone fs-3 text-danger me-3"></i>
                  <div>
                    <h5 className="fw-bold mb-1">Call Us</h5>
                    <p className="mb-0 text-muted">+91 98765 43210</p>
                  </div>
                </div>

                <div className="mb-4 d-flex align-items-center">
                  <i className="bi bi-envelope fs-3 text-danger me-3"></i>
                  <div>
                    <h5 className="fw-bold mb-1">Email Us</h5>
                    <p className="mb-0 text-muted">info@foodie.com</p>
                  </div>
                </div>

                {/* Google Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.709971833295!2d75.8577253753083!3d22.70956857939996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963029ec5a7b5df%3A0x3c5c9fba07f657a4!2sIndore%20Food%20Street!5e0!3m2!1sen!2sin!4v1676019600000!5m2!1sen!2sin"
                  style={{
                    border: "0",
                    width: "100%",
                    height: "250px",
                    borderRadius: "15px",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Restaurant Map"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <form
                className="p-4 bg-white shadow-lg rounded-4"
                style={{ borderLeft: "5px solid #ff512f" }}
              >
                <div className="row gy-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label fw-bold">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label fw-bold">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-danger px-5 py-2 fw-bold rounded-pill mt-3"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    



        

        </>
    )
}
export default Contact;