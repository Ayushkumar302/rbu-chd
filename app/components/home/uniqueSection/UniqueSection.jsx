import styles from './UniqueSection.module.css';
import Image from 'next/image';

const UniqueSection = () => {
  return (
    <section className={`${styles.uniqueSection} container-fluid`}>
      <div className="container text-center">
        <h2 className={`${styles.heading}`}>
          <span className={styles.lightText}>What Sets Us </span>
          <span className={styles.boldText}>Apart in Education</span>
        </h2>

        {/* Cards Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className={`${styles.featureCard}`}>
              <Image
                src="/unique_sec_img.png"
                alt="Innovative Teaching"
                className={`${styles.cardImage}`}
                width={100} 
                height={100} 
                layout="responsive"
              />
              <h3 className={`${styles.featureCardHeading}`}>Innovative Teaching Methods</h3>
              <p className={`${styles.featureCardText}`}>Fostering creativity through modern education.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className={`${styles.featureCard}`}>
              <Image
                src="/unique_sec_img.png"
                alt="Innovative Teaching"
                className={`${styles.cardImage}`}
                width={100}
                height={100}
                layout="responsive"
              />
              <h3 className={`${styles.featureCardHeading}`}>Innovative Teaching Methods</h3>
              <p className={`${styles.featureCardText}`}>Fostering creativity through modern education.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className={`${styles.featureCard}`}>
              <Image
                src="/unique_sec_img.png"
                alt="Innovative Teaching"
                className={`${styles.cardImage}`}
                width={100}
                height={100}
                layout="responsive"
              />
              <h3 className={`${styles.featureCardHeading}`}>Innovative Teaching Methods</h3>
              <p className={`${styles.featureCardText}`}>Fostering creativity through modern education.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className={`${styles.featureCard}`}>
              <Image
                src="/unique_sec_img.png"
                alt="Innovative Teaching"
                className={`${styles.cardImage}`}
                width={100}
                height={100}
                layout="responsive"
              />
              <h3 className={`${styles.featureCardHeading}`}>Innovative Teaching Methods</h3>
              <p className={`${styles.featureCardText}`}>Fostering creativity through modern education.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;