
import React from 'react';
import styles from "./footer.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
     <div className={styles.info}>
      <div className={styles.logo}>
        <Image src={"/moon.png"}  alt="logo" width={50} height={50}/>
        <h1 className={styles.logoText}>DevBlog</h1>
      </div>
      <p className={styles.desc}> gfhgfyyg gdvgvgdvhgcdv dgvcdhvdvc dhbcdubhc dhcbdghvcte edtswnsgsi jdngwgsjlo fdvfv jhv  idf hd ctye dcgb mcms</p>
      <div className={styles.icons}>
        <Image src={"/1.png"} alt='facebook' width={18} height={18} />
        <Image src={"/2.png"} alt='instagram' width={18} height={18} />
        <Image src={"/3.png"} alt='twiter' width={18} height={18} />
        <Image src={"/4.png"} alt='youtube' width={18} height={18} />
      </div>
     </div>
     <div className={styles.links}>
      <div className={styles.list}>
        <span className={styles.listTitle}>Links</span>
        <Link href={"/"}>Homepage</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Tags</span>
        <Link href={"/"}>Styles</Link>
        <Link href={"/"}>Fashion</Link>
        <Link href={"/"}>Coding</Link>
        <Link href={"/"}>Travel</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Social</span>
        <Link href={"/"}>Facebook</Link>
        <Link href={"/"}>Instagram</Link>
        <Link href={"/"}>Tiktok</Link>
        <Link href={"/"}>Youtube</Link>
      </div>
     </div>
    </div>
      
    
  );
}

export default Footer;
