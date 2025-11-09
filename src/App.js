import About from "./Component/Aboutcomponent/About";
import Adminhome from "./Component/Adminhomecomponent/Adminhome";
import Contact from "./Component/Contactcomponent/Contact";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Headercomponent/Header";
import Home from "./Component/Homecomponent/Home";
import Login from "./Component/Logincomponent/Login";
import Nav from "./Component/Navcomponent/Nav";
import Register from "./Component/Registercomponent/Register";
import Service from "./Component/Servicecomponent/Service";
import Slider from "./Component/Slidercomponent/Slider";
import {Route, Routes } from "react-router-dom";
import Userhome from "./Component/Userhomecomponent/Userhome";
import Logout from "./Component/Logoutcomponent/Logout";
import Manageuser from "./Component/Manageusercomponent/Manageuser";
import ChangePassword from "./Component/Changepasswordcomponent/Changepassword";
import AddCategory from "./Component/AddCategory/AddCategory";
import LiveFoodMenu from "./Component/Livemenu/Livemenu";
import Todaybestoffer from "./Component/Todaybestoffer.js/Todaybestoffer";






function App() {
  return (
    <>

  <Header />


  <Nav />

<Slider />

<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/about" element={<About />}></Route>
<Route path="/service" element={<Service />}></Route>
<Route path="contact" element={<Contact />}></Route>
<Route path="register" element={<Register />}></Route>
<Route path="login" element={<Login />}></Route>
<Route path="adminhome" element={<Adminhome/>}></Route>
<Route path="userhome" element={<Userhome/>}></Route>
<Route path="logout" element={<Logout/>}></Route>
<Route path="manageuser" element={<Manageuser/ >}></Route>
<Route path="changepassword" element={<ChangePassword />}></Route>
<Route path="addcategory" element={<AddCategory />}></Route>
<Route path="livemenu" element={<LiveFoodMenu />}></Route>
<Route path="todaybestoffer" element={<Todaybestoffer />}></Route>
















</Routes>
  
 
   <Footer />
    </>

  );
}

export default App;
