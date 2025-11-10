function About() {
  return (
    <>
      <section id="about" className="about section">
        <div
          className="container section-title"
          data-aos="fade-up"
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              fontFamily: "'Poppins', sans-serif",
              background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "1px 1px 4px rgba(0,0,0,0.15)",
              marginBottom: "15px",
            }}
          >
            About Our Restaurant
          </h2>

          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "#555",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            <span style={{ color: "#ff6b6b", fontWeight: "600" }}>Learn More</span>{" "}
            <span
              className="description-title"
              style={{
                color: "#2c3e50",
                fontWeight: "700",
              }}
            >
              About Us
            </span>
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
              <img
                src="./assets/img/events-4.jpg"
                className="img-fluid"
                alt="About our restaurant interior"
              />
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox play-btn"
                aria-label="Watch our restaurant video"
              >
                <i
                  className="bi bi-play-circle"
                  style={{ fontSize: "2rem", color: "#fff" }}
                ></i>
                <span className="visually-hidden">Watch our restaurant video</span>
              </a>
            </div>

            <div className="col-lg-6 content order-last order-lg-first">
              <div className="p-5 bg-white rounded-4 shadow-lg border-start border-4 border-primary">
                <h3
                  className="fw-bold text-dark mb-4"
                  style={{ letterSpacing: "0.5px" }}
                >
                  Voluptatem Dignissimos Provident Quasi Corporis
                </h3>

                <p className="fst-italic text-muted mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <ul className="list-unstyled">
                  {[
                    "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "Duis aute irure dolor in reprehenderit in voluptate velit.",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
                  ].map((item, idx) => (
                    <li key={idx} className="d-flex align-items-start mb-3">
                      <div
                        className="me-3 d-flex align-items-center justify-content-center rounded-circle bg-primary text-white"
                        style={{ width: "35px", height: "35px" }}
                      >
                        <i className="bi bi-check2 fs-5"></i>
                      </div>
                      <span className="text-dark">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-muted mt-3">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
