import React from "react";

function Footer() {
  const colors = {
    cream: "#f6efe6",
    light: "#edd6be",
    medium: "#d3a87d",
    dark: "#b06b3f",
    text: "#6b4f3a",
  };

  const styles = {
    footer: {
      background: `linear-gradient(180deg, ${colors.cream}, ${colors.light})`,
      fontFamily: "'Poppins', sans-serif",
      color: colors.text,
      marginTop: "50px",
      borderTop: "1px solid rgba(176,107,63,0.15)",
      boxShadow: "0 -4px 14px rgba(11,8,6,0.05)",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "20px",
    },
    column: {
      flex: "1 1 250px",
      minWidth: "220px",
    },
    heading: {
      fontWeight: "700",
      fontSize: "1.1rem",
      marginBottom: "15px",
      color: colors.dark,
    },
    input: {
      fontSize: "0.9rem",
      marginBottom: "8px",
      padding: "8px 10px",
      borderRadius: "6px",
      border: "1px solid rgba(176,107,63,0.25)",
      outline: "none",
      width: "100%",
      transition: "0.2s ease",
    },
    textarea: {
      fontSize: "0.9rem",
      padding: "8px 10px",
      borderRadius: "6px",
      border: "1px solid rgba(176,107,63,0.25)",
      width: "100%",
      outline: "none",
      resize: "none",
      transition: "0.2s ease",
    },
    button: {
      background: `linear-gradient(90deg, ${colors.medium}, ${colors.dark})`,
      color: "white",
      border: "none",
      borderRadius: "6px",
      padding: "8px",
      width: "100%",
      cursor: "pointer",
      fontWeight: "600",
      boxShadow: "0 3px 8px rgba(176,107,63,0.2)",
      transition: "0.3s ease",
    },
    link: {
      color: colors.text,
      textDecoration: "none",
      fontSize: "0.95rem",
      display: "block",
      marginBottom: "8px",
      transition: "all 0.3s ease",
      cursor: "pointer",
      background: "none",
      border: "none",
    },
    contactText: {
      fontSize: "0.95rem",
      lineHeight: "1.5",
    },
    bottom: {
      textAlign: "center",
      background: colors.light,
      padding: "12px 10px",
      fontSize: "0.9rem",
      borderTop: "1px solid rgba(176,107,63,0.15)",
      color: colors.text,
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* 📩 Contact Form */}
        <div style={styles.column}>
          <h5 style={styles.heading}>Contact Us</h5>
          <form>
            <input
              type="text"
              style={styles.input}
              placeholder="Your Name"
              required
              onFocus={(e) =>
                (e.target.style.border = `1px solid ${colors.medium}`)
              }
              onBlur={(e) =>
                (e.target.style.border =
                  "1px solid rgba(176,107,63,0.25)")
              }
            />
            <input
              type="email"
              style={styles.input}
              placeholder="Your Email"
              required
              onFocus={(e) =>
                (e.target.style.border = `1px solid ${colors.medium}`)
              }
              onBlur={(e) =>
                (e.target.style.border =
                  "1px solid rgba(176,107,63,0.25)")
              }
            />
            <textarea
              rows="3"
              style={styles.textarea}
              placeholder="Your Message"
              required
              onFocus={(e) =>
                (e.target.style.border = `1px solid ${colors.medium}`)
              }
              onBlur={(e) =>
                (e.target.style.border =
                  "1px solid rgba(176,107,63,0.25)")
              }
            ></textarea>
            <input
              type="submit"
              value="Send"
              style={styles.button}
              onMouseOver={(e) =>
                (e.target.style.background = `linear-gradient(90deg, ${colors.dark}, ${colors.medium})`)
              }
              onMouseOut={(e) =>
                (e.target.style.background = `linear-gradient(90deg, ${colors.medium}, ${colors.dark})`)
              }
            />
          </form>
        </div>

        {/* ⚡ Quick Links */}
        <div style={styles.column}>
          <h5 style={styles.heading}>Quick Links</h5>
          <a
            href="#home"
            style={styles.link}
            onMouseOver={(e) => (e.target.style.color = colors.dark)}
            onMouseOut={(e) => (e.target.style.color = colors.text)}
          >
            Home
          </a>
          <a
            href="#about"
            style={styles.link}
            onMouseOver={(e) => (e.target.style.color = colors.dark)}
            onMouseOut={(e) => (e.target.style.color = colors.text)}
          >
            About
          </a>
          <a
            href="#services"
            style={styles.link}
            onMouseOver={(e) => (e.target.style.color = colors.dark)}
            onMouseOut={(e) => (e.target.style.color = colors.text)}
          >
            Services
          </a>
        </div>

        {/* 🍽 Services */}
        <div style={styles.column}>
          <h5 style={styles.heading}>Our Services</h5>
          <a
            href="/"
            aria-label="Fresh & Hygienic Food"
            style={styles.link}
            onMouseOver={(e) => (e.target.style.color = colors.dark)}
            onMouseOut={(e) => (e.target.style.color = colors.text)}
          >
            Fresh & Hygienic Food
          </a>
          <a
            href="/"
            aria-label="Fast Home Delivery"
            style={styles.link}
            onMouseOver={(e) => (e.target.style.color = colors.dark)}
            onMouseOut={(e) => (e.target.style.color = colors.text)}
          >
            Fast Home Delivery
          </a>
          <a
            href="/"
            aria-label="24/7 Support & Secure Payment"
            style={styles.link}
            onMouseOver={(e) => (e.target.style.color = colors.dark)}
            onMouseOut={(e) => (e.target.style.color = colors.text)}
          >
            24/7 Support & Secure Payment
          </a>
        </div>

        {/* 📍 Contact Info */}
        <div style={styles.column}>
          <h5 style={styles.heading}>Contact Info</h5>
          <p style={styles.contactText}>📍 Indore, India</p>
          <p style={styles.contactText}>📞 +91-1234567890</p>
          <p style={styles.contactText}>✉ info@restaurant.com</p>
        </div>
      </div>

      {/* 🌰 Bottom Bar */}
      <div style={styles.bottom}>
        © 2025 <strong>Foodify</strong> – All Rights Reserved 🍴
      </div>
    </footer>
  );
}

export default Footer;
