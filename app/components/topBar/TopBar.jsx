"use client";
import Link from "next/link";
import styles from "./TopBar.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="fixed-top">
      <div className={`topbar py-2 ${isScrolled ? styles.scrolled : ""}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-11 offset-lg-1 px-md-5 px-lg-0 px-0 top_call_box">
              <div className="row align-items-center  mobile-topbar"
             style={{ fontFamily: 'Inter Variable, sans-serif' }}

              >
                <div className="col-lg-4 col-xl-2">
                  <div className="d-flex align-items-center top_call mobs">
                    <a className="navbar-brand" href="https://rbuchd.in">
                      <Image
                        src="/RBU_Logo_w_Naac.png"
                        alt="Sample Image"
                        width={600}
                        height={400}
                        layout="intrinsic"
                      />
                    </a>
                    {/* <a
                    className="navbar-brand white-logo"
                    href="https://rbuchd.in"
                  >
                    <Image
                      src="/RBU_Logo_w_Naac.png"
                      alt="Sample Image"
                      width={600}
                      height={400}
                      layout="intrinsic"
                    />
                  </a> */}
                  </div>
                </div>
                <div className="col-md-3 col-xl-5 d-xl-flex align-items-center justify-content-center d-none">
                  <ul className={`list-unstyled d-flex  ${styles.topbar_list}`}>
                    <li className={` ${styles.top_text}`}>
                      <Link
                        href="#"
                        target="_blank"
                        className={`text-decoration-none ${styles.top_link} ${
                          isScrolled ? styles.scrolled : ""
                        }`}
                      >
                        Apply Now for RBU SET 2025
                      </Link>
                    </li>

                    <li className={` top-touch ${styles.top_text}`}>
                      <div className={styles.man_touch}>
                        <i
                          className="fa fa-phone"
                          aria-hidden="true"
                          style={{ fontSize: "26px" }}
                        ></i>
                        <div className="get-touch">
                          <label className="adam d-block">
                            Admission Helpline
                          </label>
                          <a
                            href="tel:+91 9780040777"
                            className={`${styles.top_icon} `}
                          >
                            9780040777{" "}
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className={styles.top_text}>
                      <a href="#" className={styles.top_icon_search}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-10 col-lg-8 col-xl-5 d-none d-lg-block px-0">
                  <div className={styles.top_abroad_study}>
                    <ul className="top-studys list-unstyled mb-0">
                      <li>
                        <Link
                          href="/news"
                          className={`${styles.newsEvents} ${
                            isScrolled ? styles.scrolled : ""
                          }`}
                        >
                          News &amp; Events
                        </Link>
                      </li>
                    </ul>

                    <ul className="d-flex align-items-center justify-content-end text-uppercase m-0 px-4 gap-4 list-unstyled">
                      <li className="top_list">Follow Us :</li>
                      <li className="top_list">
                        <a
                          href="https://www.facebook.com/rayatbahraeducationcity/"
                          className="text-dark"
                        >
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="top_list">
                        <a href="#" className="text-dark">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="top_list">
                        <a
                          href="https://x.com/RayatBahraHsp"
                          className="text-dark"
                        >
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="top_list">
                        <a
                          href="https://www.youtube.com/channel/UCmdu-7Kptqn0SV_bpUDXcFg"
                          className="text-dark"
                        >
                          <i className="fa fa-youtube" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky_header sticky-cust">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <nav
                className={`navbar navbar-expand-lg navbar-light  px-2 px-md-4 ${styles.menu_area}`}
              >
                {/* <div className="nav_collapsed dex">
                  <a className="navbar-brand" href="https://rbuchd.in">
                    <img
                      className="logo"
                      src="https://rbuchd.in/wp-content/uploads/2025/01/rbu-logo.png"
                    />
                  </a>
                  <div className="nav_end d-flex d-lg-none align-items-center gap-3">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <a href="#" className="top_icon search-icon">
                      <i
                        className="fa fa-search text-white"
                        aria-hidden="true"
                      ></i>
                    </a>

                    <div className="dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i
                          className="fa fa-bell text-white"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right notification"
                        aria-labelledby="navbarDropdown"
                      >
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href="https://trycyferdev.com/rbuhsp/about-us.php"
                        >
                          sdasd{" "}
                          <span className="badge badge-primary badge-pill">
                            New
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav m-auto  "
                  style={{ fontFamily: 'Inter Variable, sans-serif' }}
                  
                  >
                    <li className="nav-item">
                      <Link className="nav-link" href="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown ">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        About
                      </a>
                      <div
                        className={`${styles.dropdown_menu} dropdown-menu about-megamanu mt-4 bg-light bg-opacity-50 `}
                        aria-labelledby="navbarDropdown"
                      > 
                        <div className="row  ">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12 bg-white " style={{borderRadius:'15px'}} >
                            <div className="inr-about-megas  " >
                              <h3 className={`${styles.AboutHeading}`}>Get to Know Us </h3>
                              <ul className={styles.list_unstyled}>
                                <li>
                                  <a href="explore-rayat-bahra-group">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Exploring Rayat Bahra Group{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="https://rbuchd.in/about-us">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    About RBU, Mohali{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="https://rbuchd.in/about-us#leaders">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Our Leaders{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="approvals-accredation">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Approvals &amp; Accredation{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="https://rbuchd.in/about-us #awards">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Awards &amp; recognization{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="https://rbuchd.in/vision-mission">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Vision &amp; Mission{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="organogram">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Organogram{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="https://rbuchd.in/why-to-join-rbgi">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Why to Join RBU, Mohali{" "}
                                  </a>
                                </li>
                              </ul>
                              <h3 className={`${styles.AboutHeading}`}>Board Of Governance </h3>
                              <ul className={styles.list_unstyled}>
                                <li>
                                  <a href="governing-body">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Governing Body{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="governing-body#Board-of-Management">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Board of Management{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="governing-body#Finance-Committee">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Finance committee{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="governing-body#Academic-Council">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Academic council{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12 ps-0">
                            <div className="inr-about-manu-txt px-2">
                              <div className={`${styles.manuTopPic} rounded mt-2` }>
                                <img
                                  // className="cong"
                                  className={`${styles.cong}`}
                                  src="https://rburopar.devildev.in/wp-content/uploads/2024/12/congrats.png"
                                />
                                <div 
                                // className="manu-top-txt"
                                className={`${styles.manuTopTxt}`}
                                >
                                  <h3>
                                    <span>RAYAT bahra university</span>
                                    <br />
                                    IS BEST UNIVERSITY IN INDIAN
                                  </h3>
                                </div>
                              </div>

                              <div className="ranks d-flex">
                                <div className={`${styles.rankBox}`}>
                                  <img
                                    className={`${styles.rankBg}`}
                                    src="https://rbuchd.in/wp-content/themes/rburopar/assets/images/rank-1.jpg"
                                  />
                                  <div className={`${styles.rankTxt}`}>
                                    <label className={`${styles.icon}`}>
                                      <img src="https://rbuchd.in/wp-content/themes/rburopar/assets/images/rank-icon.svg" />
                                    </label>
                                    <h4>1.7</h4>
                                    <p>
                                      Multinational IT Companies set up their
                                      Centers of Excellence at{" "}
                                    </p>
                                  </div>
                                </div>
                                <div className={`${styles.rankBox}`}>
                                  <img
                                    className={`${styles.rankBg}`}
                                    src="https://rbuchd.in/wp-content/themes/rburopar/assets/images/rank-1.jpg"
                                  />
                                  <div className={`${styles.rankTxt}`}>
                                    <label className={`${styles.icon}`}>
                                      <img src="https://rbuchd.in/wp-content/themes/rburopar/assets/images/rank-icon.svg" />
                                    </label>
                                    <h4>1.7</h4>
                                    <p>
                                      Multinational IT Companies set up their
                                      Centers of Excellence at{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="ranks  d-flex">
                              <div className={`${styles.rankBox}`}>
                                  <img
                                    className={`${styles.rankBg}`}
                                    src="https://rbuchd.in/wp-content/themes/rburopar/assets/images/rank-1.jpg"
                                  />
                                  <div className={`${styles.rankTxt}`}>
                                    <label className={`${styles.icon}`}>
                                      <img src="https://rbuchd.in/wp-content/themes/rburopar/assets/images/rank-icon.svg" />
                                    </label>
                                    <h4>1.7</h4>
                                    <p>
                                      Multinational IT Companies set up their
                                      Centers of Excellence at{" "}
                                    </p>
                                  </div>
                                </div>
                                <div className={`${styles.rankBox}`}>
                                  <img
                                    className={`${styles.rankBg}`}
                                    src="https://rbuchd.in/wp-content/themes/rburopar/assets/images/rank-1.jpg"
                                  />
                                  <div className={`${styles.rankTxt}`}>
                                    <label className={`${styles.icon}`}>
                                      <img src="https://rbuchd.in/wp-content/themes/rburopar/assets/images/rank-icon.svg" />
                                    </label>
                                    <h4>1.7</h4>
                                    <p>
                                      Multinational IT Companies set up their
                                      Centers of Excellence at{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Our Institutions
                      </a>
                      <div
                        className={`${styles.dropdown_menu_institution} dropdown-menu about-megamanu mt-4 bg-light bg-opacity-50 px-4`}
                        // className="dropdown-menu about-megamanu"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="inr-lights-manu px-1">
                          <div className="row">
                            <div className={`${styles.Institutebg} col-lg-8 col-md-8 col-sm-8 col-12 pe-0`}>
                              <div className="inr-about-megas lights">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="top-hdg">
                                      {" "}
                                      <h2 className={`${styles.ourInstitutionHeading} px-2`}
                                      
                                      >
                                        <a href="#" 
                                        
                                        >Our Schools</a>
                                      </h2>{" "}
                                    </div>
                                    <ul className={`${styles.list_unstyled} school-hights`}>
                                      <li>
                                        <a href="#" 

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right "
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Computing
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Engineering and
                                          Technology
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Polytechnic
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Management
                                          Studies
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" 

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Pharmaceutical
                                          Sciences
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" 

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Physiotherapy
                                          &amp; Radiology{" "}
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" 

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Allied Health
                                          Sciences
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" 

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Law
                                        </a>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-md-4">
                                    <ul className={`${styles.list_unstyled} school-hights`}>
                                      <li>
                                        <a href="#" 

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Animation, Art
                                          &amp; Design
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" 

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Airlines, Tourism
                                          and Hotel Management
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Agriculture
                                          Science
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Sciences
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Social Sciences
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          University School of Fashion and
                                          Communication Management
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Rayat Bahra Dental College &amp;
                                          Hospital
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Rayat Bahra College of Nursing
                                        </a>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-md-4">
                                    <div className="top-hdg">
                                      {" "}
                                      <h2 className={`${styles.ourInstitutionHeading}`} style={{lineHeight:'18px'}}>
                                        <a href="#"  
                                        >
                                          Industry-Integrated Departments
                                        </a>
                                      </h2>{" "}
                                    </div>
                                    <ul className={`${styles.list_unstyled}`}>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Sunstone
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Upgrad
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          OriginLife
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          INNR
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          IIFCT
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Nextgen
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                              <div 
                              className={`${styles.manuTopPic} rounded` }
                              >
                                <img
                                  className={`${styles.cong}`}
                                  src="https://rburopar.devildev.in/wp-content/uploads/2024/12/congrats-1.png"
                                />
                                <div className={`${styles.manuTopTxt}`}>
                                  <h3 className="fs-6">
                                    <span>RAYAT bahra university</span>
                                    <br />
                                    IS BEST UNIVERSITY IN INDIAN
                                  </h3>
                                </div>
                              </div>

                              <div className={styles.schoolCtsBtn}>
                                <a className={`${styles.instAplyBtn}`} href="#">
                                  Apply Now 2025{" "}
                                </a>
                                <a className={`${styles.instAplyBtn}`} href="#">
                                  Scholarship 2025
                                </a>
                                <a className={`${styles.instAplyBtn}`} href="#">
                                  International Admissions{" "}
                                </a>
                                <a className={`${styles.instAplyBtn}`} href="#">
                                  Call Us{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Program
                      </a>
                      <div
                        className={`${styles.dropdown_menu_program} mt-4 dropdown-menu megamenu institute_megamenu  bg-light bg-opacity-50`}
                        // className="dropdown-menu megamenu institute_megamenu"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="institute-nav-bg  ">
                          <div className="row ">
                            <div className="col-md-10">
                              <div className={`${styles.scrollableContainer} inst-manu-list `}>
                                <div className="row">
                                  <div className="col-md-2 pe-0">
                                    <div className="inr-cols">
                                      <div className="top-hdg">
                                        {" "}
                                        <h2>
                                          <a href="#"
                                          className={`${styles.programHeading}`}
                                          >
                                            Career-Focused Programs at Rayat
                                            Bahra University{" "}
                                          </a>
                                        </h2>{" "}
                                      </div>
                                      <ul className="inr-inst-nav list-unstyled ">
                                        <li >
                                          <a href="#"
                                          className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Engineering{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Pharmaceuitcals Sciences{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Management
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Airlines &amp; Airport / Travel&amp;
                                            Tourisms/ Hospitality Managment
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Animation, Art &amp; Design{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Computer Applications
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Legal Studies
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Agriculture Science &amp; Organic
                                            Farming
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Fashion Management
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Interior Designing
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Commerce
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Boiler Technology
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Business Analytics
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Education
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Fashion Designing{" "}
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="col-md-2 p-0">
                                    <div className="inr-cols">
                                      <ul className="inr-inst-nav uppercase list-unstyled">
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Fine Arts
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Hotel Management
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Journalism and mass communication
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Arts &amp;Humanites{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Digital Marketing
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Social Sciences
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Make up and Beauty Therapy
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Physical Education and Sports
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Dental
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Nursing{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Life Sciences
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Physical Sciences
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Food Science Technology
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Hospital Administration
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Public Health
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="col-md-2 p-0">
                                    <div className="inr-cols">
                                      <ul className="inr-inst-nav uppercase list-unstyled">
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Medical Laboratory Sciences{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Radiology and Imaging Technology{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            RENAL SCIENCES &amp; DIALYSIS
                                            THERAPY{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Physiotherapy{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Operation Theatre and Anaesthesia{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Optometry{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            PAREMEDICS{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Medical Microbiology{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Forensic Science{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Allied Health Sciences
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Cardiovascular Technology
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Chemistry/Mathematics/Physics
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Clinical Bio Chemistry
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink} ${styles.ProgramLeftSideLine}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Clinical Embryology
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink} ${styles.ProgramLeftSideLine}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Clinical Microbiology &amp; Clinical
                                            Research
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink} ${styles.ProgramLeftSideLine}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Bootny /Zoology / BIoTechnology
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink} ${styles.ProgramLeftSideLine}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Fisheries
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink} ${styles.ProgramLeftSideLine}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Hospital Administration
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="col-md-2 p-0 me-5">
                                    <div className="inr-cols">
                                      <div className="top-hdg">
                                        {" "}
                                        <h2>
                                          <a href="#"
                                          className={`${styles.programHeading}`}
                                          
                                          >
                                            Industry Oriented Courses{" "}
                                          </a>
                                        </h2>{" "}
                                      </div>
                                      <ul className="inr-inst-nav uppercase list-unstyled">
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            B.Tech CSE -AI&amp;ML by Microsoft{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            B.Tech CSE -AI&amp;ML by Nextgen
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            B.Tech Cyber Security by Nextgen
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            MBA/BBA Digital Marketing by Upgrad
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            MBA/BBA Business Analytics by Upgrad
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Clinical Embrology By OriginLife
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Fashion Designing by IIFCT
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            BCA - AIML by Nextgen
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Stem Cell &amp; Regenerative
                                            Medicine by ITHS
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Cancer Biology by ITHS
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Anthropology by ITHS
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            Nutrigenetics by ITHS
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#"
                                           className={`${styles.programLink}`}
                                          >
                                            {" "}
                                            <i
                                              className="fa-solid fa-angles-right"
                                              aria-hidden="true"
                                            ></i>{" "}
                                            ART &amp; Clinical Embryology by
                                            ITHS
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="col-md-2 ps-0 ">
                                    <div className={styles.schoolCtsBtnTwo}>
                                      <a className={`${styles.instAplyBtnTwo}`} href="#">
                                        Apply Now 2025{" "}
                                      </a>
                                      <a className={`${styles.instAplyBtnTwo}`} href="#">
                                        International Admissions
                                      </a>
                                      <a className={`${styles.instAplyBtnTwo}`} href="#">
                                        RBU Set
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-2 ps-0">
                              <div className={`${styles.allCampus}`}>
                                <h3 className="fs-6" >
                                  <span className={`${styles.visited} `}>Visited </span><br />
                                  Rayat-Bahra <br /> Group{" "}
                                  <span className={`${styles.places}`}>for Placements</span>
                                </h3>
                                <img src="https://rbuchd.in/wp-content/themes/rburopar/assets/images/all camp.png" />
                                <h4 className={`${styles.bottomCam}`}>
                                  350 + <label>companies</label>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <div
                        className="dropdown-menu programs-megamanu"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="inr-program-megamanu">
                          <div className="tab-content"></div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        highlights
                      </a>
                      <div
                        className={`${styles.highlights} dropdown-menu mt-4 about-megamanu bg-light bg-opacity-50`}
                        // className="dropdown-menu about-megamanu"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="inr-lights-manu pl-4">
                          <div className="row px-3">
                            <div className={`${styles.customBorderRadius} bg-white col-lg-7 col-md-7 col-sm-7 col-12 pe-0 `}>
                              <div className="inr-about-megas lights">
                                <div className="row ">
                                  <div className="col-md-6">
                                    <div className="top-hdg">
                                      {" "}
                                      <h2>
                                        <a href="#" className={`${styles.campusheading}`}>campus life</a>
                                      </h2>{" "}
                                    </div>
                                    <ul className={styles.list_unstyled}>
                                      <li>
                                        <a href="https://rbuchd.in/campus-highlight"
                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Campus Life
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#"
                                        
                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Life at RBU
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="https://rbuchd.in/campus-highlight#hotel-mess"

                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Hostel &amp; Mess
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://rbuchd.in/campus-highlight#transports"
                                        
                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Transport
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://rbuchd.in/campus-highlight#library"
                                        
                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Library
                                        </a>
                                      </li>

                                      <li>
                                        <a href="https://rbuchd.in/campus-highlight#sports-facilities"
                                        
                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Sports Facilities
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://rbuchd.in/campus-highlight#campus-tour"
                                        >
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Campus Tour
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className={`${styles.campusLinksTwo} col-md-6 manu-light-hads`}>
                                    <div className={styles.topHdg}>
                                      <h2>
                                        <a href="#">Events</a>
                                      </h2>
                                    </div>
                                    <div className={styles.topHdg}>
                                      <h2>
                                        <a href="#">PR Activities</a>
                                      </h2>
                                    </div>
                                    <div className={styles.topHdg}>
                                      <h2>
                                        <a href="#">NewsLetters</a>
                                      </h2>
                                    </div>
                                    <div className={styles.topHdg}>
                                      <h2>
                                        <a href="#">Downloads</a>
                                      </h2>
                                    </div>
                                    <div className={styles.topHdg}>
                                      <h2>
                                        <a href="https://rbuchd.in/skill-enhancement-program">
                                          Skill Enhancement Programs
                                        </a>
                                      </h2>
                                    </div>
                                    <div className={styles.topHdg}>
                                      <h2>
                                        <a href="#">Program Offered</a>
                                      </h2>
                                    </div>
                                    <div className={styles.topHdg}>
                                      <h2>
                                        <a href="#">Scholarship 2025</a>
                                      </h2>
                                    </div>
                                    <div className={styles.topHdg}>
                                      <h2>
                                        <a href="#">How to Apply</a>
                                      </h2>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>

                            <div className={`${styles.customBorderRadiusTwo}col-lg-5 col-md-5 col-sm-5 col-12 ps-0`}>
                            <div className={`${styles.highlightsPro} `}>

                              <div className={`${styles.highPub}`}>
                                <p>Multinational IT Companies set up their Centers of Excellence at</p>
                                <h4>Published in Referred Journals</h4>
                              </div>
                              <div className={`${styles.btmGrad}`}>
                                <h4>
                                  <span >350+</span> companies
                                </h4>
                              </div>
                            </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Admissions
                      </a>
                      <div
                        className={`${styles.dropdown_menu_admissions} dropdown-menu mt-4 about-megamanu bg-light bg-opacity-50`}
                        // className="dropdown-menu about-megamanu"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="inr-lights-manu bg-white " style={{ borderRadius: '15px' }}>
                          <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-7 col-12 pe-0">
                              <div className="inr-about-megas lights">
                                <div className="row">
                                  <div className="col-md-6">
                                    <ul className={styles.list_unstyled}>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Overview
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Courses After 10th
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Courses After 10+2th
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Course After Graduation
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Courses After Post Graduation
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Industry Embedded Courses
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Lateral Entry Programs
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Specialization Programs
                                        </a>
                                      </li>
                                    </ul>
                                    <div className={styles.top_hdg}>
                                      {" "}
                                      <h2>
                                        <a href="#">Fee Structure </a>
                                      </h2>{" "}
                                    </div>
                                    <ul className={styles.list_unstyled}>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Academic Fee
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Hostel Fee
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Transportation Fee
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-6">
                                    <div className={styles.top_hdg}>
                                      {" "}
                                      <h2>
                                        <a href="#">Admission Related Links </a>
                                      </h2>{" "}
                                    </div>
                                    <ul className={styles.list_unstyled}>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Apply Online
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Admission Process
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Scholarship
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Education Loan Assistance
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          National Admissions
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          International Admissions
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Refund Policy
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Migration Rules
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i
                                            className="fa-solid fa-angles-right"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          Global Pathway Programs
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-5 col-12 ps-0">
                              <div className={`${styles.highlightsPro} `}>
                                <div className={styles.highPub}>
                                  <p>
                                    Multinational IT Companies set up their
                                    Centers of Excellence at{" "}
                                  </p>
                                  <h4>Published in Referred Journals</h4>
                                </div>
                                <div className={styles.btmGrad}>
                                  <h4>
                                    <span>350+</span> companies
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        placements
                      </a>
                      <div
                        className={`${styles.dropdown_menu_placements} dropdown-menu  mt-4 about-megamanu bg-light bg-opacity-50`}
                        // className="dropdown-menu about-megamanu"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="inr-about-megas place-abouts-manu">
                              <ul className={`${styles.list_unstyled} bg-white`} 
                              style={{borderRadius:'15px'}}
                              >
                                <li>
                                  <a href="#">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Overview
                                  </a>
                                </li>
                                <li>
                                  <a href="https://rbuchd.in/placement-3#finishing-school">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    The Finishing School
                                  </a>
                                </li>
                                <li>
                                  <a href="https://rbuchd.in/placement-3#career-center">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Career Center
                                  </a>
                                </li>
                                <li>
                                  <a href="https://rbuchd.in/placement #placement-highlight">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Placement Highlights
                                  </a>
                                </li>
                                <li>
                                  <a href="https://rbuchd.in/placement-3 #centre-of-excellence">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Centre of Excellence
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className={styles.manu_light_hads}>
                              <div className="col-md-12 p-3 pt-0">
                                <div className={styles.top_hdg_placements}>
                                  {" "}
                                  <h2>
                                    <a href="#">
                                      {" "}
                                      <i
                                        className="fa-solid fa-angles-right"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      National Admissions
                                    </a>
                                  </h2>{" "}
                                </div>
                                <div className={styles.top_hdg_placements}>
                                  {" "}
                                  <h2>
                                    <a href="#">
                                      {" "}
                                      <i
                                        className="fa-solid fa-angles-right"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      International Admissions
                                    </a>
                                  </h2>{" "}
                                </div>
                                <div className={styles.top_hdg_placements}>
                                  {" "}
                                  <h2>
                                    <a href="#">
                                      {" "}
                                      <i
                                        className="fa-solid fa-angles-right"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Campus Tour
                                    </a>
                                  </h2>{" "}
                                </div>
                                <div className={styles.top_hdg_placements}>
                                  {" "}
                                  <h2>
                                    <a href="#">
                                      {" "}
                                      <i
                                        className="fa-solid fa-angles-right"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Campus lIfe at RBU
                                    </a>
                                  </h2>{" "}
                                </div>
                                <div className={styles.top_hdg_placements}>
                                  {" "}
                                  <h2>
                                    <a href="#">
                                      {" "}
                                      <i
                                        className="fa-solid fa-angles-right"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Standing Pic of Student
                                    </a>
                                  </h2>{" "}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-6 col-12 ps-0">
                            <div className="inr-about-manu-txt places">
                              <div className={styles.manu_top_pic}>
                                <img
                                  className="cong"
                                  src="https://rburopar.devildev.in/wp-content/uploads/2024/12/graduate-female.png"
                                />
                                <div className={styles.manu_top_txt}>
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div className="fst-boxes">
                                        <p>
                                          Multinational IT Companies set up
                                          their Centers of Excellence at{" "}
                                        </p>
                                        <h5>Rayat Bahra University</h5>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="fst-boxes">
                                        <h3>10000+</h3>
                                        <h4>Referred Journals</h4>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="fst-boxes">
                                        <p>
                                          Multinational IT Companies set up
                                          their Centers of Excellence at{" "}
                                        </p>
                                        <h5>Rayat Bahra University</h5>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="fst-boxes">
                                        <h3>10000+</h3>
                                        <h4>Referred Journals</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        research
                      </a>
                      <div
                        className={`${styles.dropdown_menu_research} dropdown-menu about-megamanu mt-4 bg-light bg-opacity-50`}
                        // className="dropdown-menu about-megamanu"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="inr-about-megas place-abouts-manu">
                              <ul className={`${styles.list_unstyled} bg-white rounded`}>
                                <li>
                                  <a href="https://rbuchd.in/research-domain">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Research Domains
                                  </a>
                                </li>
                                <li>
                                  <a href="https://rbuchd.in/doctor-of-philosophy">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Doctor of Philosophy
                                  </a>
                                </li>
                                <li>
                                  <a href="https://rbuchd.in/research-policy">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Research Policy
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="text-decoration-none">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Research &amp; Incubation&nbsp;Centre
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    {" "}
                                    <i
                                      className="fa-solid fa-angles-right "
                                      aria-hidden="true"
                                    ></i>{" "}
                                    IPR Policy{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-6 col-12 ps-0">
                            <div className={`${styles.inr_about_manu_txt} research-manu`}>
                              <div className={styles.manu_top_pic_two}>
                                <img
                                  className={styles.congTwo}
                                  src="https://rburopar.devildev.in/wp-content/uploads/2024/12/search-manu.png"
                                />
                                <div className={styles.manu_top_txt}>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className={styles.src_dis}>
                                        <p>
                                          Multinational IT Companies set up
                                          their Centers of Excellence at{" "}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className={styles.src_hads}>
                                        <h5>Rayat Bahra University</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.src_nums}>
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className={styles.src_box}>
                                      <h4>10k +</h4>
                                      <p>Research Publications</p>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className={styles.src_box}>
                                      <h4>2400+</h4>
                                      <p>
                                        Patents <br /> Filed
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className={styles.src_box}>
                                      <h4>10k +</h4>
                                      <p>Department Research Groups</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link text-decoration-none"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="nav_end d-none d-lg-flex gap-1">
                  <div className="d-flex align-items-center top_call">
                    <div>
                      <img
                        src="https://rbuchd.in/wp-content/uploads/2025/01/Vector-10.png"
                        alt="call"
                      />
                    </div>
                    <div className="ms-2">
                      <p className="m-0 ">
                        Admission Helpline
                        <br />
                        <span>+91 9780040777</span>
                      </p>
                    </div>
                  </div>

                  <a href="#" className="top_icon">
                    <i className="fa fa-bell text-black" aria-hidden="true"></i>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
