import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Livemenu() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Cheese Burst Pizza",
      category: "Italian",
      price: 299,
      rating: 4.4,
      stock: 8,
      image:
        "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "Butter Chicken",
      category: "Indian",
      price: 349,
      rating: 4.7,
      stock: 5,
      image:
        "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      name: "Veg Fried Rice",
      category: "Chinese",
      price: 199,
      rating: 4.2,
      stock: 10,
      image:
        "https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      name: "Chocolate Shake",
      category: "Beverage",
      price: 149,
      rating: 4.5,
      stock: 12,
      image:
        "https://images.pexels.com/photos/3026809/pexels-photo-3026809.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ]);

  // 🔄 Live update effect for dynamic prices/ratings
  useEffect(() => {
    const interval = setInterval(() => {
      setMenu((prevMenu) =>
        prevMenu.map((item) => {
          const newPrice =
            item.price + (Math.random() > 0.5 ? 5 : -5); // fluctuate price
          const newRating = Math.min(
            5,
            Math.max(3.5, item.rating + (Math.random() - 0.5) * 0.1)
          );
          const newStock =
            Math.random() > 0.7 && item.stock > 0
              ? item.stock - 1
              : item.stock;

          return {
            ...item,
            price: Math.max(50, newPrice),
            rating: parseFloat(newRating.toFixed(1)),
            stock: newStock,
          };
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 live-title">
        🍽️ Live Menu Updates
      </h2>
      <div className="row g-4">
        {menu.map((food) => (
          <div key={food.id} className="col-sm-6 col-md-4 col-lg-3">
            <motion.div
              className="card live-card shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={food.image}
                alt={food.name}
                className="card-img-top rounded-top"
                style={{
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "15px 15px 0 0",
                }}
              />
              <div className="card-body text-center">
                <h6 className="fw-bold">{food.name}</h6>
                <p className="text-muted mb-1">{food.category}</p>

                <p className="fw-semibold text-success mb-1">
                  ₹{food.price.toLocaleString()}
                </p>

                <p className="text-warning mb-1">
                  ⭐ {food.rating.toFixed(1)}{" "}
                  {food.rating > 4.6 ? "🔥 Hot" : ""}
                </p>

                <p
                  className={`fw-bold ${
                    food.stock > 5 ? "text-primary" : "text-danger"
                  }`}
                >
                  {food.stock > 0
                    ? food.stock <= 3
                      ? `⚠️ Only ${food.stock} left`
                      : `Stock: ${food.stock}`
                    : "❌ Out of Stock"}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <style>{`
        .live-title {
          background: linear-gradient(90deg, #ff7043, #ffa726);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .live-card {
          border-radius: 15px;
          background: linear-gradient(180deg, #fff8e1, #ffffff);
          transition: all 0.3s ease;
        }
        .live-card:hover {
          box-shadow: 0 8px 20px rgba(255, 152, 0, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Livemenu;
