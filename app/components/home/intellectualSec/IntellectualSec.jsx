import Image from 'next/image';
import styles from './Intellectual.module.css';
import Link from 'next/link';

export const IntellectualSec = () => {
  return (
    <section className={styles.intellectual_sec}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <div className={styles.fst_box}>
                        <h4>Our Intellectual Assets</h4>
                        <p>At Rayat Bahra University (RBU), we take pride in our distinguished faculty, who bring a wealth of knowledge and expertise from around the world...</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.scd_box}>
                        <Image 
                            src="/intellectual_sec.jpg" 
                            alt="Graduation" 
                            className="img-fluid"
                            width={500} 
                            height={700} 
                            layout="responsive"
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.trd_box}>
                        <h4>Prof. (Dr). Parvinder Singh <label>Vice Chancellor</label></h4>
                        <h3>“The innovations we do together, make a difference in the society”</h3>
                        <p>At Rayat Bahra University, we believe that collective innovation drives societal change...</p>
                        <Link className={styles.btm_read} href='/'>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
