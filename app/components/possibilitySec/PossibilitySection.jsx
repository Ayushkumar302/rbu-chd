import styles from './PossibilitySection.module.css';

const PossibilitySection = () => {
  return (
    <section className={`container-fluid ${styles.possibilitySection}`}>
      <div className="container text-center">
        <h2 className={styles.heading}>
          Endless Opportunities Across Diverse Disciplines
        </h2>
        <p className={styles.description}>
          Rayat Bahra University Punjab has been recognized by the UGC under sections 2(f) and 12 (B) of the UGC Act, 1956, and by other bodies of the State and the Nation. The University has also been accredited with the prestigious “A++ Grade”.
        </p>

        {/* Gallery Section */}
        <div className="row justify-content-center mt-5">
          {/* Column 1 */}
          <div className={`${styles.column1} col-md-4 col-lg-3 mb-3`}>
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/12/Mask-group-21.png"
              className={`${styles.squareImg} w-100 shadow-1-strong rounded mb-3`}
              alt="Boat on Calm Water"
            />
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/12/Mask-group-20.png"
              className={`${styles.verticalImg} w-100 shadow-1-strong rounded mb-3`}
              alt="Wintry Mountain Landscape"
            />
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/12/Mask-group-16-1.png"
              className={`${styles.horizontalImg} w-100 shadow-1-strong rounded mb-3`}
              alt="Mountains in the Clouds"
            />
          </div>

          {/* Column 2 */}
          <div className={`${styles.column2} col-md-4 col-lg-3 mb-3`}>
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/12/Mask-group-18.png"
              className={`${styles.verticalImg} w-100 shadow-1-strong rounded mb-3`}
              alt="Boat on Calm Water"
            />
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/12/Mask-group-24.png"
              className={`${styles.squareImg} w-100 shadow-1-strong rounded mb-3`}
              alt="Mountains in the Clouds"
            />
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/12/Mask-group-17.png"
              className={`${styles.horizontalImg} w-100 shadow-1-strong rounded mb-3`}
              alt="Mountains in the Clouds"
            />
            {/* <img
              src="https://rbuchd.in/wp-content/uploads/2024/12/Mask-group-23.png"
              className={`${styles.squareImg} w-100 shadow-1-strong rounded mb-3`}
              alt="Mountains in the Clouds"
            /> */}
          </div>

          {/* Column 3 */}
          <div className={`${styles.column3} col-md-4 col-lg-3 mb-3`}>
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/12/Mask-group-19.png"
              className={`${styles.squareImg} w-100 shadow-1-strong rounded mb-3`}
              alt="Waves at Sea"
            />
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/12/Mask-group-22.png"
              className={`${styles.verticalImg} w-100 shadow-1-strong rounded mb-3`}
              alt="Yosemite National Park"
            />
            <img
              src="https://rbuchd.in/wp-content/uploads/2024/12/Mask-group-25.png"
              className={`${styles.horizontalImg} w-100 shadow-1-strong rounded mb-3`}
              alt="Yosemite National Park"
            />
            {/* <img
              src="https://rbuchd.in/wp-content/uploads/2024/12/Mask-group-22.png"
              className={`${styles.verticalImg} w-100 shadow-1-strong rounded mb-3`}
              alt="Yosemite National Park"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PossibilitySection;
