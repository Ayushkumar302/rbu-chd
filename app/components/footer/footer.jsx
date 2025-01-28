import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={`${styles.padding_80}`} id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-2">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className={styles.footer_title}>Explore</h3>
                <ul className={`${styles.menu} ul_style `}>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Exploring Rayat Bahra Group
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      About RBU, Mohali
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Statutory Declaration
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Approvals &amp; Accredation
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Awards &amp; recognization
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Organogram
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      ESR (Education Social Responsibility)
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Statutory Declaration
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Academic Officials
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Administrative Officials
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Latest News &amp; Events
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Upcoming Events
                    </a>
                  </li>
                </ul>
                <h3 className={`${styles.footer_title} mt-4`}>
                  Important Links{" "}
                </h3>
                <ul className={`${styles.menu} ul_style `}>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      UGC
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      NCTE
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      UGC Approval
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Punjab Govt Approval
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      UGC Inspection Performa
                    </a>
                  </li>
                </ul>{" "}
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className={styles.footer_title}>Our Schools </h3>
                <ul className={`${styles.menu} ul_style `}>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      University School of Engineering and Technology
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      University School of Polytechnic
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      University School of Management Studies
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      University School of Pharmaceutical Sciences
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      University School of Physiotherapy &amp; Radiology
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      University School of Allied Health Sciences
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      University School of Law
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      University School of Animation, Art &amp; Design
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      University School of Airlines, Tourism and Hotel
                      Management
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      University School of Agriculture Science
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      UNIVERSITY SCHOOL OF SCIENCES
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      University School of Social Sciences
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      University School of Fashion and Communication Management
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Rayat Bahra Dental College &amp; Hospital
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Rayat Bahra College of Nursing
                    </a>
                  </li>
                </ul>{" "}
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className={styles.footer_title}>
                  Admission Related Links{" "}
                </h3>
                <ul className={`${styles.menu} ul_style `}>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Courses After 10th
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Courses After 10+2th
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Course After Graduation
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Courses After Post Graduation
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Industry Embedded Courses
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Lateral Entry Programs
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Specialization Programs
                    </a>
                  </li>
                </ul>{" "}
                <h3 className={`${styles.footer_title} mt-4`}>
                  Fee Structure{" "}
                </h3>
                <ul className={`${styles.menu} ul_style `}>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Academic Fee
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Hostel Fee
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Transportation Fee
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Apply Now 2025
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Scholarship
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Refund Policy
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Migration Rules
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      International Admissions
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a
                      className={styles.info_box_wrap_a}
                      href="https://rbuchd.in/chairmans-message/"
                    >
                      Why to Join RBU, Mohali
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className={styles.footer_title}>NAAC</h3>
                <ul className={`${styles.menu} ul_style `}>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      AQAR 1st
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      IQAC
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Anti Ragging Committee ARC
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Anti Ragging Squad ARS
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a className={styles.info_box_wrap_a} href="#">
                      Committees
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a
                      className={styles.info_box_wrap_a}
                      href="https://rbuchd.in/contact-us/"
                    >
                      SSR
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a
                      className={styles.info_box_wrap_a}
                      href="https://rbuchd.in/contact-us/"
                    >
                      Statement Compliance
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a
                      className={styles.info_box_wrap_a}
                      href="https://rbuchd.in/contact-us/"
                    >
                      Best Practices
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a
                      className={styles.info_box_wrap_a}
                      href="https://rbuchd.in/contact-us/"
                    >
                      Institutional Distinctivesness
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a
                      className={styles.info_box_wrap_a}
                      href="https://rbuchd.in/contact-us/"
                    >
                      Faculty Awards
                    </a>
                  </li>
                  <li className={styles.info_box_wrap}>
                    <i
                      className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                      aria-hidden="true"
                    ></i>
                    <a
                      className={styles.info_box_wrap_a}
                      href="https://rbuchd.in/contact-us/"
                    >
                      Students Awards
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="widget widget_contact footer-widget">
                <h3 className={styles.footer_title}>Get in touch</h3>
                <a className="navbar-brand" href="https://rburopar.devildev.in">
                  <img
                    className={styles.logo}
                    src="https://rburopar.devildev.in/wp-content/uploads/2024/12/rbu-logo.png"
                  />
                </a>
                <div className={`${styles.info_box_wrap} mb-0`}>
                  <i
                    className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                    aria-hidden="true"
                  ></i>
                  <p className="contact-text light-title">
                    Rayat-Bahra University Chandigarh-Ropar NH 205, Greater
                    Mohali, Punjab, INDIA - 140103
                  </p>
                </div>
                <div className="th-widget-contact">
                  <div className={styles.info_box_wrap}>
                    <div className="info-box_icon">
                      <i
                        className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                        aria-hidden="true"
                      ></i>
                    </div>
                    <span className={styles.info_box_wrap_span}>
                      Phone <br />{" "}
                      <a
                        href="tel:0160-5009665, 0160-5009675"
                        className={`${styles.info_box_wrap_a}`}
                      >
                        0160-5009665, 0160-5009675
                      </a>
                    </span>
                  </div>
                  <div className={styles.info_box_wrap}>
                    <div className="info-box_icon">
                      <i
                        className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                        aria-hidden="true"
                      ></i>
                    </div>
                    <span className={styles.info_box_wrap_span}>
                      Admission Helpline: <br />{" "}
                      <a
                        href="tel:+91 9780040777"
                        className={`${styles.info_box_wrap_a}`}
                      >
                        98888-06027, 97800-40777
                      </a>
                    </span>
                  </div>
                  {/* <!-- 											    <div className={styles.info_box_wrap}>
                                                    <div className="info-box_icon"><i
                                                                    className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                                                                    aria-hidden="true"></i></div>
                                                    <span>Email: <br/><a href="mailto: admissionshspcampus@rayatbahra.com"
                                                                     className="info-box_link info_email_link">admissionshspcampus@rayatbahra.com</a></span>
                                            </div> --> */}
                  {/* <!--                                                 <div className={styles.info_box_wrap}>
                                                    <div className="info-box_icon"><i 
                                                                    className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                                                                    aria-hidden="true"></i></div>
                                                    <span>Toll Free:<br /> <a href="tel:1+91 9780040777"
                                                                    className="info-box_link">+91 9780040777																				</a></span>
                                            </div> --> */}

                  <div className={styles.info_box_wrap}>
                    <div className="info-box_icon">
                      <i
                        className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                        aria-hidden="true"
                      ></i>
                    </div>
                    <span className={styles.info_box_wrap_span}>
                      Helpline numbers for International Applicants: <br />
                      <a className={`${styles.info_box_wrap_a}`} href="#">
                        {" "}
                        8476912345{" "}
                      </a>
                    </span>
                  </div>

                  <div className={styles.info_box_wrap}>
                    <div className="info-box_icon">
                      <i
                        className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                        aria-hidden="true"
                      ></i>
                    </div>
                    <span className={styles.info_box_wrap_span}>
                      E-mail: <br />
                      <a
                        href="mailto:info@rayatbahrauniversity.edu.in"
                        className={`${styles.info_box_wrap_a}`}
                      >
                        info@rayatbahrauniversity.edu.in
                      </a>
                    </span>
                  </div>

                  <div className={styles.info_box_wrap}>
                    <div className="info-box_icon">
                      <i
                        className={`fa fa-angle-double-right text-white ${styles.info_box_wrap_i}`}
                        aria-hidden="true"
                      ></i>
                    </div>
                    <span className={styles.info_box_wrap_span}>
                      Admission Office at:- <br />
                      <p>
                        <a className={`${styles.info_box_wrap_a}`} href="#">
                          Himachal Pradesh
                        </a>
                      </p>
                      <p>
                        <a className={`${styles.info_box_wrap_a}`} href="#">
                          Punjab
                        </a>
                      </p>
                      <p>
                        <a className={`${styles.info_box_wrap_a}`} href="#">
                          Haryana
                        </a>
                      </p>
                      <p>
                        <a className={`${styles.info_box_wrap_a}`} href="#">
                          Jammu &amp; Kashmir
                        </a>
                      </p>
                      <p>
                        <a className={`${styles.info_box_wrap_a}`} href="#">
                          Chandigarh
                        </a>
                      </p>
                      <p>
                        <a className={`${styles.info_box_wrap_a}`} href="#">
                          Uttar Pradesh
                        </a>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End footer */}

      {/* Start copyright */}

      <div className={styles.footer_copyright}>
        <div className="container">
          {/* <!--	<div className="row">
				<div className="col-md-12">
					<p><a href="https://rbuchd.in/wp-content/uploads/2025/01/University-Institution-Information.pdf">Anti Ragging</a> | ICC | Privacy Policy | Disclaimer | Terms & Conditions | Student Grievance
Redressal | Feedback</p>         		
				</div>
			
			</div> --> */}
          <div className="row">
            <div className="col-md-12">
              <p className="m-0">
                Copyrights © 2025 All Rights Reserved by Rayat Bahra University
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* End copyright */}
    </>
  );
};

export default Footer;
