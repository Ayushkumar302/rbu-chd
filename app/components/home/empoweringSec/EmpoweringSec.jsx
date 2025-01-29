import styles from './EmpoweringSec.module.css'

const EmpoweringSec = () => {
  return (
    <section className={styles.student_friendly}>
        <div className="container">
            <div className={styles.heading}>
                <h3>
                    Empowering Students, Enriching Futures </h3>
                <p className={styles.subtext}>At Rayat Bahra University, we empower students with the knowledge, skills, and opportunities they need to succeed, shaping bright futures and leaders for tomorrow.</p>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <div className={styles.friendly_box}>
                        <div className={styles.pris}>
                            500 </div>
                        <h4>
                            fortune global </h4>
                        <p>Plethora of Global Fortune MNC’s awaiting you</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className={styles.friendly_box}>
                        <div className={styles.pris}>
                            500 </div>
                        <h4>
                            Fortune India </h4>
                        <p>Plethora of Global Fortune MNC&#8217;s awaiting you</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className={styles.friendly_box}>
                        <div className={styles.pris}>
                            1.7Cr </div>
                        <h4>
                            Placements </h4>
                        <p>Plethora of Global Fortune MNC&#8217;s awaiting you</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className={styles.friendly_box}>
                        <div className={styles.pris}>
                            146 </div>
                        <h4>
                            Startups </h4>
                        <p>Plethora of Global Fortune MNC&#8217;s awaiting you</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className={styles.friendly_box}>
                        <div className={styles.pris}>
                            139 </div>
                        <h4>
                            Walt <br /> Disney </h4>
                        <p>Plethora of Global Fortune MNC&#8217;s awaiting you</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className={styles.friendly_box}>
                        <div className={styles.pris}>
                            2400+ </div>
                        <h4>
                            Patents </h4>
                        <p>Plethora of Global Fortune MNC&#8217;s awaiting you</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default EmpoweringSec
