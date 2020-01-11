
// const adminUser = {"id":1,"email":"admin","password_digest":"$2a$12$Xn.WvsOzZd5JoVl2Sn9yBeaYphw0S4tITTeGPTy8MnNZiRKth7WNC","name":"admin","current_address":"1142 Admin Building St. Admin, ST 12345","about_me":"Aut minima neque quod nemo consequuntur nesciunt hic ut aut."}
// default user for development tests only => replace state = {} once mapped correctly.

export default function currentUser(
  state = {"id":1,"email":"admin","name":"admin","current_address":"1142 Admin Building St. Admin, ST 12345","about_me":"Aut minima neque quod nemo consequuntur nesciunt hic ut aut."}
  , action) {

  switch(action.type) {
    // case 'LOG_IN':
    //   return action.payload
    // case 'LOG_OUT':
    //   return {}
    default:
      return state
  }
}
