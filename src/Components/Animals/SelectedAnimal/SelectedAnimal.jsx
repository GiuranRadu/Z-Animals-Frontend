import { useParams } from "react-router";
import { useAnimals } from "../../../Context/AnimalsContext"
import { useEffect, useState } from "react";
import Spinner from "../../../Handy/Spinner";
import SpinnerFullPage from "../../../Handy/SpinnerFullPage";
import styles from './SelectedAnimal.module.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const MY_KEY = "5kCHcjfhCwX3QIF0Ptj0bw==Y6cmAzLoqHapwHhS"

function SelectedAnimal() {
  const { id } = useParams(); //preiau id din url
  const { selectedAnimal, getAnimal, isLoading } = useAnimals() //preiau din context
  const { animal } = selectedAnimal;
  const [slide, setSlide] = useState(0)
  const [loading, setLoading] = useState(0)

  const [moreAnimalInfo, setInfo] = useState('')
  const [optInfo, setOptInfo] = useState('')

  // console.log(selectedAnimal); //! aici imi randeaza de 10-12ori

  async function loadMore() {
    try {
      setLoading(1)
      const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animal.name}`, {
        headers: {
          'X-Api-Key': MY_KEY
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch animals');
      }
      const data = await response.json();
      setInfo(data);
      setLoading(0)

      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }, 100)

    } catch (error) {
      console.log('EROAREEEEE');
    }
  }

  function handleSlide(direction) {
    const maxIndex = selectedAnimal.animal.images.length - 1;

    if (direction === 'right') {
      if (slide >= maxIndex) {
        setSlide(0)
      } else {
        setSlide(slide + 1)
      }
    }
    if (direction === 'left') {
      if (slide < 1) {
        setSlide(maxIndex)
      } else {
        setSlide(slide - 1)
      }
    }
  }

  useEffect(() => {
    getAnimal(id)
  }, [getAnimal, id])


  useEffect(() => {
    if (moreAnimalInfo) {
      console.log(moreAnimalInfo.filter(animal => animal.name === selectedAnimal.animal.name));
      setOptInfo(moreAnimalInfo.filter(animal => animal.name === selectedAnimal.animal.name)[0])
    }
  }, [selectedAnimal, moreAnimalInfo]);



  if (!animal) {
    return <SpinnerFullPage />;
  }

  return (
    loading ? <SpinnerFullPage /> :
      (<div className={styles['container']}>
        <div className={styles['first-container']}>
         
          <div className={styles['f-c-left']}>
            {/* //* CAROUSEL */}
            <div className={styles['carousel']}>
              <BsArrowLeftCircleFill className={`${styles.arrow} ${styles['arrow-left']}`} onClick={() => handleSlide('left')} />
              {animal.images.map((image, i) => (
                <img
                  src={image}
                  key={i}
                  className={slide === i ? styles.slide : `${styles.slide} ${styles['slide-hidden']}`}
                />
              ))}
              <BsArrowRightCircleFill className={`${styles.arrow} ${styles['arrow-right']}`} onClick={() => handleSlide('right')} />
            </div>
            {/* //* CAROUSEL */}
          </div>

          <div className={styles['f-c-right']}>
            <h1>{animal.name}</h1>
            <div>
              <p>Region : {animal.region}</p>
              <p>Weight : {animal.weight} kg</p>
              <p>Similar: {animal.similarSpecies.map((specie, i) => <span key={i}>{specie}</span>)}</p>
            </div>
            <button onClick={loadMore}>Load More Info from external API</button>
          </div>

        </div>

        {/* //! optional info from Animals API , after pressing the button*/}
        {optInfo &&
          <div className={styles['second-container']}>
            <div className={styles['classification-div']}>
              <h1>Classification</h1>
              {optInfo.taxonomy.class && <p>Class: <span>{optInfo.taxonomy.class}</span> </p>}
              {optInfo.taxonomy.family && <p>Family: <span>{optInfo.taxonomy.family}</span> </p>}
              {optInfo.taxonomy.kingdom && <p>Kingdom: <span>{optInfo.taxonomy.kingdom}</span> </p>}
              {optInfo.taxonomy.order && <p>Order: <span>{optInfo.taxonomy.order}</span> </p>}
              {optInfo.taxonomy.phylum && <p>Phylum: <span>{optInfo.taxonomy.phylum}</span> </p>}
              {optInfo.taxonomy.scientific_name && <p>Scientific Name: <span>{optInfo.taxonomy.scientific_name}</span> </p>}
            </div>

            <div className={styles['info-div']}>
              <h1>Info</h1>
              {optInfo.characteristics.diet && <p>Diet: <span> {optInfo.characteristics.diet}</span> </p>}
              {optInfo.characteristics.lifestyle && <p>Lifestyle: <span>{optInfo.characteristics.lifestyle}</span> </p>}
              {optInfo.characteristics.habitat && <p>Habitat: <span>{optInfo.characteristics.habitat}</span> </p>}
              {optInfo.characteristics.favorite_food && <p>Favorite food: <span>{optInfo.characteristics.favorite_food}</span> </p>}
              {optInfo.characteristics.biggest_threat && <p>Biggest threat: <span>{optInfo.characteristics.biggest_threat}</span> </p>}
              {optInfo.characteristics.prey && <p>Prey: <span>{optInfo.characteristics.prey}</span> </p>}
              {optInfo.characteristics.estimated_population_size && <p>Est Pop: <span>{optInfo.characteristics.estimated_population_size}</span> </p>}
              {optInfo.characteristics.weight && <p>Weight: <span> {optInfo.characteristics.weight}</span></p>}
              {optInfo.characteristics.predators && <p>Predators: <span>{optInfo.characteristics.predators}</span> </p>}
              {optInfo.characteristics.top_speed && <p>Top speed : <span>{optInfo.characteristics.top_speed}</span> </p>}

            </div>
          </div>}

      </div>)
  )
}

export default SelectedAnimal
