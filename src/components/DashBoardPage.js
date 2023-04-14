import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const DashBoardPage = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div id="search_bar">
        <div className="input-group has_cross_and_button" id="search">
          <input
            type="text"
            className="form-control"
            placeholder="What are you looking for?"
            id=""
            autocomplete="off"
            aria-invalid="false"
          />
          <span className="input-group-btn search_btn_container">
            <button
              className="btn btn-input btn-primary"
              type="button"
              onClick={() => Navigate("/login")}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </span>
        </div>
      </div>
      <div className="container">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1532716377393-5ffbea548d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="d-block w-100 "
                style={{ height: "75vh" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8am9ic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100"
                style={{ height: "75vh" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8am9ic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100"
                style={{ height: "75vh" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default DashBoardPage;
