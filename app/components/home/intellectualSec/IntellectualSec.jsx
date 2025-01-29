import styles from './Intellectual.module.css'

export const IntellectualSec = () => {
  return (
    <section className={styles.intellectual_sec}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <div className={styles.fst_box}>
                        <h4>
                            Our Intellectual Assets </h4>
                        <p>At Rayat Bahra University (RBU), we take pride in our distinguished faculty, who bring a wealth of knowledge and expertise from around the world. Each member excels in their field, with a strong commitment to academic excellence
                            and high ethical standards. Our faculty is dedicated to shaping the leaders of tomorrow, offering guidance and mentorship to students at every stage of their academic journey.</p>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.scd_box}>
                        <img src="https://rbuchd.in/wp-content/uploads/2025/01/VC-Sir_page-0001-scaled-1.jpg" className="img-fluid" alt="graduation"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="trd-box">
                        <h4>
                            Prof. (Dr). Parvinder Singh <label>Vice Chancellor</label> </h4>
                        <h3>
                            “The innovations we do together, make a difference in the society” </h3>
                        <p>At Rayat Bahra University, we believe that collective innovation drives societal change. Through collaboration, creativity, and a commitment to excellence, we aim to equip our students with the skills and knowledge necessary to
                            make a positive impact on the world. Together, we are shaping the future and creating solutions for a better tomorrow.</p>
                        <a className="btm-read" href="https://rbuchd.in/about-us#about-chancellor">Read More </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
