export default function allUsers(state = [], action) {
  switch(action.type) {
    case 'SET_ALL_USERS':
      return [action.payload]
    // case 'REMOVE_PET':
    //   return false
    default:
      return state
  }
}
