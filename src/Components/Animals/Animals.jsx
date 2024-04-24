import { Link, useLocation } from "react-router-dom";
import { useAnimals } from "../../Context/AnimalsContext"
import styles from './Animals.module.css'
import { useEffect, useState } from "react"

function Animals() {
  const { animals, isLoading, error } = useAnimals()

  // const location = useLocation()
  // const queryParams = new URLSearchParams(location.search);
  // const defaultCategory = queryParams.get('category');
  console.log(animals); //!aici imi randeaza de 10-12 ori 

  const [sortedAnimals, setSortedAnimals] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("category");
  const [selectedRegion, setSelectedRegion] = useState("region");
  const [change, setChange] = useState(true);

  const [animalsPerPage, setAnimalsPerPage] = useState(6)
  let animalsClone = [...animals]
  const displayedAnimals = animalsClone.splice(0, animalsPerPage);

  useEffect(() => {
    setSortedAnimals(animals);
  }, [animals]);

 
  function handleCategory(e) {
    let category = e.target.value
    setSelectedCategory(category);
    setSelectedRegion("region");
    setChange(false)
    if (category === 'category') {
      setSortedAnimals(animals);
    } else {
      setSortedAnimals(animals.filter(animal => animal.class === category))
    }
  }

  function handleRegion(e) {
    let region = e.target.value
    setSelectedRegion(region);
    setSelectedCategory("category");
    setChange(false)

    if (region === 'region') {
      setSortedAnimals(animals);
    } else {
      setSortedAnimals(animals.filter(animal => animal.region === region))
    }
  }

  const hideLoadButton = animalsPerPage >= animals.length 
  function loadMoreAnimals() {
    setAnimalsPerPage(pre => pre + 6);
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 100)
  }

  return (
    <div className={styles['container']}>
      <h1>ANIMALS</h1>
      <div className={styles['select-div']}>
        <select name="category" id="" onChange={handleCategory} value={selectedCategory} >
          <option value="category">Category</option>
          <option value="reptiles">Reptiles</option>
          <option value="mammals">Mammals</option>
          <option value="arthropods">Arthropods</option>
          <option value="birds">Birds</option>
          <option value="fish">Fish</option>
          <option value="amphibians">Amphibians</option>
        </select>

        <select name="region" id="" onChange={handleRegion} value={selectedRegion}>
          <option value="region">Region</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Australia">Australia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North america</option>
          <option value="Ocean">Ocean</option>
          <option value="Rivers">Rivers</option>
          <option value="South America">South america</option>
          <option value="Various continents">Various continents</option>
        </select>
      </div>

      {change && <div className={styles['animals-container']}>
        {displayedAnimals.map((animal, i) => (
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
      </div>}
      {change && !hideLoadButton &&
        <div className={styles['load-more-div']}><button onClick={loadMoreAnimals} >Load More</button></div>
      }
      {!change && <div className={styles['animals-container']}>
        {sortedAnimals.map((animal, i) => (
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
      </div>}
    </div>
  )
}

export default Animals
