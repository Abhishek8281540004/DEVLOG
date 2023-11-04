import Image from 'next/image'
import styles from './writePage.module.css'
import { useState } from 'react'


const WritePage = () => {
  const[open,setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <input placeholder='Title' type='text'/>
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image  src={"/plus.png"} alt='bla' width={16} height={16}/>
        </button>
        {open && (
          <div className={styles.add}>
           <button className={styles.addButton}>
           <Image  src={"/image.png"} alt='bla' width={16} height={16}/>
         </button>
          <button className={styles.addButton}>
          <Image  src={"/external.png"} alt='bla' width={16} height={16}/>
        </button>
         <button className={styles.addButton}>
         <Image  src={"/video.png"} alt='bla' width={16} height={16}/>
       </button>
       </div>
        )}
      </div>
    </div>
  )
}

export default WritePage
