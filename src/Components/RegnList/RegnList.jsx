import { useState } from 'react';
import { useAnimals } from '../../Context/AnimalsContext'
import styles from './RegnList.module.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowCircleLeft } from "react-icons/fa";

import reptiles_skin from '../../Assets/skins/reptiles-skin.jpg'
import mammals_skin from '../../Assets/skins/mammals-skin.jpg'
import arthropods_skin from '../../Assets/skins/arthropods-skin.jpg'
import birds_skin from '../../Assets/skins/birds-skin.jpg'
import fish_skin from '../../Assets/skins/fish-skin.jpg'
import amphibians_skin from '../../Assets/skins/amphibians-skin.jpg'
import info from '../../Handy/regnumsInfo'

const bgImgs = {
  "REPTILES": reptiles_skin,
  "MAMMALS": mammals_skin,
  "ARTHROPODS": arthropods_skin,
  "BIRDS": birds_skin,
  "FISH": fish_skin,
  "AMPHIBIANS": amphibians_skin
}

function RegnList() {
  const { alClasses } = useAnimals()
  // console.log(alClasses);

  let imgArray = [[reptiles_skin, "Reptiles"], [mammals_skin, 'Mammals'], [arthropods_skin, "Arthropods"], [birds_skin, 'Birds'], [fish_skin, "Fish"], [amphibians_skin, "Amphibians"]]


  const [show, setShowNav] = useState(false)
  const [regn, setRegn] = useState(null)

  function showNav() {
    setShowNav(true)
  }

  function hideNav() {
    setShowNav(false)
  }

  function selectRegn(el) {
    setShowNav(false)
    let x = alClasses.find(regn => regn._id.toLowerCase() === el.toLowerCase())
    setRegn(x)
  }


  return (
    <div className={styles['container']}>
      <div className={show ? `${styles['sideNavbar']}` : `${styles['sideNavbar']} ${styles['retracted']}`} onMouseEnter={showNav} onMouseLeave={hideNav}>
        <div className={styles.list}>
          {imgArray.map((img, i) =>
            <div className={styles.list_div} key={i}>
              <img src={img[0]} alt="" />
              <h1 onClick={() => selectRegn(img[1])}>{img[1]}</h1>
            </div>
          )}
        </div>
        <button >
          {show ?
            <IoIosArrowBack className={`${styles.arrow} ${styles['arrow-left']}`} onClick={()=>hideNav() }/> :
            <IoIosArrowForward className={`${styles.arrow} ${styles['arrow-right']}`} />}
        </button>
      </div>
      {!regn &&
        <div className={styles.mainBody}>
          <div className={styles.landingPage}>
            <h1>Animal Kingdom</h1>
            <ul>
              <li><p>Animals are classified into different groups based on their characteristics, evolutionary relationships, and other factors. These classifications help scientists understand the diversity of life on Earth and how different species are related to each other.</p></li>
              <li> <p>Traditionally, animals have been classified into several major groups called "kingdoms" or "regna." The most commonly recognized animal kingdom classification system is based on five main groups, often referred to as "kingdoms":
              </p></li>
            </ul>
            <button onClick={() => setShowNav(!show)}><FaArrowCircleLeft className={styles.arrowLeft} /> Check more info about each Animal Kingdom </button>
          </div>

        </div>
      }
      {regn &&
        <div className={styles.mainBody} style={{ backgroundImage: `url(${bgImgs[regn._id]})` }}>
          <div className={styles.landingPage}>
            <h1>{regn._id}</h1>
            <ul><li>
              <p>Description {info[`${regn._id}`].description}</p>

            </li></ul>
            <button onClick={() => setShowNav(!show)}><FaArrowCircleLeft className={styles.arrowLeft} /> Check more info about each Animal Kingdom </button>
          </div>
        </div>}
    </div>
  )
}

export default RegnList
