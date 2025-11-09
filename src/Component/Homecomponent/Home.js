function Home(){
    return(
        <>
<main className="main">

        {/* Hero Section */}
        
        {/* About Section */}
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
      background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)", // dark blue gradient
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
                <img src="./assets/img/about.jpg" className="img-fluid" alt="About" />
<a
  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
  className="glightbox play-btn"
  aria-label="Play video"
></a>

              </div>
              <div className="col-lg-6 content order-last order-lg-first">
  <div className="p-5 bg-white rounded-4 shadow-lg border-start border-4 border-primary">
    <h3 className="fw-bold text-dark mb-4" style={{ letterSpacing: "0.5px" }}>
      Voluptatem Dignissimos Provident Quasi Corporis
    </h3>

    <p className="fst-italic text-muted mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <ul className="list-unstyled">
      {[
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa."
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
      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </div>
</div>

            </div>
          </div>
        </section>

        {/* Why Us Section */}
       

        {/* Menu Section */}
        <section id="menu" className="menu section">
          <div className="container section-title" data-aos="fade-up">
<section className="menu-section">
  <div style={{ textAlign: "center", margin: "40px 20px" }}>
      {/* Heading */}
      <h2
        style={{
          fontSize: "clamp(1.8rem, 5vw, 3rem)",
          fontWeight: "800",
          margin: "0",
          background: "linear-gradient(90deg,#ff6f61,#d84315)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textTransform: "uppercase",
        }}
      >
        Good food is the foundation of genuine happiness.
      </h2>

      {/* Sub Heading */}
      <p
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
          marginTop: "10px",
          color: "#555",
          fontWeight: "500",
          letterSpacing: "0.5px",
        }}
      >
        <span
          style={{
            color: "#ff5722",
            fontWeight: "700",
          }}
        >
          Check Our Tasty
        </span>{" "}
        <span
          style={{
            color: "#111",
            fontWeight: "800",
            textTransform: "uppercase",
          }}
        >
          Menu Starters
        </span>
      </p>
    </div>
  
</section>

          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
              <div className="tab-pane fade active show" id="menu-starters">
                <div className="tab-header text-center">
<section className="menu-item-section">
<div
      style={{
        textAlign: "center",
        margin: "40px 20px",
        padding: "20px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #fff8f6, #fff)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Category */}
      <p
        style={{
          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
          fontWeight: "600",
          color: "#ff5722",
          letterSpacing: "2px",
          textTransform: "uppercase",
          margin: "0",
        }}
      >
        Menu
      </p>

      {/* Title */}
      <h3
        style={{
          fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
          fontWeight: "800",
          marginTop: "8px",
          color: "#222",
          textTransform: "capitalize",
        }}
      >
        Starters
      </h3>
    </div>
</section>

                </div>

               <div className="container my-5">
  {/* Featured Item */}
  <div className="row justify-content-center mb-5">
    <div className="col-lg-4 menu-item text-center">
      <a href="./assets/img/menu-item-2.png" className="glightbox">
        <img
          src="./assets/img/menu-item-2.png"
          className="menu-img img-fluid"
          alt="Featured Menu"
          style={{ maxWidth: "100%", borderRadius: "10px" }}
        />
      </a>
      <h3 className="mt-3">Magnam Tiste</h3>
      <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
      <p className="price fw-bold">$5.95</p>
    </div>
  </div>

  {/* Menu List */}
  <div className="row gy-4">
    {/* Item 1 */}
    <div className="col-lg-6 menu-item">
      <div className="d-flex align-items-center gap-3">
        <a href="./assets/img/menu-item-2.png" className="glightbox">
          <img
            src="./assets/img/menu-item-2.png"
            className="menu-img img-fluid"
            alt="Menu Item"
            style={{ width: "180px", borderRadius: "8px" }}
          />
        </a>
        <div>
          <h4>Magnam Tiste</h4>
          <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
          <p className="price fw-bold">$5.95</p>
        </div>
      </div>
    </div>

    {/* Item 2 */}
    <div className="col-lg-6 menu-item">
      <div className="d-flex align-items-center gap-3">
        <a href="./assets/img/menu-item-5.png" className="glightbox">
          <img
            src="./assets/img/menu-item-5.png"
            className="menu-img img-fluid"
            alt="Menu Item"
            style={{ width: "180px", borderRadius: "8px" }}
          />
        </a>
        <div>
          <h4>Aut Luia</h4>
          <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
          <p className="price fw-bold">$7.95</p>
        </div>
      </div>
    </div>

    {/* Item 3 */}
    <div className="col-lg-6 menu-item">
      <div className="d-flex align-items-center gap-3">
        <a href="./assets/img/menu-item-3.png" className="glightbox">
          <img
            src="./assets/img/menu-item-3.png"
            className="menu-img img-fluid"
            alt="Menu Item"
            style={{ width: "180px", borderRadius: "8px" }}
          />
        </a>
        <div>
          <h4>Est Eligendi</h4>
          <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
          <p className="price fw-bold">$8.95</p>
        </div>
      </div>
    </div>

    {/* Item 4 */}
    <div className="col-lg-6 menu-item">
      <div className="d-flex align-items-center gap-3">
        <a href="./assets/img/menu-item-6.png" className="glightbox">
          <img
            src="./assets/img/menu-item-6.png"
            className="menu-img img-fluid"
            alt="Menu Item"
            style={{ width: "180px", borderRadius: "8px" }}
          />
        </a>
        <div>
          <h4>Eos Luibusdam</h4>
          <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
          <p className="price fw-bold">$9.95</p>
        </div>
      </div>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        </section>


        {/* Chefs Section */}
       <div className="container my-5">
  <h2 className="text-center fw-bold mb-5">👨‍🍳 Meet Our Chefs</h2>
  <div className="row text-center">
    
    {/* Chef 1 */}
    <div className="col-lg-4 col-md-6 mb-4">
      <div
        style={{
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          padding: "20px",
          transition: "0.3s",
          background: "#fff",
        }}
      >
        <img
          src="./assets/img/chef6.jpg"
          alt="Chef 1"
          className="img-fluid mb-3"
          style={{
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            objectFit: "cover",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        />
        <h4 className="fw-bold">John Doe</h4>
        <p className="text-muted">Head Chef</p>
        <p>
          Expert in Italian and French cuisine with over 12 years of
          experience bringing authentic flavors.
        </p>
      </div>
    </div>

    {/* Chef 2 */}
    <div className="col-lg-4 col-md-6 mb-4">
      <div
        style={{
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          padding: "20px",
          transition: "0.3s",
          background: "#fff",
        }}
      >
        <img
          src="./assets/img/chef1.jpg"
          alt="Chef 2"
          className="img-fluid mb-3"
          style={{
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            objectFit: "cover",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        />
        <h4 className="fw-bold"> Madan Rajput</h4>
        <p className="text-muted">Pastry Chef</p>
        <p>
          Specializes in desserts and bakery items, crafting sweet
          delicacies that guests love.
        </p>
      </div>
    </div>

    {/* Chef 3 */}
    <div className="col-lg-4 col-md-6 mb-4">
      <div
        style={{
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          padding: "20px",
          transition: "0.3s",
          background: "#fff",
        }}
      >
        <img
          src="./assets/img/chef3.jpg"
          alt="Chef 3"
          className="img-fluid mb-3"
          style={{
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            objectFit: "cover",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        />
        <h4 className="fw-bold">Arjun Mehta</h4>
        <p className="text-muted">Sous Chef</p>
        <p>
          Passionate about Indian fusion cuisine, blending traditional
          flavors with modern techniques.
        </p>
      </div>
    </div>
  </div>
</div>



 <div>
         <section id="why-us" className="why-us section light-background">
          <div
      style={{
        textAlign: "center",
        margin: "50px 20px",
        padding: "20px",
      }}
      data-aos="fade-up"
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "clamp(1.8rem, 5vw, 3rem)",
          fontWeight: "800",
          margin: "0",
          background: "linear-gradient(90deg,#ff6f61,#d84315)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textTransform: "uppercase",
        }}
      >
        Our Event
      </h2>

      {/* Subheading */}
      <p
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
          marginTop: "12px",
          fontWeight: "500",
          color: "#555",
          letterSpacing: "0.5px",
        }}
      >
        <span
          style={{
            color: "#ff5722",
            fontWeight: "700",
          }}
        >
          Book Soon & Get Offer
        </span>{" "}
        <span
          style={{
            color: "#111",
            fontWeight: "800",
            textTransform: "uppercase",
          }}
        >
          Our Restaurant
        </span>
      </p>
    </div>

          <div className="container">
  <div className="row gy-4">
    {/* Card 1 */}
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
      <div
        className="card-item"
        style={{
          background: "#fff",
          borderRadius: "14px",
          padding: "30px 20px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "1.3rem",
            fontWeight: "700",
            color: "#fff",
            background: "linear-gradient(135deg, #ff6a00, #ee0979)",
            borderRadius: "50%",
            width: "55px",
            height: "55px",
            lineHeight: "55px",
            marginBottom: "15px",
          }}
        >
          01
        </span>
        <h4
          style={{
            fontSize: "1.4rem",
            fontWeight: "700",
            marginBottom: "12px",
            background: "linear-gradient(90deg, #2c5364, #203a43, #0f2027)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Repellat Nihil
        </h4>
        <img
          src="./assets/img/events-1.jpg"
          className="menu-img img-fluid"
          alt="Menu Item"
          style={{
            borderRadius: "12px",
            marginBottom: "15px",
            maxHeight: "150px",
            objectFit: "cover",
          }}
        />
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis
          dolor quod et vel dire leno para dest.
        </p>
      </div>
    </div>


    {/* Card 2 */}
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
      <div
        className="card-item"
        style={{
          background: "#fff",
          borderRadius: "14px",
          padding: "30px 20px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "1.3rem",
            fontWeight: "700",
            color: "#fff",
            background: "linear-gradient(135deg, #ff6a00, #ee0979)",
            borderRadius: "50%",
            width: "55px",
            height: "55px",
            lineHeight: "55px",
            marginBottom: "15px",
          }}
        >
          02
        </span>
        <h4
          style={{
            fontSize: "1.4rem",
            fontWeight: "700",
            marginBottom: "12px",
            background: "linear-gradient(90deg, #2c5364, #203a43, #0f2027)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Repellat Nihil
        </h4>
        <img
          src="./assets/img/events-2.jpg"
          className="menu-img img-fluid"
          alt="Menu Item"
          style={{
            borderRadius: "12px",
            marginBottom: "15px",
            maxHeight: "150px",
            objectFit: "cover",
          }}
        />
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis
          dolor quod et vel dire leno para dest.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
      <div
        className="card-item"
        style={{
          background: "#fff",
          borderRadius: "14px",
          padding: "30px 20px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "1.3rem",
            fontWeight: "700",
            color: "#fff",
            background: "linear-gradient(135deg, #ff6a00, #ee0979)",
            borderRadius: "50%",
            width: "55px",
            height: "55px",
            lineHeight: "55px",
            marginBottom: "15px",
          }}
        >
          03
        </span>
        <h4
          style={{
            fontSize: "1.4rem",
            fontWeight: "700",
            marginBottom: "12px",
            background: "linear-gradient(90deg, #2c5364, #203a43, #0f2027)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Repellat Nihil
        </h4>
        <img
          src="./assets/img/events-4.jpg"
          className="menu-img img-fluid"
          alt="Menu Item"
          style={{
            borderRadius: "12px",
            marginBottom: "15px",
            maxHeight: "150px",
            objectFit: "cover",
          }}
        />
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis
          dolor quod et vel dire leno para dest.
        </p>
      </div>
    </div>

  </div>
</div>
        </section>
       </div>
       <div className="container my-5">
  <h2 className="text-center fw-bold mb-5">⭐ Customer Reviews</h2>
  <div className="row">
    
    {/* Review 1 */}
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div
        style={{
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          padding: "30px 20px",
          background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
        }}
      >
        <img
          src="./assets/img/rewiew1.jpg"
          alt="Customer 1"
          style={{
            borderRadius: "50%",
            width: "90px",
            height: "90px",
            objectFit: "cover",
            marginBottom: "15px",
            border: "4px solid #f1f1f1",
          }}
        />
        <h5 className="fw-bold">Aarav Sharma</h5>
        <p className="text-warning mb-2">⭐ ⭐ ⭐ ⭐ ⭐</p>
        <p
          style={{
            fontStyle: "italic",
            fontSize: "15px",
            color: "#555",
          }}
        >
          “Amazing food and excellent service! The ambiance makes it even more
          special. Highly recommended.”
        </p>
      </div>
    </div>

    {/* Review 2 */}
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div
        style={{
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          padding: "30px 20px",
          background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
        }}
      >
        <img
          src="./assets/img/rewiew2.jpg"
          alt="Customer 2"
          style={{
            borderRadius: "50%",
            width: "90px",
            height: "90px",
            objectFit: "cover",
            marginBottom: "15px",
            border: "4px solid #f1f1f1",
          }}
        />
        <h5 className="fw-bold">Emily Johnson</h5>
        <p className="text-warning mb-2">⭐ ⭐ ⭐ ⭐</p>
        <p
          style={{
            fontStyle: "italic",
            fontSize: "15px",
            color: "#555",
          }}
        >
          “The pasta was delicious and the desserts were heavenly. Great spot
          for family dinner.”
        </p>
      </div>
    </div>

    {/* Review 3 */}
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div
        style={{
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          padding: "30px 20px",
          background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
        }}
      >
        <img
          src="./assets/img/rewiew3.jpg"
          alt="Customer 3"
          style={{
            borderRadius: "50%",
            width: "90px",
            height: "90px",
            objectFit: "cover",
            marginBottom: "15px",
            border: "4px solid #f1f1f1",
          }}
        />
        <h5 className="fw-bold">Rohan Patel</h5>
        <p className="text-warning mb-2">⭐ ⭐ ⭐ ⭐ ⭐</p>
        <p
          style={{
            fontStyle: "italic",
            fontSize: "15px",
            color: "#555",
          }}
        >
          “Best restaurant in town! Friendly staff and the food tastes like
          authentic homemade recipes.”
        </p>
      </div>
    </div>
  </div>
</div>


      </main>

        
        </>
    )
}
export default Home;