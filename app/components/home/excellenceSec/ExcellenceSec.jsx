import React from 'react';
import styles from './ExcellenceSec.module.css'; 
const ExcellenceSec = () => {
  return (
    <section className={styles.bg_gray} id="excellence_sec">
        <div className="container">
            <div className={styles.headings}>
                <h3 className={styles.heading}>
                    <span>Together We Have </span> Achieved Excellence </h3>
            </div>
            <div className="row justify-content-center cus_space my-4 mt-0 g-4 d-flex flex-wrap equal-cols">
                <div className="col-auto">
                    <div className={styles.iconCard}>
                        <div className={styles.img_box}>
                            <img className={`${styles.img} `} src="https://rbuchd.in/wp-content/uploads/2024/11/l.png" />
                        </div>
                        <p>
                            Top Placements </p>
                    </div>
                </div>
                <div className="col-auto">
                    <div className={styles.iconCard}>
                        <div className={styles.img_box}>
                            <img className={`${styles.img}`} src="https://rbuchd.in/wp-content/uploads/2024/11/m.png"/>
                        </div>
                        <p>
                            Value For Money </p>
                    </div>
                </div>
                <div className="col-auto">
                    <div className={styles.iconCard}>
                        <div className={styles.img_box}>
                            <img className={`${styles.img} `} src="https://rbuchd.in/wp-content/uploads/2024/11/gl.png"/>
                        </div>
                        <p className={styles.CardText}>
                            International Curriculum </p>
                    </div>
                </div>
                <div className="col-auto">
                    <div className={styles.iconCard}>
                        <div className={styles.img_box}>
                            <img className={`${styles.img} `} src="https://rbuchd.in/wp-content/uploads/2024/11/FREE.png"/>
                        </div>
                        <p>
                            Affordable fee </p>
                    </div>
                </div>
                <div className="col-auto">
                    <div className={styles.iconCard}>
                        <div className={styles.img_box}>
                            <img className={`${styles.img} `} src="https://rbuchd.in/wp-content/uploads/2024/11/rrr.png"/>
                        </div>
                        <p>
                            Top Faculty </p>
                    </div>
                </div>
                <div className="col-auto">
                    <div className={styles.iconCard}>
                        <div className={styles.img_box}>
                            <img className={`${styles.img} `} src="https://rbuchd.in/wp-content/uploads/2024/11/NN.png"/>
                        </div>
                        <p>
                            Educational Loan </p>
                    </div>
                </div>
                <div className="col-auto">
                    <div className={styles.iconCard}>
                        <div className={styles.img_box}>
                            <img className={`${styles.img} img-fluid`} src="https://rbuchd.in/wp-content/uploads/2024/11/F.png"/>
                        </div>
                        <p>
                            Successfull Alumni </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-8 btm-news">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://rbuchd.in/wp-content/uploads/2024/11/7-scaled.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://rbuchd.in/wp-content/uploads/2024/11/rank-slide.jpg" className="d-block w-100" alt="..."/>
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
                        {/* <!--                 <img src="https://rbuchd.in/wp-content/uploads/2024/11/inter-rank.jpg" className="img-fluid" alt="graduation"> --> */}
                        <img src="https://rburopar.devildev.in/wp-content/uploads/2024/12/WK4G1591-1.png" className="img-fluid" alt="graduation"/>
                        <div className={styles.imgTextBox}>
                            <h6>
                                INTERNATIONAL | RANKINGS </h6>
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
