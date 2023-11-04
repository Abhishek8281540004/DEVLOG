import Menu from '@/components/Menu/Menu'
import styles from './SinglePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>yfgc cvgvuc ccgvcuy cewtgfweubno9</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
            <Image src={"/p1.jpeg"} alt='bla' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>john doe</span>
              <span className={styles.userDate}>12.07.2003</span>
            </div>
          </div>

        </div>
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt='bla' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
          <p>ududvbudvbu dgvyvye edvbyvyvdy ddyevyyyyd dbdbd dghgbd bdbgd </p>
          <h2>tety dgsuy yvuysx </h2>
          <p>ududvbudvbu dgvyvye edvbyvyvdy ddyevyyyyd dbdbd dghgbd bdbgd </p>
          <p>ududvbudvbu dgvyvye edvbyvyvdy ddyevyyyyd dbdbd dghgbd bdbgd </p>
          <p>ududvbudvbu dgvyvye edvbyvyvdy ddyevyyyyd dbdbd dghgbd bdbgd </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default SinglePage
