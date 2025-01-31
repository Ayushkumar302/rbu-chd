import Image from 'next/image';
import styles from './TopRanking.module.css';

const TopRankingsSection = () => {
  return (
    <section className={`container text-center ${styles.topRankingsSection}`}>
      <div className="mb-1">
        <Image
          src="/starpng.png"
          width={200}
          height={300}
          alt="Stars"
          className={`${styles.starsImage}`}
        />
      </div>
      <h2 className={styles.heading}>Top Rankings</h2>
      <div className="row mt-1 justify-content-center">
        <div className="col-md-3 mb-4">
          <div className={`${styles.card} shadow-sm`}>
            <Image
              src="/Top_ranking_1.png"
              alt="Ranking 1"
              className={`${styles.imgOne} shadow-1-strong rounded`}
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.card} shadow-sm`}>
            <Image
              src="/Top_ranking_2.png"
              alt="Ranking 2"
              className={`${styles.img} shadow-1-strong rounded`}
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.card} shadow-sm`}>
            <Image
              src="/Top_ranking_3.png"
              alt="Ranking 3"
              className={`${styles.img} shadow-1-strong rounded`}
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.card} shadow-sm`}>
            <Image
              src="/Top_ranking_4.png"
              alt="Ranking 4"
              className={`${styles.img} shadow-1-strong rounded`}
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRankingsSection;
