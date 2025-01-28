'use client';  

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './RecruitersSec.module.css'; 

const RecruitersSection = () => {
  // Initialize AOS above JSX in useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);  

  return (
    <section className="my-5" style={{backgroundColor:'#f3f6fb'}}>
      {/* Heading */}
      <h2 className={`${styles.heading}`}>
        <span className={`${styles.lightText}`}>Our</span> Esteemed Recruiters
      </h2>

      {/* Subtext */}
      <p className={`${styles.subtext} mt-3`}>
        We collaborate with top-tier companies and organizations, ensuring our students have access to exclusive career opportunities and a direct pathway to industry-leading employers.
      </p>

      {/* Image Carousel */}
      <div className="row d-none d-md-block">
        <div className="col-md-12">
          {/* First Image with Animation */}
          <div className={`${styles.placements_img_box}`}>
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/placement_3.png"
              className={`${styles.img} shadow-1-strong rounded mb-4 aos-init`}
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-easing="ease-in-sine"
              alt="placement 1"
            />
          </div>

          {/* Second Image with Animation */}
          <div className={`${styles.placements_img_box}`}>
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/placement_2.png"
              className={`${styles.img} shadow-1-strong rounded mb-4 aos-init`}
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
              alt="placement 2"
            />
          </div>

          {/* Third Image with Animation */}
          <div className={`${styles.placements_img_box}`}>
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/placement_1.png"
              className={`${styles.img} shadow-1-strong rounded mb-4 aos-init`}
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-easing="ease-in-sine"
              alt="placement 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;
