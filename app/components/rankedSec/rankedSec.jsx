import styles from './rankedSec.module.css';

export const RankedSec = () => {
  return (
    <section className={`container text-center ${styles.rankedSec}`}>
      <div className="d-flex align-items-center justify-content-center mb-4">
        <h2 className={`${styles.topHeading} mb-0`}>2</h2>
        <h2 className={`${styles.subHeading} mb-0`}>nd Ranked</h2>
      </div>
      <div className={`${styles.blueBgHeading} mb-4`}>
        <h3 className={`${styles.weekHeading} mb-0`}>The Week</h3>
      </div>
      <p className={styles.description}>
        Top Prominent College in India. Listed by CSR-GHRDC Engineering College Survey
      </p>

      <div className="card border-0 shadow-sm mt-4">
        <div className={`${styles.cardContent} p-4`}>
          <h3 className={`${styles.cardHeading} mb-3`}>Accredited and Recognized</h3>
          <p className={`${styles.cardText}`}>Award-winning campus, high-quality education, and global recognition.</p>
        </div>
      </div>
    </section>
  );
};
