import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Service() {
  const [services, setServices] = useState([
    {
      id: 1,
      icon: "bi bi-egg-fried",
      title: "Delicious Cuisine",
      description:
        "Savor mouth-watering dishes prepared with fresh ingredients and authentic flavors.",
      rating: 4.9,
      customers: 1200,
      active: true,
    },
    {
      id: 2,
      icon: "bi bi-cup-straw",
      title: "Refreshing Beverages",
      description:
        "Enjoy smoothies, shakes, and mocktails that keep you energized all day.",
      rating: 4.7,
      customers: 980,
      active: true,
    },
    {
      id: 3,
      icon: "bi bi-truck",
      title: "Fast Delivery",
      description:
        "Hot and fresh food delivered at lightning speed — right to your doorstep.",
      rating: 4.8,
      customers: 1500,
      active: true,
    },
    {
      id: 4,
      icon: "bi bi-people",
      title: "Friendly Staff",
      description:
        "Our courteous staff ensures your dining experience is memorable and joyful.",
      rating: 4.9,
      customers: 870,
      active: true,
    },
  ]);

  // 🔄 Live simulation: ratings & customers updating dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setServices((prev) =>
        prev.map((service) => {
          const newCustomers =
            service.customers + Math.floor(Math.random() * 3);
          const newRating = Math.min(
            5,
            (service.rating + (Math.random() - 0.5) * 0.02).toFixed(1)
          );
          return { ...service, customers: newCustomers, rating: newRating };
        })
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-5 py-4 container">
      <motion.h2
        className="text-center fw-bold mb-3"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "2.2rem",
          background: "linear-gradient(90deg, #ff7043, #ffa726)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        🌟 Our Live Restaurant Services
      </motion.h2>

      <p className="text-center text-muted mb-5 fs-5">
        Real-time service quality updates — <span className="fw-semibold">see the love growing live 💖</span>
      </p>

      <div className="row g-4">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="col-lg-3 col-md-6 col-sm-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <motion.div
              className="card shadow-lg border-0 p-4 h-100 service-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="d-flex align-items-center justify-content-center mx-auto mb-3 rounded-circle service-icon"
                style={{
                  width: "70px",
                  height: "70px",
                  background:
                    "linear-gradient(135deg, #ff7043 0%, #ffca28 100%)",
                  color: "#fff",
                }}
              >
                <i className={`${service.icon} fs-2`}></i>
              </div>

              <h5 className="fw-bold text-dark text-center mb-2">
                {service.title}
              </h5>
              <p className="text-muted text-center mb-3 small">
                {service.description}
              </p>

              {/* Live Data */}
              <div className="text-center">
                <motion.p
                  className="mb-1 text-warning fw-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  ⭐ {service.rating}/5
                </motion.p>
                <p className="text-success small mb-2">
                  👥 {service.customers}+ Happy Customers
                </p>
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                className="btn btn-gradient mt-auto"
              >
                Learn More →
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .service-card {
          border-radius: 16px;
          background: linear-gradient(180deg, #fff8e1, #ffffff);
          transition: all 0.4s ease;
        }
        .service-card:hover {
          box-shadow: 0 10px 25px rgba(255, 152, 0, 0.25);
          transform: translateY(-5px);
        }
        .btn-gradient {
          background: linear-gradient(90deg, #ff7043, #ffa726);
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          padding: 8px 20px;
          transition: 0.3s;
        }
        .btn-gradient:hover {
          background: linear-gradient(90deg, #ff5722, #ffb300);
        }
        .service-icon {
          box-shadow: 0 4px 12px rgba(255, 111, 0, 0.3);
        }
        @media (max-width: 768px) {
          .service-card {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Service;
