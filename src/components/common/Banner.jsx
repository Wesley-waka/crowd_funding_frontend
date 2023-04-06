import React from 'react'
import billboardHeroImage from '../images/crowd_funding image.avif'
import styles from './Banner.module.css'


function Banner() {
  return (
    <div className={styles.billboard}>
        <div className={styles.innerContainer}>
            <div className={styles.imageWrapper}>
                <img className={styles.heroImage} src={billboardHeroImage}  alt="Child smiling" />
                <div className={styles.billboard__fadeBottom}/>
            </div>
            <div className={styles.info}>
                <div className={styles.description}> 
                    <h1 style={{fontSize: '100px'}}>CROWD FUNDING</h1>                  
                    <h2 style={{fontWeight: 'bolder'}}>
                        Raising Money for a <span style={{color: "gold"}}>Better World!</span>
                    </h2>                
                </div>
            </div>

        </div>
    </div>
  )
}

export default Banner