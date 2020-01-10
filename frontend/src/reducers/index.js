import { combineReducers } from 'redux'
import allPets from './allPets'
import allUsers from './allUsers'
import currentlyLoggedIn from './currentlyLoggedIn'
import currentPets from './currentPets'
import currentUser from './currentUser'


export default combineReducers({
  allPets,
  allUsers,
  currentlyLoggedIn,
  currentPets,
  currentUser
})
