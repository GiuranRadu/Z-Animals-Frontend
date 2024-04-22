import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useAnimals } from "../../../Context/AnimalsContext";
import Spinner from "../../../Handy/Spinner";
import styles from './Habitat.module.css'
import info from '../../../Handy/continentsInfo.js'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'



function Habitat() {
  const { id: continent } = useParams();

  const { getClass, currentClass, isLoading } = useAnimals()

  const [slide, setSlide] = useState(0)


  const animals = currentClass.animals
  console.log(currentClass);

  function handleSlide(direction) {


    if (direction === 'right') {
      if (slide >= 2) {
        setSlide(0)
      } else {
        setSlide(slide + 1)
      }
    }
    if (direction === 'left') {
      if (slide < 1) {
        setSlide(2)
      } else {
        setSlide(slide - 1)
      }
    }
  }

  useEffect(() => {
    getClass(continent)
  }, [getClass, continent])

  function test() {
    console.log('merge');
    console.log(info[`${currentClass._id.replace(/\s/g, "")}`]);
    console.log(currentClass._id.replace(/\s/g, ""));
  }

  if (!currentClass || !currentClass.animals) {
    return <Spinner />;
  }

  return (
    isLoading ? <Spinner /> : (
      <div className={styles['container']}>
        <div className={styles['photos-div']}>
          {/* <button onClick={test}>TEST</button> */}
          <div className={styles['carousel-container']}>

            <div className={styles['carousel']}>
              <BsArrowLeftCircleFill className={`${styles.arrow} ${styles['arrow-left']}`} onClick={() => handleSlide('left')} />
              {info[`${currentClass._id.replace(/\s/g, "")}`].images.map((image, i) =>
                <img
                  src={image}
                  key={i}
                  className={slide === i ? styles['slide'] : `${styles.slide} ${styles['slide-hidden']}`}
                />
              )}
              <BsArrowRightCircleFill className={`${styles.arrow} ${styles['arrow-right']}`} onClick={() => handleSlide('right')} />
            </div>
          </div>

          <div className={styles['description']}>
            {/* <button onClick={test}>TEST</button> */}
            <h1>{currentClass._id}</h1>
            <p>{info[`${currentClass._id.replace(/\s/g, "")}`].description}</p>
          </div>
        </div>


        <div className={styles['animals-container']}>
          {animals.map((animal, i) => (
            <Link key={animal._id} to={`/animals/${animal._id}`}>
              <div className={styles['animal-div']}>
                <div>
                  <h2> <span>{i + 1}.</span> {animal.name}</h2>
                </div>
                <div className={styles['image-div']}>
                  <img src={animal.images[0]} alt={animal.name} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  );

}

export default Habitat
