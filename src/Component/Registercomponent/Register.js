
import axios from 'axios';

import { useState } from "react";
import {__userapiurl} from '../../API_URL'


function Register (){
   const [name,setName] = useState();
   const [mobile,setMobile]=useState();
   const [email,setEmail]=useState();
   const [password,setPassword]=useState();
   const [address,setAddress]=useState();
   const [city,setCity]=useState();
   const [gender,setGender]=useState();
   const [output,setOutPut]=useState();

   
  const handellsubmit=()=>{
  const userDetails={"name":name,"mobile":mobile,"address":address,"email":email,"password":password,"city":city,"gender":gender};

  axios.post(__userapiurl+"save",userDetails).then((response)=>{
     setOutPut("user register is successfully.....");
      setName("");
      setMobile("");
      setEmail("");
      setPassword("");
      setAddress("");
      setCity("");

  }).catch((error)=>{
      setOutPut("user register is filed,please try again...");
  });
  
   };


    return (
<>
<section class="content-area" id="regform"  >
    <div class="container"  >
     <h2
        style={{
          fontSize: "clamp(1.8rem, 5vw, 3rem)",
          fontWeight: "800",
          textTransform: "uppercase",
          margin: "0",
          background: "linear-gradient(90deg,#ff7043,#ff1744)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        }}
      >
        MAKE A RESERVATION!!!
      </h2>

      <h4
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          fontWeight: "500",
          marginTop: "12px",
          textAlign: "center",
          color: "#444",
          letterSpacing: "0.5px",
        }}
      >
        Order food anytime anywhere
      </h4>
      <font color="black">{output}</font>
      <form>
         <div class="mb-3">
    <label for="name" class="form-label">Name:</label>
    <input type="text" class="form-control" placeholder="Enter Name" onChange={e=>setName(e.target.value)} value={name}/>
  </div>
   <div class="mb-3">
    <label for="mobile" class="form-label">Mobile:</label>
    <input type="Number" class="form-control" onChange={e=>setMobile(e.target.value)} value={mobile} placeholder="Mobile "/>
  </div>
   <div class="mb-3">
    <label for="address" class="form-label">Address:</label>
    <textarea type="text" rows="3" class="form-control" onChange={e=>setAddress(e.target.value)} value={address} placeholder="Address"></textarea>
  </div>

  <div class="mb-3">
    <label for="email" class="form-label">Email:</label>
    <input type="text" class="form-control" onChange={e=>setEmail(e.target.value)} value={email} placeholder="Email"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password:</label>
    <input type="password" class="form-control" onChange={e=>setPassword(e.target.value)} value={password} placeholder="Password"/>
  </div>
  
   <div class="mb-3">
    <label for="city" class="form-label">City:</label>
    <select  class="form-control" onChange={e=>setCity(e.target.value)} value={city} placeholder="City">
      {/* <option > */}
      <option value="1">Indore</option>
      <option value="2">Dewas</option>
      <option value="3">Ujjain</option>
      {/* </option> */}
      </select>
  </div>
          <label for="gender" class="form-label">Gender:</label> &nbsp;&nbsp;&nbsp;
       <div class="form-check form-check-inline">
        <label class="form-check-label">Male</label>
        <input class="form-check-input" type="radio" onChange={e=>setGender(e.target.value)} value="male" name="gender"></input>
    </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">Female</label>
        <input class="form-check-input" type="radio"  onChange={e=>setGender(e.target.value)} value="female" name="gender"></input>
    </div>
    <br/><br/>
  <button type="button" onClick={handellsubmit}  class="btn btn-primary">Reserve now</button>
</form>

    </div>
  </section>

</>
    )
}
export default Register;