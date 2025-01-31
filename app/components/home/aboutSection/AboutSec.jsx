import styles from './AboutSec.module.css'
import Image from 'next/image'

const AboutSec = () => {
  return (
    <section className={`container  ${styles.aboutSec}`}>
      <div className="row ">
        {/* Left Content */}
        <div className="col-md-6 d-flex flex-column justify-content-center"
        style={{width:'450px'}}
        >
          <h2 className={`${styles.heading} display-4`}>Explore your potential with Rayat Bahra University</h2>
          <p className={styles.description}>
            RBU is a premier Indian institution, offering an exceptional blend of academic rigor and professional excellence.
            The university has been accredited by the esteemed National Assessment and Accreditation Council (NAAC), a testament to its commitment to quality education.
          </p>
        </div>

        {/* Right Content - Images */}
        <div className="col-md-6 d-flex">

        <div className="d-flex flex-row justify-content-between w-100">
            <Image 
            src="/about_1.png" 
            width={800}
            height={500}
            alt="First Image" 
            className={`img-fluid ${styles.image1}`} 
            />
            <Image 
            src="/about_2.png" 
            width={300}
            height={500}
            alt="Second Image" 
            className={`img-fluid ${styles.image2}`} 
            />
        </div>
        </div>

      </div>

      {/* Notice Section */}
      <div className={`${styles.notice} d-flex  align-items-center mt-4`}>
        <div className={styles.icon}>
          {/* <i className="fas fa-info-circle"></i> */}
          <Image 
            src="/about_3.png" 
            width={30}
            height={30}
            alt="Second Image" 
            />
        </div>
        <div className={styles.notice_title}>
            Notice 2025  
        </div>
        <div className={`${styles.separator}`}></div>

       <div >
       <p className={styles.noticeText}>
          Admissions for 2025 are now open at the Punjab campus. A limited number of seats are still available at the Himachal Pradesh campus.
        </p>
       </div>
      </div>
    </section>
  )
}

export default AboutSec
