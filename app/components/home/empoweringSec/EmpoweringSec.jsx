import styles from './EmpoweringSec.module.css'

const EmpoweringSec = () => {
  return (
    <div className={`${styles.empoweringSec}`}>
      <h1>Empowering Students, Enriching Futures</h1>
      <p>At Rayat Bahra University, we empower students with the knowledge, skills, and opportunities they need to succeed, shaping bright futures and leaders for tomorrow.</p>
      
      <div className={`${styles.cardContainer} row`}>
        <div className={`${styles.cardCustom} col-md-4`}>
          <div className={`${styles.cardHeader}`}>
            500
          </div>
          <div className={`${styles.cardContent}`}>
            <h5>Fortune Global</h5>
            <p>Plethora of Global Fortune MNC’s awaiting you</p>
          </div>
        </div>
        
        <div className={`${styles.cardCustom} col-md-4`}>
          <div className={`${styles.cardHeader}`}>
            500
          </div>
          <div className={`${styles.cardContent}`}>
            <h5>Fortune India</h5>
            <p>Plethora of Global Fortune MNC’s awaiting you</p>
          </div>
        </div>
        
        <div className={`${styles.cardCustom} col-md-4`}>
          <div className={`${styles.cardHeader}`}>
          1.7Cr
          </div>
          <div className={`${styles.cardContent}`}>
            <h5>Placements</h5>
            <p>Plethora of Global Fortune MNC’s awaiting you</p>
          </div>
        </div>
        
        <div className={`${styles.cardCustom} col-md-4`}>
          <div className={`${styles.cardHeader}`}>
          146
          </div>
          <div className={`${styles.cardContent}`}>
            <h5>Startups</h5>
            <p>Plethora of Global Fortune MNC’s awaiting you</p>
          </div>
        </div>
        
        <div className={`${styles.cardCustom} col-md-4`}>
          <div className={`${styles.cardHeader}`}>
          139
          </div>
          <div className={`${styles.cardContent}`}>
            <h5>Walt
            Disney</h5>
            <p>Plethora of Global Fortune MNC’s awaiting you</p>
          </div>
        </div>
        
        <div className={`${styles.cardCustom} col-md-4`}>
          <div className={`${styles.cardHeader}`}>
          2400+
          </div>
          <div className={`${styles.cardContent}`}>
            <h5>Patents</h5>
            <p>Plethora of Global Fortune MNC’s awaiting you</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpoweringSec
