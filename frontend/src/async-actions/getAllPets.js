export default function getAllPets() {
  return (dispatch) => {
    dispatch({type: "FETCH"})
    fetch(`http://localhost:4000/pets`)
      .then(response => response.json())
      .then(allPets => {
        dispatch({type: 'SET_ALL_PETS', payload: allPets})
        return allPets
      })
      .then(allPets => {
        dispatch({type: "SUCCESS"})
      })
  }

}
