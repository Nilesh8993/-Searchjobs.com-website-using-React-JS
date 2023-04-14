import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobFeed from "../components/JobFeed";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Engineering from "../components/jobStreams/Engineering";
import Management from "../components/jobStreams/Management";
import Marketing from "../components/jobStreams/Marketing";
import Sales from "../components/jobStreams/Sales";
import ContactForm from "../components/ContactForm";
import Profile from "../components/Profile/Profile";
import DashBoardPage from "../components/DashBoardPage";

const AppRouter = () => {
  const [userTag, setUserTag] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="">
        <Navbar
          userTag={userTag}
          setUserTag={setUserTag}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />

        <Routes>
          <Route
            path="/"
            element={<DashBoardPage setUserTag={setUserTag} />}
          ></Route>

          <Route
            path="/login"
            element={
              <LoginForm
                setIsLoggedIn={setIsLoggedIn}
                setUserTag={setUserTag}
              />
            }
          ></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route
            path="/jobs"
            element={<JobFeed find={""} isLoggedIn={isLoggedIn} />}
          ></Route>
          <Route path="/engineering" element={<Engineering />}></Route>
          <Route path="/management" element={<Management />}></Route>
          <Route path="/marketing" element={<Marketing />}></Route>
          <Route path="/sales" element={<Sales />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
