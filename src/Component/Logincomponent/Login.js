
import axios from 'axios';
import { useState } from "react";
import { __userapiurl } from '../../API_URL';
import {useNavigate} from 'react-router-dom';

function Login ()
{ const navigate = useNavigate();
  const [email,setEmail]=useState();     
  const [password,setPassword]=useState();
  const [output,setOutput]=useState();
  
  const handellsubmit=()=>{
   const userDetails = {"email":email,"password":password};
    axios.post(__userapiurl+"login",userDetails).then((response)=>{
    const users = response.data.userDetails;
    localStorage.setItem("token",response.data.token);
    localStorage.setItem("_id",users._id);
    localStorage.setItem("name",users.name);
    localStorage.setItem("email",users.email);
    localStorage.setItem("address",users.address);
    localStorage.setItem("mobile",users.mobile);
    localStorage.setItem("city",users.city);
    localStorage.setItem("gender",users.gender);
    localStorage.setItem("role",users.role);
    localStorage.setItem("info",users.info);
    (users.role==="admin") ? navigate ("/admin"):navigate("/user");
      
    }).catch((error)=>{
 setOutput("invalid login ,plz try again ..");
    setEmail("");
    setPassword("");

    });
  }
  
 
    return (
<>
<div class="content-section">
    <div class="container" style = {{"textAlign":"justify"}}>
<section class="content-area" id="regform" >
    <div class="container" >
      <h4>Login Here!!!</h4>
      <font color="red">{output}</font>
      <form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" onChange={e=>setEmail(e.target.value)} value={email} placeholder="Email"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" onChange={e=>setPassword(e.target.value)} value={password} placeholder="Password"/>
  </div>  <button type="button" onClick={handellsubmit}  class="btn btn-primary">Submit</button>
</form>

    </div>
  </section>

    </div>
  </div>

</>
    )
}
export default Login;