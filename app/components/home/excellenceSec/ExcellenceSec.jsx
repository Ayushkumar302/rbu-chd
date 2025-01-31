import React from 'react';
import styles from './ExcellenceSec.module.css';
import Image from 'next/image';

const ExcellenceSec = () => {
  return (
    <section className={styles.bg_gray} id="excellence_sec">
      <div className="container">
        <div className={styles.headings}>
          <h3 className={styles.heading}>
            <span>Together We Have </span> Achieved Excellence
          </h3>
        </div>
        <div className="row justify-content-center cus_space my-4 mt-0 g-4 d-flex flex-wrap equal-cols">
          <div className="col-auto">
            <div className={styles.iconCard}>
              <div className={styles.img_box}>
                <Image
                  src="/excellence_sec_1.png"
                  alt="Top Placements"
                  className={styles.img}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <p>Top Placements</p>
            </div>
          </div>
          <div className="col-auto">
            <div className={styles.iconCard}>
              <div className={styles.img_box}>
                <Image
                  src="/excellence_sec_2.png"
                  alt="Value For Money"
                  className={styles.img}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <p>Value For Money</p>
            </div>
          </div>
          <div className="col-auto">
            <div className={styles.iconCard}>
              <div className={styles.img_box}>
                <Image
                  src="/excellence_sec_3.png"
                  alt="International Curriculum"
                  className={styles.img}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <p className={styles.CardText}>International Curriculum</p>
            </div>
          </div>
          <div className="col-auto">
            <div className={styles.iconCard}>
              <div className={styles.img_box}>
                <Image
                  src="/excellence_secsec_4.png"
                  alt="Affordable feee"
                  className={styles.img}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <p>Affordable fee</p>
            </div>
          </div>
          <div className="col-auto">
            <div className={styles.iconCard}>
              <div className={styles.img_box}>
                <Image
                  src="/excellence_sec_5.png"
                  alt="Top Faculty"
                  className={styles.img}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <p>Top Faculty</p>
            </div>
          </div>
          <div className="col-auto">
            <div className={styles.iconCard}>
              <div className={styles.img_box}>
                <Image
                  src="/excellence_sec_6.png"
                  alt="Educational Loan"
                  className={styles.img}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <p>Educational Loan</p>
            </div>
          </div>
          <div className="col-auto">
            <div className={styles.iconCard}>
              <div className={styles.img_box}>
                <Image
                  src="/excellence_sec_7.png"
                  alt="Successful Alumni"
                  className={`${styles.img} img-fluid`}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <p>Successful Alumni</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-8 btm-news">
            <div id="carouselExampleIndicators" className={`${styles.carsousalSlide} carousel slide`} data-bs-ride="carousel"  >
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner" >
                <div className={`${styles.carouselItem} carousel-item active`}>
                  <Image
                    src="/excellence_sec_9.png"
                    alt="Slide 1"
                    className="d-block w-100"
                    width={800}
                    height={400}
                    layout="responsive"
                    style={{borderRadius: '20px'}}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="/excellence_sec_8.png"
                    alt="Slide 2"
                    className="d-block w-100"
                    width={800}
                    height={200}
                    layout="responsive"
                    style={{borderRadius: '20px'}}

                    
                  />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className={styles.event_right_box}>
              <Image
                src="/excellence_sec_10.png"
                alt="International Rankings"
                className="img-fluid"
                width={400}
                height={300}
                layout="responsive"
              />
              <div className={styles.imgTextBox}>
                <h6>INTERNATIONAL | RANKINGS</h6>
                <p>Rayat Bahra University ranked #1 among Top Private Universities in India Under Qs World rankings 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSec;