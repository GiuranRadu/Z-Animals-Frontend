import styles from './AppLayout.module.css'
import { useAnimals } from '../../Context/AnimalsContext'
import { Link } from 'react-router-dom';
import reptile_pic from '../../Assets/reptiles-hero.jpg'
import mammals_pic from '../../Assets/mammals-hero.jpg'
import arthropods_pic from '../../Assets/arthropods-hero.jpg'
import birds_pic from '../../Assets/birds-hero.jpg'
import fish_pic from '../../Assets/fish-hero.jpg'
import amphibians_pic from '../../Assets/amphibians-hero.jpg'

function AppLayout() {

  const { animals, isLoading, error, alClasses, regions } = useAnimals()
  // console.log(alClasses);

  return (
    <div className={styles.container}>
      <div className={styles.upperContainer}>
        <div>
          <h2>TODAY SPOTLIGHT ON</h2>
          <h1>Kangaroo & Wallaby</h1>
          <Link to={'/animals/66023cca76d9052246a111fb'}> <button>Learn More</button></Link>
        </div>
      </div>

      <div className={styles.secondContainer}>
        <div>
          <img src={reptile_pic} alt="" />
          {/* <Link to={'/animals?category=reptiles'}> */}
          <Link to={'/animals'}>
            <h1>Reptiles</h1>
          </Link>
        </div>
        <div>
          <img src={mammals_pic} alt="" />
          <Link to={'/animals'}>

            <h1>Mammals</h1>
          </Link>

        </div>
        <div>
          <img src={arthropods_pic} alt="" />
          <Link to={'/animals'}>
            <h1>Arthropods</h1>
          </Link>
        </div>
        <div>
          <img src={birds_pic} alt="" />
          <Link to={'/animals'}>
            <h1>Birds</h1>
          </Link>
        </div>
        <div>
          <img src={fish_pic} alt="" />
          <Link to={'/animals'}>
            <h1>Fish</h1>
          </Link>
        </div>
        <div>
          <img src={amphibians_pic} alt="" />
          <Link to={'/animals'}>
            <h1>Amphibians</h1>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default AppLayout
