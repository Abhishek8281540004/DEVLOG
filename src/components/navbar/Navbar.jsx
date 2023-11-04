

import React from 'react';
import styles from "./navbar.module.css"
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src={"/1.png"} alt='facebook' width={24} height={24}/>
        <Image src={"/2.png"} alt='instagram' width={24} height={24}/>
        <Image src={"/3.png"} alt='twiter' width={24} height={24}/>
        <Image src={"/4.png"} alt='youtube' width={24} height={24}/>
      </div>
      <div className={styles.logo}>DEVLOG</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href={"/"} className={styles.link}>Homepage</Link>
        <Link href={"/"} className={styles.link}>Contact</Link>
        <Link href={"/"} className={styles.link}>About</Link>
        <AuthLinks/>
      </div>
    </div>
      
    
  );
}

export default Navbar;
