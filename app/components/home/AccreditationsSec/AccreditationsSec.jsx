import Image from 'next/image';
import styles from './AccreditationsSec.module.css';

export const AccreditationsSec = () => {
  return (
    <section className={`container-fluid ${styles.accreditationsSection}`}>
      <div className="container text-center">
        <div className={`d-flex justify-content-center align-items-center mb-4 ${styles.flexContainer}`}>
          <h2 className={`${styles.heading} mb-0`}>Accreditations</h2>
          <p className={`${styles.subheading} mb-0`}>Placements with Leading MNC's</p>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-3 mb-4" style={{ width: "160px" }}>
            <Image
              src="/accred_sec1.jpg"
              alt="Accreditation 1"
              className={`${styles.img} shadow-1-strong rounded mb-4`}
              width={160}
              height={160}
              layout="responsive"
            />
          </div>
          <div className="col-md-3 mb-4" style={{ width: "160px" }}>
            <Image
              src="/accred_sec2.jpg"
              alt="Accreditation 2"
              className={`${styles.img} shadow-1-strong rounded mb-4`}
              width={160}
              height={160}
              layout="responsive"
            />
          </div>
          <div className="col-md-3 mb-4" style={{ width: "160px" }}>
            <Image
              src="/accred_sec3.jpg"
              alt="Accreditation 3"
              className={`${styles.img} shadow-1-strong rounded mb-4`}
              width={160}
              height={160}
              layout="responsive"
            />
          </div>
          <div className="col-md-3 mb-4" style={{ width: "160px" }}>
            <Image
              src="/accred_sec4.jpg"
              alt="Accreditation 4"
              className={`${styles.img} shadow-1-strong rounded mb-4`}
              width={160}
              height={160}
              layout="responsive"
            />
          </div>
          <div className="col-md-3 mb-4" style={{ width: "160px" }}>
            <Image
              src="/accred_sec5.jpg"
              alt="Accreditation 5"
              className={`${styles.img} shadow-1-strong rounded mb-4`}
              width={160}
              height={160}
              layout="responsive"
            />
          </div>
          <div className="col-md-3 mb-4" style={{ width: "160px" }}>
            <Image
              src="/accred_sec6.jpg"
              alt="Accreditation 6"
              className={`${styles.img} shadow-1-strong rounded mb-4`}
              width={160}
              height={160}
              layout="responsive"
            />
          </div>
          <div className="col-md-3 mb-4" style={{ width: "160px" }}>
            <Image
              src="/accred_sec7.jpg"
              alt="Accreditation 7"
              className={`${styles.img} shadow-1-strong rounded mb-4`}
              width={160}
              height={160}
              layout="responsive"
            />
          </div>
          <div className="col-md-3 mb-4" style={{ width: "160px" }}>
            <Image
              src="/accred_sec8.jpg"
              alt="Accreditation 8"
              className={`${styles.img} shadow-1-strong rounded mb-4`}
              width={160}
              height={160}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
