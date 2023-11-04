

import React from 'react';
import styles from "./featured.module.css"
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, Abhishek here! </b>Discover my stories and creative idea</h1>
     <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image src={"/p1.jpeg"} alt='img' height={500} width={600} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.postTitle}>gvxv jxsxgh vxgxvwg sgsvxgvxgxv uhdweyu </h1>
        <p  className={styles.postDesc}>hjxbsjxb hyxveuew kvbxgyvxieqw hbxixbixwe bxisxbxi vbgds bdhy gvvgecd gheeghxj jhvjwgex jcguje ujcb dcgbu jnb c j dehfgrfgfrvb</p>
        <button className={styles.button}>Read More</button>
      </div>
      </div>
    </div>
    
  );
}

export default Featured;
