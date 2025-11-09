import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, User, ShoppingCart, Home } from "lucide-react";

function Nav() {
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  const dishes = [
    "Margherita Pizza",
    "Cheese Burst Pizza",
    "Paneer Butter Masala",
    "Chicken Burger",
    "Veg Biryani",
    "Pasta Alfredo",
    "French Fries",
    "Spring Roll",
    "Choco Lava Cake",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRole(localStorage.getItem("role"));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // 🔍 Local search filter
  const handleSearch = (e) => {
    const val = e.target.value.toLowerCase();
    setSearch(val);
    setFiltered(
      val ? dishes.filter((dish) => dish.toLowerCase().includes(val)) : []
    );
  };

  const handleSelectDish = (dish) => {
    setSearch(dish);
    setFiltered([]);
    alert(`You selected "${dish}" 🍴`);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{
        background: "linear-gradient(90deg, #ff6f61, #ff8a65, #ffb74d)",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
      }}
    >
      <div className="container">
        {/* Logo + Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="navbar-brand fw-bold d-flex align-items-center"
          style={{ color: "#fff", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/857/857681.png"
            alt="logo"
            style={{
              width: "45px",
              height: "45px",
              marginRight: "10px",
              borderRadius: "50%",
              backgroundColor: "white",
              padding: "5px",
            }}
          />
          🍔 FOODIFY
        </motion.div>

        {/* Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Main Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* --- Search Bar --- */}
          <div className="mx-auto position-relative" style={{ maxWidth: "350px" }}>
            <input
              type="text"
              className="form-control rounded-pill px-3"
              placeholder="🔍 Search dishes..."
              value={search}
              onChange={handleSearch}
              style={{
                border: "2px solid #fff",
                background: "#fff",
              }}
            />
            {/* 🔽 Search Suggestions (Local only) */}
            {filtered.length > 0 && (
              <ul
                className="list-group position-absolute w-100 mt-2 shadow"
                style={{ zIndex: 1000 }}
              >
                {filtered.map((dish, i) => (
                  <li
                    key={i}
                    className="list-group-item list-group-item-action"
                    onClick={() => handleSelectDish(dish)}
                    style={{ cursor: "pointer" }}
                  >
                    {dish}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* --- Dynamic Menu --- */}
          <ul className="navbar-nav ms-auto">
            {role === "admin" ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/adminhome">
                    🏠 Admin Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/manageuser">
                    👥 Manage Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/changepassword">
                    🔐 Change Password
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/logout">
                    <LogOut size={18} /> Logout
                  </Link>
                </li>
              </>
            ) : role === "user" ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/userhome">
                    <Home size={18} /> Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  {/* 🔧 Fixed accessibility issue: replaced <a href="#"> with <button> */}
                  <button
                    className="nav-link dropdown-toggle text-white btn btn-link"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                    style={{ textDecoration: "none" }}
                  >
                    🍕 Manage Data
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/addcategory">
                        ➕ Add Category
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/addsubcategory">
                        🍔 Add Subcategory
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/changepassword">
                    🔐 Change Password
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/cart">
                    <ShoppingCart size={18} /> Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/logout">
                    <LogOut size={18} /> Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">
                    🏠 Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                    📖 About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/livemenu">
                    🍽️ Live Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/todaybestoffer">
                    🎁 Best Offers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">
                    📝 Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    <User size={18} /> Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
