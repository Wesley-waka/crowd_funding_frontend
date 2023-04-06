import React, { useEffect, useState } from 'react'
import logo from '../images/pu_logo.png'
import styles from "./NavBar.module.css"
import { Link, NavLink } from 'react-router-dom'




function NavBar({user}) {
  const links = [
    {name: "Home", link:"/home"},
    {name: "Campaigns", link:"/campaigns"},
    {name: "About", link:"/about"}
  ]

  // displaying black background on scrolling down
  const [blackBG, setBlackBG] = useState(false)

  function changeNavBackground(){
    window.scrollY>100 ? setBlackBG(true) : setBlackBG(false);
  }

  useEffect(()=>{
    window.addEventListener('scroll', changeNavBackground);
    return ()=> window.removeEventListener('scroll',changeNavBackground)//cleanup
  },[])

  function handleClick() {
    fetch("/logout", {
      method: "DELETE"
    }).then((r)=>{
      if (r.ok) {
        window.location.reload()
      }
    })
    
 }

  

  

  return (
    <div className={`${styles.nav} ${blackBG && `${styles.nav_black}`}`}>
      <div className={styles.mainNav}>
        <img className={styles.logo} src={logo} alt="Pledge Up Logo"/> <span style={{color: 'gold', fontSize: '15px'}}>Pledge Up</span>      
        <ul className={styles.navItems}>
        {
            links.map((link)=>{
              return(<li key={link.name}>
                <NavLink className={styles.Link} to={link.link}>{link.name}</NavLink>
              </li>)
            })
          }
        </ul> 
      </div>
      
      {user.loggedin === true ?(<>
        <h4 style={{
          color: 'gold',
          fontFamily: "Fredoka, sans-serif",
          marginLeft: "490px"
      }}> Welcome, {user.user.username}</h4>
      <button className={styles.home_button} onClick={handleClick}>
      <Link to='/home' style={{textDecoration: 'none',color: 'black'}}><span>Log out</span></Link>
      </button> </>) : (<button className={styles.home_button}>
        <Link to='/login' style={{textDecoration: 'none',color: 'blue'}}><span>Log in</span></Link>
      </button>)}
    </div>
  )
}

export default NavBar