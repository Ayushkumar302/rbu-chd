import styles from "./BannerSection.module.css";
import Image from "next/image";

const BannerSection = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div
          className="position-relative w-100"
          style={{
            height: "100vh",
            background: `
              linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), 
              url(https://rbuchd.in/wp-content/uploads/2025/01/RBU-dorn-pic.jpg)
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
         >
          {/* Text Content */}
          <div className={`${styles.banner_text_content} position-absolute top-50 start-0 translate-middle-y text-light ps-5`}>
            <h3 className="fw-light mt-4 mb-0" >
              FUELING FUTURES, <br /> EMPOWERING DREAMS
            </h3>
            <h1
              className="fw-bold d-inline mb-4"
              // style={{ fontSize: "3rem", lineHeight: "1.2" }}
            >
              <span className="text-danger">INDIA’S NO. 1 </span> <br />
              PRIVATE UNIVERSITY
            </h1>
            <p className="mb-4" >
              460+ TIE-UPS WITH INDUSTRY & UNIVERSITIES IN 90 COUNTRIES AMPLIFY
              GLOBAL EXPOSURE & PROVIDE YOU WITH OPPORTUNITIES.
            </p>
            <a
              href="#"
              className="btn btn-danger px-4 py-2"
              
            >
              Apply Now
            </a>
          </div>

          {/* Cards */}
          <div
            className="position-absolute bottom-0 end-0 px-2 d-flex align-items-end"
            style={{ transform: "translate(0%, 50%)", gap: "1rem" }}
          >
            {/* Card 1 */}
            <div className={`${styles.left_scolar}`}>
              <div className="row">
                <div className="col-sm-1 ms-2">
                  <Image
                    src="/stars.png"
                    alt="Sample Image"
                    width={600}
                    height={400}
                    layout="intrinsic"
                    className={styles.left_scolar_star_image}
                  />
                </div>
                <div className="col-sm-10">
                  <h6 className={`${styles.left_scolar_label}`}>EARN UPTO</h6>
                  <h3>
                    <span className={styles.left_scolar_h2}>100%</span>{" "}
                    <span className="left_scolar_h4"> SCHOLARSHIP </span>
                  </h3>
                  <p className={styles.left_scolar_p}>
                    to unlock your Scholarly Potential & pave the way for your
                    Bright Future.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className={styles.left_scolar}>
              <div className="row">
                <div className="col-sm-1 ms-2">
                  <Image
                    src="/stars.png"
                    alt="Sample Image"
                    width={600}
                    height={400}
                    layout="intrinsic"
                    className={styles.left_scolar_star_image}
                  />
                </div>
                <div className="col-sm-5">
                  <h6 className={`${styles.left_scolar_label}`}>Ranked</h6>
                  <h3>
                    <span className={styles.left_scolar_h2}>15</span>
                  </h3>
                  <p className={styles.left_scolar_p}>in india</p>
                </div>
                <div className="col-sm-5">
                  <p className={styles.left_scolar_p}>
                    Recognized among India’s top universities for Academic
                    Excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
