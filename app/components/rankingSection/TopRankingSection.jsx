import styles from './TopRanking.module.css';

const TopRankingsSection = () => {
  return (
    <section className={`container text-center ${styles.topRankingsSection}`}>
      <div className="mb-4">
        <img
          src="../../../public/starpng.png"
          alt="Stars"
          className={`${styles.starsImage}`}
        />
      </div>
      <h2 className={styles.heading}>Top Rankings</h2>
      <div className="row mt-5 justify-content-center">
        <div className="col-md-3 mb-4">
          <div className={`${styles.card} shadow-sm`}>
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/THE_WEEK_logoRS-1.png"
              alt="Ranking 1"
              className={`${styles.imgOne} w-100 shadow-1-strong rounded`}
            />
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.card} shadow-sm`}>
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/siliconindia-logo-vector-1.png"
              alt="Ranking 2"
              className={`${styles.img} w-100 shadow-1-strong rounded`}
            />
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.card} shadow-sm`}>
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/logo-Black-1-1.png"
              alt="Ranking 3"
              className={`${styles.img} w-100 shadow-1-strong rounded`}
            />
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.card} shadow-sm`}>
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/11/rank_4-1.png"
              alt="Ranking 4"
              className={`${styles.img} w-100 shadow-1-strong rounded`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRankingsSection;
