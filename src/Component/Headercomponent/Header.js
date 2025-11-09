import React, { useEffect, useState } from "react";

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedDate = time.toLocaleDateString();

  // 🎨 Light chocolaty palette
  const colors = {
    cream: "#f6efe6",
    light: "#edd6be",
    medium: "#d3a87d",
    dark: "#b06b3f",
    text: "#6b4f3a",
  };

  const styles = {
    topHeader: {
      background: `linear-gradient(90deg, ${colors.cream}, ${colors.light})`,
      padding: "8px 0",
      boxShadow: "0 6px 18px rgba(11,8,6,0.03)",
      fontFamily: `"Segoe UI", Roboto, system-ui, sans-serif`,
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "0 16px",
      gap: "10px",
    },
    social: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    socialIcon: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: "36px",
      width: "36px",
      borderRadius: "10px",
      textDecoration: "none",
      color: colors.text,
      background: "rgba(255,255,255,0.55)",
      boxShadow: "0 2px 6px rgba(11,8,6,0.06)",
      transition: "all 0.3s ease",
      fontSize: "14px",
    },
    contact: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: colors.text,
      fontSize: "14px",
      flexWrap: "wrap",
    },
    email: {
      color: colors.text,
      textDecoration: "none",
      fontWeight: 600,
    },
    liveBlock: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 8px",
      background: "rgba(176,107,63,0.08)",
      borderRadius: "999px",
      fontWeight: 600,
      fontSize: "12px",
      color: colors.dark,
      boxShadow: "0 2px 8px rgba(176,107,63,0.04)",
    },
    liveDot: {
      width: "9px",
      height: "9px",
      borderRadius: "50%",
      background: "#ff5252",
      boxShadow: "0 0 0 rgba(255,82,82,0.7)",
      animation: "pulse 1.8s infinite",
    },
    clock: {
      fontSize: "13px",
      padding: "6px 10px",
      borderRadius: "8px",
      background: "rgba(255,255,255,0.35)",
      color: colors.text,
      fontWeight: 600,
      textAlign: "center",
      minWidth: "110px",
      boxShadow: "0 1px 6px rgba(11,8,6,0.04)",
    },
  };

  return (
    <>
      <style>
        {`
        /* 🔴 small animation for live dot */
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,82,82,0.7); transform: scale(1); }
          70% { box-shadow: 0 0 0 8px rgba(255,82,82,0); transform: scale(1.08); }
          100% { box-shadow: 0 0 0 0 rgba(255,82,82,0); transform: scale(1); }
        }
        /* 🟤 hover effect for icons */
        .social-icon:hover {
          transform: translateY(-5px) scale(1.05);
          color: white !important;
          background: linear-gradient(180deg, #d3a87d, #b06b3f);
          box-shadow: 0 8px 20px rgba(176,107,63,0.14);
        }
        `}
      </style>

      <div style={styles.topHeader}>
        <div style={styles.container}>
          {/* 🌐 Social Icons */}
          <div style={styles.social}>
            <a href="#" className="social-icon" style={styles.socialIcon}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon" style={styles.socialIcon}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" style={styles.socialIcon}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon" style={styles.socialIcon}>
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-icon" style={styles.socialIcon}>
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          {/* 📞 Contact + Live + Clock */}
          <div style={styles.contact}>
            <div>
              📞 +91-1234567890 <span style={{ opacity: 0.5 }}> | </span>{" "}
              <a href="mailto:Foodify@gmail.com" style={styles.email}>
                📧 Foodify@gmail.com
              </a>
            </div>
            <div style={styles.liveBlock}>
              <span style={styles.liveDot}></span>
              <span>Live</span>
            </div>
            <div style={styles.clock} title={`Updated: ${formattedDate}`}>
              {formattedTime}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
