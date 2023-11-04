import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"

const Card = () => {
  return (
    <div className={styles.container}>
       <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt='' width={450} height={380} className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.dates}>11.02.2023 - </span>
                <span className={styles.category}>Culture</span>
            </div>
            <Link href={"/"}>
            <h1>ftfsw gdgdgt uywdbxc nhxhsvxgs dwsdew </h1>
            </Link>
            <p className={styles.desc}>hgscvxhgsxcus jgxvugtsvx hgxvs xxyhvsx shxg xhjtx qjqwhxbhgmnh hghh dfgg  sjxx ytxvx </p>
            <Link href={"/"} className={styles.link}>Read More</Link>
          </div>
    </div>
  )
}

export default Card
