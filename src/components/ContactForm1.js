import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const ContactForm1 = () => {
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");

  const [contactForm, setContactForm] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    if (
      contactForm.username !== "" &&
      contactForm.email !== "" &&
      contactForm.message !== ""
    ) {
      navigate("/jobs");
      alert("Form Submitted successfully");
    } else {
      setMsg("Please enter all details");
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center m-5 p-3  ">
        <div className=" d-flex border rounded shadow p-3 mb-5 bg-body-tertiary rounded">
          <div
            className="d-flex flex-column justify-content-center text-center gap-5 border-end"
            style={{ width: "12rem" }}
          >
            <div>
              <i class="fa-solid fa-location-dot"></i>
              <h6>Address</h6>
              <p>Mira Road, Thane, Maharashtra</p>
            </div>
            <div>
              <i class="fa-solid fa-phone"></i>
              <h6>Phone</h6>
              <p>1800-1234-4567 </p>
            </div>
            <div>
              <i class="fa-solid fa-envelope"></i>
              <h6>Email</h6>
              <p>service@searchjobs.com</p>
            </div>
          </div>
          <div>
            <div className="container" style={{ width: "30rem" }}>
              <h3 className="text-center">Contact Us</h3>
              <p className="text-center text-secondary">
                Any questions or remarks? Just write us a message!
              </p>
              <hr />
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <p className="text-danger">{msg}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm1;
