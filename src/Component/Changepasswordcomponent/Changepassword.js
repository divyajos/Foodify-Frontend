
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { __userapiurl } from "../../API_URL";


 
function ChangePassword(){


    const Navigate =useNavigate();
    const [email , setEmail] = useState(localStorage.getItem("email"));
    const [opassword ,setOldPassword] = useState();
    const [npassword ,setNewPassword] =useState();
    const [cnpassword, setConfirmNewPassword] = useState();
    const [output , setOutPut ] =useState();
     
    const handleSubmit=()=>{
        axios.get(__userapiurl+"fetch",{
            params : {"email":email,"password":opassword}
        }).then((Response)=>{
            if(npassword==cnpassword)
            {
                var update_details={"condition_obj":{"email":email},"content_obj":{"password":cnpassword}};
                axios.patch(__userapiurl+"update",update_details).then((Response)=>{
                    alert("password updated successfully....");
                    Navigate("/logout");
                });
            }
            else
            {
                setOutPut("New & confirm new password mismatch ,please try again");
                setNewPassword("");
                setConfirmNewPassword("");
            }
        }).catch((error)=>{
            setOutPut("Invalid old password ,please try again");
            setOldPassword("");
        });
    };
     return (
      <>
      <section class="content-area" id="regform"  >
    <div class="container"  >
      <h2>Change Password</h2>
      <font color="black">{output}</font>
      <form>
         <div class="mb-3">
    <label for="name" class="form-label">Old password</label>
    <input type="text" class="form-control" placeholder="Enter Old Password" onChange={e=>setOldPassword(e.target.value)} value={opassword}  />
  </div>
  <div class="mb-3">
    <label for="email" class="form-label"> New Password</label>
    <input type="text" class="form-control" onChange={e=>setNewPassword(e.target.value)} value={npassword} placeholder="Enter Old Password"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label"> Confirm New Password:</label>
    <input type="password" class="form-control" onChange={e=>setConfirmNewPassword(e.target.value)} value={cnpassword} placeholder="Enter Confirm new Password"/>
  </div>
   
    <br/><br/>
  <button type="button" onClick={handleSubmit}  class="btn btn-primary">Submit</button>
</form>

    </div>
  </section>
      </>
     )
    }
export default ChangePassword;