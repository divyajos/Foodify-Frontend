import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Todaybestoffer() {
  const [offers, setOffers] = useState([
    {
      id: 1,
      name: "Cheesy Pepperoni Pizza",
      discount: 40,
      originalPrice: 499,
      likes: 120,
      image:
        "https://images.pexels.com/photos/4109122/pexels-photo-4109122.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeLeft: 300,
      tag: "🔥 Hot Deal",
    },
    {
      id: 2,
      name: "Chicken Biryani Family Pack",
      discount: 35,
      originalPrice: 599,
      likes: 98,
      image:
        "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeLeft: 260,
      tag: "🍛 Chef’s Special",
    },
    {
      id: 3,
      name: "Veggie Supreme Burger",
      discount: 30,
      originalPrice: 299,
      likes: 85,
      image:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeLeft: 220,
      tag: "🌿 Best Seller",
    },
    {
      id: 4,
      name: "Brownie Fudge Shake",
      discount: 50,
      originalPrice: 249,
      likes: 110,
      image:
        "https://images.pexels.com/photos/3026809/pexels-photo-3026809.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeLeft: 200,
      tag: "🍫 Sweet Deal",
    },
  ]);

  const [claimedOffers, setClaimedOffers] = useState([]);

  // ⏳ Live countdown + small random interactions
  useEffect(() => {
    const interval = setInterval(() => {
      setOffers((prev) =>
        prev
          .map((offer) => {
            const newTime = offer.timeLeft > 0 ? offer.timeLeft - 1 : 0;
            const randomLike = Math.random() > 0.8 ? offer.likes + 1 : offer.likes;
            const discountFluctuation =
              offer.discount + (Math.random() - 0.5) * 0.5;
            return {
              ...offer,
              timeLeft: newTime,
              likes: randomLike,
              discount: Math.max(20, Math.min(60, discountFluctuation.toFixed(1))),
            };
          })
          .filter((offer) => offer.timeLeft > 0) // remove expired automatically
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getDiscountedPrice = (price, discount) =>
    Math.round(price - (price * discount) / 100);

  const handleClaim = (offer) => {
    setClaimedOffers((prev) => [
      ...prev,
      { ...offer, claimTime: new Date().toLocaleTimeString() },
    ]);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 title">
        🎉 Today’s <span className="text-gradient">Live Food Offers</span>
      </h2>

      <div className="row g-4">
        <AnimatePresence>
          {offers.map((item) => (
            <motion.div
              className="col-sm-6 col-md-4 col-lg-3"
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="card offer-card shadow-sm border-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <div className="position-relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top rounded-top"
                    style={{ height: "170px", objectFit: "cover" }}
                  />
                  <span className="badge custom-badge position-absolute top-0 start-0 m-2 px-3 py-2 rounded-pill fw-semibold">
                    {item.tag}
                  </span>
                  <motion.div
                    className="timer-bar position-absolute bottom-0 start-0"
                    initial={{ width: "100%" }}
                    animate={{
                      width: `${(item.timeLeft / 300) * 100}%`,
                    }}
                    transition={{ duration: 1, ease: "linear" }}
                  ></motion.div>
                </div>

                <div className="card-body text-center">
                  <h6 className="fw-bold text-dark mb-1">{item.name}</h6>
                  <p className="text-success fw-semibold mb-1">
                    {item.discount}% OFF
                  </p>
                  <p className="text-secondary mb-1 small">
                    ❤️ {item.likes} | ⏳ {item.timeLeft}s left
                  </p>

                  <p className="fw-bold text-dark mb-2">
                    ₹{getDiscountedPrice(item.originalPrice, item.discount)}{" "}
                    <span className="text-muted text-decoration-line-through small">
                      ₹{item.originalPrice}
                    </span>
                  </p>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="btn btn-sm btn-gradient px-3 fw-semibold"
                    onClick={() => handleClaim(item)}
                  >
                    ⚡ Grab Offer
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Claimed Offers Log */}
      {claimedOffers.length > 0 && (
        <motion.div
          className="mt-5 card shadow-lg border-0 log-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="card-body">
            <h5 className="fw-bold text-center mb-3 text-success">
              ✅ Recently Claimed Offers
            </h5>
            <ul className="list-group list-group-flush small">
              {claimedOffers.slice(-5).reverse().map((c, i) => (
                <motion.li
                  key={i}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span>{c.name}</span>
                  <span className="text-muted">{c.claimTime}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      <style>{`
        .title {
          font-size: 1.8rem;
        }
        .text-gradient {
          background: linear-gradient(90deg, #ff7043, #ffca28);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .offer-card {
          border-radius: 16px;
          background: linear-gradient(180deg, #fff8e1, #ffffff);
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.3s ease;
        }
        .offer-card:hover {
          box-shadow: 0 10px 25px rgba(255, 152, 0, 0.3);
        }
        .custom-badge {
          background: linear-gradient(90deg, #ff7043, #ffa726);
          color: #fff;
          font-size: 0.8rem;
        }
        .btn-gradient {
          background: linear-gradient(90deg, #ffb300, #ff7043);
          color: #fff;
          border: none;
          border-radius: 8px;
        }
        .btn-gradient:hover {
          background: linear-gradient(90deg, #ffa000, #ff5722);
        }
        .timer-bar {
          height: 6px;
          background: linear-gradient(90deg, #ff7043, #ffe082);
          border-radius: 0 5px 5px 0;
        }
        .log-card {
          border-radius: 15px;
          background: linear-gradient(180deg, #e8f5e9, #ffffff);
        }
      `}</style>
    </div>
  );
}

export default Todaybestoffer;
