import styles from './Footer.module.css'
import logo from '../../Assets/Logo.png'

function Footer() {
  return (
    <div className={styles['footer-container']}>
      <div className={styles['upper-div']}>
        <div className={styles['image-div']}>
          <img src={logo} alt="logo-pic" />
        </div>
        <div className={styles['titles-div']}>
          <h1>Z-Animals</h1>
          <h2>Wildlife Alliance</h2>
          <h3>Animals & Habitats</h3>
        </div>
      </div>
      <div className={styles['lower-div']}>
        <div>
          <p>© 2024 Z-Animals Zoo Wildlife Alliance</p>
        </div>
        <div className={styles['ul-div']} >
          <ul>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Term of Use</li>
            <li>State Disclosures</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
