export default function allPets(state = [], action) {
  switch(action.type) {
    case 'SET_ALL_PETS':
      return [action.payload]
    case 'DELETE_PET':
      console.log("Pet will be deleted", action.payload)
    case 'ADD_PET':
      console.log("Pet will be added", action.payload)
      return state.push(action.payload)
    default:
      return state
  }
}
