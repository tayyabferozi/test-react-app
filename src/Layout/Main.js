import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import $ from "jquery";

import { initNav } from "../shared/js/custom.min.js";
// import ChatBox from "./ChatBox";

const Main = (props) => {
  const { children } = props;
  const location = useLocation();
  const [, setTitle] = useState("Home");
  const [isMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
    $(".mm-active").removeClass("mm-active");
    initNav();
    $("#preloader").fadeOut(500);
    $("#main-wrapper").addClass("show");

    setTitle(() => document.title);

    return () => {
      $(".nav-control").off();
    };
  }, [location]);

  useEffect(() => {
    $("#menu a").click(function () {
      if (isMobile) {
        $(".nav-control").click();
      }
    });
    return () => {
      $("#menu a").off();
    };
  }, [isMobile]);

  return (
    <div>
      {/************************* Main wrapper start *********************/}

      <div id="main-wrapper">
        {/*********************** Nav header start *********************/}

        <div className="nav-header">
          <a href="index.html" className="brand-logo">
            {/* <img
              className="logo-abbr"
              src={require("./images/logo.png")}
              alt=""
            />
            <img
              className="logo-compact"
              src={require("./images/logo-text.png")}
              alt=""
            />
            <img
              className="brand-title"
              src={require("./images/logo-text.png")}
              alt=""
            /> */}
          </a>

          <div className="nav-control">
            <div className="hamburger">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>

          {/************************* Nav header end *********************/}

          {/************************* Chat box start *********************/}
        </div>

        {/* <ChatBox /> */}

        {/************************* * Chat box End *******************/}

        {/************************* Header start *********************/}
        <div className="header">
          <div className="header-content">
            <nav className="navbar navbar-expand">
              <div className="collapse navbar-collapse justify-content-between">
                <div className="header-left">
                  <div className="dashboard_bar" id="dynamic-title"></div>
                </div>

                <ul className="navbar-nav header-right">
                  <li className="nav-item dropdown notification_dropdown">
                    <div className="search_bar dropdown show">
                      <div className="dropdown-menu p-0 m-0 show">
                        <form>
                          <input
                            className="form-control"
                            type="search"
                            placeholder="Search Here"
                            aria-label="Search"
                          />
                        </form>
                      </div>
                      <span
                        className="search_icon p-3 c-pointer"
                        data-toggle="dropdown"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z"
                            fill="#A4A4A4"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </li>
                  {/* <li className="small-screen-indicator nav-item dropdown notification_dropdown">
                    {title}
                  </li> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>

        {/************************* Header end ti-comment-alt *********************/}

        {/******************************* Sidebar start ***************************/}

        <div className="deznav">
          <div className="deznav-scroll">
            <ul className="metismenu" id="menu">
              <li>
                <Link to="/" className="ai-icon" aria-expanded="false">
                  <i className="flaticon-381-home-3"></i>
                  <span className="nav-text">Home</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/signup" className="ai-icon" aria-expanded="false">
                  <i className="flaticon-381-key"></i>
                  <span className="nav-text">Auth</span>
                </Link>
              </li> */}
              <li>
                <Link to="/events" className="ai-icon" aria-expanded="false">
                  <i className="flaticon-381-television"></i>
                  <span className="nav-text">Events</span>
                </Link>
              </li>
              <li>
                <Link to="/support" className="ai-icon" aria-expanded="false">
                  <i className="flaticon-381-help-1"></i>
                  <span className="nav-text">Support</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/create-new-support"
                  className="ai-icon"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-add-1"></i>
                  <span className="nav-text">Create New Support</span>
                </Link>
              </li>
              <li>
                <Link to="/sessions" className="ai-icon" aria-expanded="false">
                  <i className="flaticon-381-clock"></i>
                  <span className="nav-text">Sessions</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/proxy-comp/0/0"
                  className="ai-icon"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-network"></i>
                  <span className="nav-text">Orders</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/price-list"
                  className="ai-icon"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-layer-1"></i>
                  <span className="nav-text">Price List</span>
                </Link>
              </li>
              <li>
                <Link to="/coupons" className="ai-icon" aria-expanded="false">
                  <i className="flaticon-381-notepad"></i>
                  <span className="nav-text">Coupons</span>
                </Link>
              </li>
              <li>
                <Link to="/sms-log" className="ai-icon" aria-expanded="false">
                  <i className="flaticon-381-windows"></i>
                  <span className="nav-text">SMS Log</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/ticket-details"
                  className="ai-icon"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-windows"></i>
                  <span className="nav-text">Ticket Details</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/proxy-comp/duplicate-orders/0"
                  className="ai-icon"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-windows"></i>
                  <span className="nav-text">Duplicate Orders</span>
                </Link>
              </li>
            </ul>
            {/* <div className="copyright">
              <p>Tixia Ticketing Admin Dashboard© 2020 All Rights Reserved</p>
              <p className="op5">
                Made with <i className="fa fa-heart"></i> by DexignZone
              </p>
            </div> */}
          </div>
        </div>

        {/******************************* Sidebar start ***************************/}
      </div>

      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
