import { Link } from "react-router-dom"
import { useAnimals } from "../../Context/AnimalsContext"
import styles from './Habitats.module.css';
import AFRICA from '../../Assets/Habitats/africa.jpg'
import ASIA from '../../Assets/Habitats/asia.jpg';
import ANTARCTICA from '../../Assets/Habitats/antarctica.jpg';
import AUSTRALIA from '../../Assets/Habitats/australia.jpg';
import EUROPE from '../../Assets/Habitats/europe.jpg';
import NORTH_AMERICA from '../../Assets/Habitats/north america.jpg';
import OCEAN from '../../Assets/Habitats/ocean.jpg';
import RIVERS from '../../Assets/Habitats/rivers.jpg';
import SOUTH_AMERICA from '../../Assets/Habitats/south america.jpg';
import VARIOUS_CONTINENTS from '../../Assets/Habitats/various continents.jpg';



const regionImages = {
  'AFRICA': AFRICA,
  'ASIA': ASIA,
  'ANTARCTICA': ANTARCTICA,
  'AUSTRALIA': AUSTRALIA,
  'EUROPE': EUROPE,
  'NORTH AMERICA': NORTH_AMERICA,
  'OCEAN': OCEAN,
  'RIVERS': RIVERS,
  'SOUTH AMERICA': SOUTH_AMERICA,
  'VARIOUS CONTINENTS': VARIOUS_CONTINENTS
  // Map other regions to their respective image paths...
};

function Habitats() {
  const { animals, isLoading, error, alClasses, regions,fetchRegions } = useAnimals()
  

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['titles']}>
          <h1>Habitats</h1>
          <h2>A habitat is an ecological or environmental area that is inhabited by a particular species of animal, plant, or other type of organism</h2>
          <p>The term typically refers to the zone in which the organism lives and where it can find food, shelter, protection and mates for reproduction, utilizing the qualities the species has adapted to survive within the ecology of the habitat. It is the natural environment in which an organism lives, or the physical environment that surrounds a wildlife population.</p>
          <h3>
            <span className={styles['animated-arrow']}>⏬</span> Learn more about habitat conservation <span className={styles['animated-arrow']}>⏬</span>
          </h3>
        </div>
      </div>
      <div className={styles['container2']}>
        {regions.map((region, i) => (
          <div key={i} className={styles['region']}>
            <div className={styles['image-div']}>
              <img src={regionImages[region._id]} alt={region._id} />
            </div>
            <Link key={region._id} to={`/habitats/${region._id}`}><p >{region._id}</p></Link>
          </div>
        ))}
      </div>

    </>
  )
}

export default Habitats
