import styles from './NavBar.module.css'
import logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useAnimals } from '../../Context/AnimalsContext';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";



function NavBar() {

  const { animals } = useAnimals()

  const [query, setQuery] = useState(null)

  const [foundAnimals, setFoundAnimals] = useState([])

  const [showNav, setShowNav] = useState(false)


  function handleSearch(value) {
    if (value.length >= 1) {
      const foundAnimals2 = animals.filter(animal => animal.name.toLowerCase().includes(value.toLowerCase()));

      setQuery(foundAnimals)
      setFoundAnimals(foundAnimals2)

    } else {
      setQuery(null); // Reset query when the search query is less than 3 characters
    }
  }

  function resetValues() {
    let myInput = document.querySelector('.my-input')
    myInput.value = '';
    setQuery('')
  }

  function handleSideBar() {
    console.log('MERGE');
    setShowNav(true)
  }



  return (
    <div className={styles.navBar}>
      <div className={showNav ? `${styles['sideNavbar']}` : `${styles['sideNavbar']} ${styles['retracted']}`} onClick={() => setShowNav(false)}>
        <span onClick={() => setShowNav(false)}><IoIosCloseCircle />
        </span>
        <ul>
          <li><Link to='/animals' onClick={resetValues}>Animals</Link ></li>
          <li><Link to='/habitats' onClick={resetValues}>Habitats</Link></li>
          <li><Link to='/regnList' onClick={resetValues}>Regnum</Link></li>
        </ul>
      </div>
      <div className={styles['left-div']}>
        <div className={styles['hamburger-menu-div']}>
          <span>
            <GiHamburgerMenu onClick={() => handleSideBar()} />
          </span>
        </div>
        <div>
          <Link to='/'>  <img src={logo} alt="Logo" onClick={resetValues} /></Link>
        </div>
        <ul>
          <li><Link to='/animals' onClick={resetValues}>Animals</Link ></li>
          <li><Link to='/habitats' onClick={resetValues}>Habitats</Link></li>
          <li><Link to='/regnList' onClick={resetValues}>Regnum</Link></li>
        </ul>
      </div>

      <div className={styles['input-div']}>
        <input type="search" placeholder='Search...' className='my-input' onChange={(e) => handleSearch(e.target.value)} />
        {query?.length > 0 &&
          <div className={styles['found-animals-div']}>
            {foundAnimals.map((el, i) =>
              <Link to={`/animals/${el._id}`} key={i} onClick={resetValues}>
                <div>
                  <p>{el.name}</p>
                  <img src={el.images[0]} alt="" />
                </div>
              </Link>
            )}
          </div>
        }
        {query && foundAnimals.length === 0 && <div className={styles['found-animals-div']}>
          <div>
            <p>Nothing found...</p>
          </div>

        </div>}



      </div>

    </div>
  )
}

export default NavBar
