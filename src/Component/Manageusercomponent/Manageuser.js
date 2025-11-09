import axios from "axios";
import { useEffect, useState } from "react";
import { __userapiurl } from "../../API_URL";
import { useNavigate } from "react-router-dom";

function Manageuser() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(__userapiurl + "fetch", {
        params: { role: "user" },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changestatususer = (_id, s) => {
    if (s === "verify") {
      const userDetails = {
        condition_obj: { _id },
        content_obj: { status: 1 },
      };
      axios.patch(__userapiurl + "update", userDetails).then(() => {
        alert("User verified successfully ✅");
        navigate("/manageuser");
      });
    } else if (s === "block") {
      const userDetails = {
        condition_obj: { _id },
        content_obj: { status: 0 },
      };
      axios.patch(__userapiurl + "update", userDetails).then(() => {
        alert("User blocked successfully 🚫");
        navigate("/manageuser");
      });
    } else {
      const deleteDetails = { data: { _id } };
      axios.delete(__userapiurl + "delete", deleteDetails).then(() => {
        alert("User deleted successfully 🗑️");
        navigate("/manageuser");
      });
    }
  };

  return (
    <div className="content-section">
      <div className="container" style={{ textAlign: "justify" }}>
        <h1>User Details</h1>

        <div className="table-responsive-lg">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>City</th>
                <th>Gender</th>
                <th>Info</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {user.map((row) => (
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
                    {row.status === 1 ? (
                      <font color="green">Verified</font>
                    ) : (
                      <font color="orange">Blocked</font>
                    )}
                  </td>
                  <td>
                    {row.status === 1 ? (
                      <font
                        color="blue"
                        style={{ cursor: "pointer" }}
                        onClick={() => changestatususer(row._id, "block")}
                      >
                        Change Status
                      </font>
                    ) : (
                      <font
                        color="blue"
                        style={{ cursor: "pointer" }}
                        onClick={() => changestatususer(row._id, "verify")}
                      >
                        Change Status
                      </font>
                    )}
                    <br />
                    <font
                      color="red"
                      style={{ cursor: "pointer" }}
                      onClick={() => changestatususer(row._id, "delete")}
                    >
                      Delete
                    </font>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Manageuser;
