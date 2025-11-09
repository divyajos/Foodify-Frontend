import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Slider() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #fff8e1 0%, #ffe0b2 40%, #ffcc80 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* floating shapes background */}
      <ul className="floating-foods">
        {Array(10)
          .fill()
          .map((_, i) => (
            <li key={i}></li>
          ))}
      </ul>

      <div
        className="container"
        style={{
          zIndex: 2,
          textAlign: "center",
          padding: "80px 20px",
          maxWidth: "1200px",
        }}
      >
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            fontFamily: "'Poppins', sans-serif",
            background: "linear-gradient(90deg, #ff3d00, #ff9100, #ff6d00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
            textShadow: "0px 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          Feast on Flavor 🍕 <br />
          Crafted Just for You
        </motion.h1>

        {/* Typewriter Dynamic Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            color: "#e65100",
            fontSize: "1.4rem",
            fontWeight: "600",
            marginBottom: "25px",
          }}
        >
          <Typewriter
            options={{
              strings: [
                "🔥 Hot Meals Served Fresh!",
                "🍝 Authentic Taste, Modern Vibes!",
                "🥗 Healthy. Tasty. Perfect!",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </motion.div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            maxWidth: "700px",
            margin: "0 auto 35px",
            fontSize: "1.1rem",
            color: "#5d4037",
            lineHeight: "1.8",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Experience the taste of passion — handcrafted dishes, fresh
          ingredients, and flavors that tell a story of love and craft. 🍽️✨
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <motion.a
            href="#menu"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 10px 25px rgba(255, 87, 34, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "14px 36px",
              borderRadius: "30px",
              background: "linear-gradient(90deg, #ff6f00, #ff9100, #ff8a65)",
              color: "white",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            🍔 Explore Menu
          </motion.a>

          <motion.a
            href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
            whileHover={{
              scale: 1.08,
              background: "rgba(255, 111, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "14px 36px",
              borderRadius: "30px",
              border: "2px solid #ff6f00",
              color: "#ff6f00",
              fontWeight: "600",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease",
            }}
          >
            <i className="bi bi-play-circle"></i>
            Watch Story
          </motion.a>
        </motion.div>

        {/* Floating Image Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            marginTop: "60px",
            textAlign: "center",
          }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1000&q=80"
            alt="Tasty Dish"
            style={{
              width: "70%",
              maxWidth: "600px",
              borderRadius: "25px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
              filter: "brightness(1.05)",
            }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </motion.div>
      </div>

      {/* Glass Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top left, rgba(255,255,255,0.3), transparent 70%)",
          backdropFilter: "blur(6px)",
        }}
      ></div>

      {/* CSS for Floating Food Icons */}
      <style>{`
        .floating-foods {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .floating-foods li {
          position: absolute;
          list-style: none;
          display: block;
          width: 40px;
          height: 40px;
          background-repeat: no-repeat;
          background-size: contain;
          bottom: -150px;
          animation: float 18s infinite;
        }

        /* Different floating food icons (emoji style background images) */
        .floating-foods li:nth-child(1) { left: 10%; background-image: url('https://cdn-icons-png.flaticon.com/512/3075/3075977.png'); animation-delay: 0s; }
        .floating-foods li:nth-child(2) { left: 25%; background-image: url('https://cdn-icons-png.flaticon.com/512/706/706164.png'); animation-delay: 2s; }
        .floating-foods li:nth-child(3) { left: 45%; background-image: url('https://cdn-icons-png.flaticon.com/512/1046/1046784.png'); animation-delay: 4s; }
        .floating-foods li:nth-child(4) { left: 60%; background-image: url('https://cdn-icons-png.flaticon.com/512/2921/2921822.png'); animation-delay: 6s; }
        .floating-foods li:nth-child(5) { left: 80%; background-image: url('https://cdn-icons-png.flaticon.com/512/123/123292.png'); animation-delay: 8s; }

        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { opacity: 1; transform: translateY(-500px) rotate(180deg); }
          100% { transform: translateY(-1000px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

export default Slider;
