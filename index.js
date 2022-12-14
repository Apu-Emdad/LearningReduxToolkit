const { fetchUsers } = require("./Features/users/userSlice.js");
const store = require("./App/store.js");
const cakeActions = require("./Features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./Features/icecream/icecreamSlice").icecreamActions;

console.log("intial state", store.getState());

/* const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
); */

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(5));
store.dispatch(iceCreamActions.restocked(5));

store.dispatch(fetchUsers());

/* unsubscribe(); */
