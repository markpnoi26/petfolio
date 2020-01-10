export default function allPets(state = [], action) {
  switch(action.type) {
    case 'ADD_PET':
      return [...state, action.payload]
    // case 'REMOVE_PET':
    //   return false
    default:
      return state
  }
}
