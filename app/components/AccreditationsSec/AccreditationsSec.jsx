import styles from './AccreditationsSec.module.css';

export const AccreditationsSec = () => {
  return (
    <section className={`container-fluid ${styles.accreditationsSection}`}>
      <div className="container text-center">
        <div className="d-flex  justify-content-center align-items-center mb-4">
          <h2 className={`${styles.heading} mb-0`}>Accreditations</h2>
          <p className={`${styles.subheading} mb-0`}>Placements with Leading MNC's</p>
        </div>
        <div className="row justify-content-center mt-4">
          {/* Add your images here */}
          <div className="col-md-3 mb-4"
          style={{width: "160px"}}
          >
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/acr-1-1.jpg"
              alt="Accreditation 1"
              className={`${styles.img} w-100 shadow-1-strong rounded mb-4`}
            />
          </div>
          <div className="col-md-3 mb-4"
          style={{width: "160px"}}
          
          >
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/acr-2.jpg"
              alt="Accreditation 2"
              className={`${styles.img} w-100 shadow-1-strong rounded mb-4`}
            />
          </div>
          <div className="col-md-3 mb-4"
          style={{width: "160px"}}
          
          >
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/acr-3-1.jpg"
              alt="Accreditation 3"
              className={`${styles.img} w-100 shadow-1-strong rounded mb-4`}
            />
          </div>
          <div className="col-md-3 mb-4"
          style={{width: "160px"}}
          
          >
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/acr-4-1.jpg"
              alt="Accreditation 4"
              className={`${styles.img} w-100 shadow-1-strong rounded mb-4`}
            />
          </div>
          <div className="col-md-3 mb-4"
          style={{width: "160px"}}
          
          >
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/acr-5-1.jpg"
              alt="Accreditation 4"
              className={`${styles.img} w-100 shadow-1-strong rounded mb-4`}
            />
          </div>
          <div className="col-md-3 mb-4"
          style={{width: "160px"}}
          
          >
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/acr-6-1.jpg"
              alt="Accreditation 4"
              className={`${styles.img} w-100 shadow-1-strong rounded mb-4`}
            />
          </div>
          <div className="col-md-3 mb-4"
          style={{width: "160px"}}
          
          >
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/acr-7-1.jpg"
              alt="Accreditation 4"
              className={`${styles.img} w-100 shadow-1-strong rounded mb-4`}
            />
          </div>
          <div className="col-md-3 mb-4"
          style={{width: "160px"}}
          
          >
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/acr-8-1.jpg"
              alt="Accreditation 4"
              className={`${styles.img} w-100 shadow-1-strong rounded mb-4`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
