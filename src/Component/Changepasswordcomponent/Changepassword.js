import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { __userapiurl } from "../../API_URL";

function ChangePassword() {
  const navigate = useNavigate();

  // Get email from localStorage (read-only)
  const [email] = useState(localStorage.getItem("email") || "");

  const [opassword, setOldPassword] = useState("");
  const [npassword, setNewPassword] = useState("");
  const [cnpassword, setConfirmNewPassword] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    if (!opassword || !npassword || !cnpassword) {
      setOutput("All fields are required.");
      return;
    }

    axios
      .get(__userapiurl + "fetch", {
        params: { email, password: opassword },
      })
      .then((response) => {
        // Check if user exists
        if (response.data && response.data.length > 0) {
          if (npassword === cnpassword) {
            const update_details = {
              condition_obj: { email },
              content_obj: { password: cnpassword },
            };

            axios
              .patch(__userapiurl + "update", update_details)
              .then(() => {
                alert("Password updated successfully!");
                navigate("/logout");
              })
              .catch(() => {
                setOutput("Something went wrong. Please try again.");
              });
          } else {
            setOutput("New & Confirm Password mismatch, please try again.");
            setNewPassword("");
            setConfirmNewPassword("");
          }
        } else {
          setOutput("Invalid old password, please try again.");
          setOldPassword("");
        }
      })
      .catch(() => {
        setOutput("Server error. Please try again later.");
      });
  };

  return (
    <>
      <section className="content-area" id="regform">
        <div className="container">
          <h2>Change Password</h2>
          {output && <p style={{ color: "red" }}>{output}</p>}

          <form>
            <div className="mb-3">
              <label htmlFor="oldpassword" className="form-label">
                Old Password
              </label>
              <input
                type="password"
                id="oldpassword"
                className="form-control"
                placeholder="Enter Old Password"
                onChange={(e) => setOldPassword(e.target.value)}
                value={opassword}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="newpassword" className="form-label">
                New Password
              </label>
              <input
                type="password"
                id="newpassword"
                className="form-control"
                onChange={(e) => setNewPassword(e.target.value)}
                value={npassword}
                placeholder="Enter New Password"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmpassword" className="form-label">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                className="form-control"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                value={cnpassword}
                placeholder="Enter Confirm New Password"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ChangePassword;
