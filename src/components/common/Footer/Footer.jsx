import React from 'react';
import styles from './Footer.module.css';
import SiteLinks from './SiteLinks'
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer>
      <div>
        <SocialLinks/>
      </div>
      <div>
        <SiteLinks/>
        
      </div>
      <div className={styles.service}>
        <button className="btn btn-outline-secondary"> Service Code </button>
      </div>
      <div>
        <i className="icon copyright" />
        1997-2023 PledgeUp, Inc.
      </div>
    
    </footer>
  )
}

export default Footer