
import axios from 'axios';
import { useEffect, useState } from 'react';
import { __userapiurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';



function Manageuser()
{  
  const navigate = useNavigate();
  const [user,setUser]=useState([]);


    useEffect(()=>{
        axios.get(__userapiurl+"fetch",{
          params : {role:'user'}
        }).then((response)=>{
          setUser(response.data);
          console.log(user);
        }).catch((error)=>{
          console.log(error)
        })
    },[])

    

const changestatususer =(_id,s)=>{
  if(s=="verify")
  {
    var user_Details = {"condition_obj":{"_id":_id},"content_obj":{"status":1}};
    axios.patch(__userapiurl+"update",user_Details).then((response)=>{
      alert("user  verify successfully..")
      navigate("/manageuser")
    })
  }
  else if(s=="block")
  {
    var user_Details = {"condition_obj":{"_id":_id},"content_obj":{"status":0}};
    axios.patch(__userapiurl+"update",user_Details).then((response)=>{
      alert("user  block successfully..")
      navigate("/manageuser")
    })
  }
  else 
    
  {
    var Delete_Details = {"data":{"_id":_id}};
    axios.delete(__userapiurl+"delete",Delete_Details).then((response)=>{
      alert("user  delete successfully..")
      navigate("/manageuser")
    })
  }

}



  return (
    <>
    <div class="content-section">
    <div class="container" style = {{"textAlign":"justify"}}>
     <h1>User Detail</h1>

     <div class="table-responsive-lg ">
     <table class="table table-bordered table-hover ">
      <thead class="table-dark">
        <tr>            {/* pura gread formate he ya ana jaruri he */}
          <th>Id</th>
          <th>Name</th> 
          <th>Email</th>
          <th>password</th> 
          <th>Mobile</th>   
          <th>Address</th> 
          <th>City</th>
          <th>Gender</th> 
          <th>info</th>
          <th>status</th> 
          <th>Action</th>                         

        </tr>
        </thead>
        <tbody>
        {
          user.map((row)=>(
          <tr key={row._id}>
            <td>{row._id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.password}</td>
            <td>{row.mobile}</td>
            <td>{row.address}</td>
            <td>{row.city}</td>
            <td>{row.gender}</td>
            <td>{row.info}</td>
            <td>
            {row.status==1?<font color="green">Verified</font>:<font color="orange">Blocked</font>}
            </td>
            <td>
              {row.status==1?<font onClick={()=>changestatususer(row._id,'block')} color="blue">Change Status</font>:<font onClick={()=>changestatususer(row._id,'verify')} color="blue">Change Status</font>}
              <br/>
              <font color="red" onClick={()=> changestatususer(row._id,'delete')} >Delete</font>
            </td>
          </tr>
          ))
        }
        </tbody>
     </table>
     </div>
    </div>
  </div>

    </>
  )
}
export default Manageuser;