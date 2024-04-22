import { createContext, useCallback, useContext, useEffect, useReducer } from "react";

// const BASE_URL = 'http://localhost:3000'
const BASE_URL = 'https://z-animals-backend.onrender.com'

const AnimalsContext = createContext()

const initialState = {
  animals: [],
  isLoading: false,
  error: '',
  alClasses: [],
  currentClass: [],
  regions: [],
  selectedAnimal: []
}

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true }

    case 'animals/loaded': {
      return {
        ...state,
        isLoading: false,
        animals: action.payload,
      }
    }

    case 'selectedAnimal/loaded': {
      return {
        ...state,
        isLoading: false,
        selectedAnimal: action.payload,
      }
    }

    case 'classes/loaded': {
      return {
        ...state,
        isLoading: false,
        alClasses: action.payload
      }
    }

    case 'class/loaded': {
      return {
        ...state,
        isLoading: false,
        currentClass: action.payload
      }
    }

    case 'regions/loaded': {
      return {
        ...state,
        isLoading: false,
        regions: action.payload
      }
    }

    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    default:
      throw new Error('Unknown action')
  }
}

function AnimalsProvider({ children }) {
  const [{ animals, isLoading, error, alClasses, regions, currentClass, selectedAnimal }, dispatch] = useReducer(reducer, initialState)

  //* GET ANIMALS
  useEffect(() => {
    async function fetchAnimals() {
      dispatch({ type: 'loading' })
      try {
        const res = await fetch(`${BASE_URL}/animals`)
        const data = await res.json()
        dispatch({ type: 'animals/loaded', payload: data.animals })
      } catch (error) {
        dispatch({
          type: 'rejected',
          payload: 'There was an error fetching animals...'
        })
      }
    }

    fetchAnimals(); //! Call the fetchAnimals function
  }, []); //! Add an empty dependency array to ensure it only runs once


  //* GET CLASSES
  useEffect(() => {
    async function fetchClasses() {
      dispatch({ type: 'loading' })
      try {
        const res = await fetch(`${BASE_URL}/sortAnimals/classes`)
        const data = await res.json()
        dispatch({ type: 'classes/loaded', payload: data.classes })
      } catch (error) {
        dispatch({
          type: 'rejected',
          payload: 'There was an error fetching animals...'
        })
      }
    }
    fetchClasses()
  }, [])


  //* GET SPECIFIC CLASS
  const getClass = useCallback(async function getClass(id) {
    dispatch({ type: 'loading' })
    try {
      const res = await fetch(`${BASE_URL}/sortAnimals/regions/${id}`)
      const data = await res.json()
      dispatch({ type: 'class/loaded', payload: data.result[0] })
    } catch (error) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error fetching animals...'
      })
    }
  }, [])


  //*  GET SPECIFIC ANIMAL by id
  const getAnimal = useCallback(async function getAnimal(id) {
    dispatch({ type: 'loading' })
    try {
      const res = await fetch(`${BASE_URL}/animals/${id}`)
      const data = await res.json();
      dispatch({ type: 'selectedAnimal/loaded', payload: data.data })
    } catch (error) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error fetching animal...'
      })
    }
  }, [selectedAnimal.id])


  //* GET REGIONS
  useEffect(() => {
    async function fetchRegions() {
      dispatch({ type: 'loading' })
      try {
        const res = await fetch(`${BASE_URL}/sortAnimals/regions`)
        const data = await res.json()
        dispatch({ type: 'regions/loaded', payload: data.REGIONS })
      } catch (error) {
        dispatch({
          type: 'rejected',
          payload: 'There was an error fetching animals...'
        })
      }
    }
    fetchRegions()
  }, [])


  return (
    <AnimalsContext.Provider value={{ animals, isLoading, error, alClasses, regions, getClass, currentClass, getAnimal, selectedAnimal }}>
      {children}
    </AnimalsContext.Provider>
  )
}

function useAnimals() {
  const context = useContext(AnimalsContext)
  if (context === undefined) {
    throw new Error('CitiesContext was used outside the Cities Provider')
  }
  return context  //! Foarte IMPORTANT 
}

export { AnimalsProvider, useAnimals };
