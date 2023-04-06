import React from 'react'
import styles from './SocialLinks.module.css'

function SocialLinks() {
  return (
    <div className={styles.socials}>
       <span>
        <a href="/"><i className="big icon facebook" /></a>
      </span>
      <span>    
        <a href="/"><i className="big icon instagram" /></a>
      </span>
      <span>    
        <a href="/"><i className="big icon youtube" /></a>
      </span>      
    </div>
  )
}

export default SocialLinks
