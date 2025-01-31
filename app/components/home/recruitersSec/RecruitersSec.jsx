'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './RecruitersSec.module.css';
import Image from 'next/image';

const RecruitersSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className={styles.placements_sec} id="placements_sec">
      <div className="container">
        <div className="sec-hads text-center">
          <h3 className="text-center sec_heading fw-bold">
            <span>Our</span> Esteemed Recruiters
          </h3>
          <p>
            We collaborate with top-tier companies and organizations, ensuring our students have access to exclusive career opportunities and a direct pathway to industry-leading employers.
          </p>
        </div>
        <div className="row d-none d-md-block">
          <div className="col-md-12">
            <div className="placements_img_box">
              <div className="row">
                <div className="col-md-15">
                  <Image
                    src="/recruiters_1.png"
                    className={`${styles.ImageBig} img-fluid`}
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    alt="placements"
                    width={1100}
                    height={200}
                    layout="responsive"
                  />
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-block d-md-none">
          <marquee direction="">
            <Image
              src="/recruiters_1.png"
              alt="international flags"
              width={1000}
              height={550}
              className={`${styles.ImageSmall} img-fluid`}
              layout="intrinsic"
              style={{ maxWidth: "1000px", width: "1000px", marginTop: "30px" }}
            />
          </marquee>
        </div>
        <div className="row d-none d-md-block">
          <div className="col-md-12">
            <div className="placements_img_box">
              <div className="row">
                <div className="col-md-15">
                  <Image
                    src="/recruiters_2.png"
                    className={`${styles.ImageBig} img-fluid`}
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    alt="placements"
                    width={1200}
                    height={300}
                    layout="responsive"
                  />
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-block d-md-none">
          <marquee direction="">
            <Image
              src="/recruiters_2.png"
              className={`${styles.ImageSmall} img-fluid`}
              alt="international flags"
              width={1000}
              height={250}
              layout="intrinsic"
              style={{ maxWidth: "1000px", width: "1000px", marginTop: "30px" }}
            />
          </marquee>
        </div>
        <div className="row d-none d-md-block">
          <div className="col-md-12">
            <div className="placements_img_box">
              <div className="row">
                <div className="col-md-15">
                  <Image
                    src="/recruiters_3.png"
                    className={`${styles.ImageBig} img-fluid`}
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    alt="placements"
                    width={1200}
                    height={300}
                    layout="responsive"
                  />
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-block d-md-none">
          <marquee direction="">
            <Image
              src="/recruiters_3.png"
              className={`${styles.ImageSmall} img-fluid`}
              alt="international flags"
              width={1000}
              height={250}
              layout="intrinsic"
              style={{ maxWidth: "1000px", width: "1000px", marginTop: "30px" }}
            />
          </marquee>
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;