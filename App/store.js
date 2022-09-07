//Import the configureStore API from Redux Toolkit.
const configureStore = require("@reduxjs/toolkit").configureStore;

//install redux-logger
const reduxLogger = require("redux-logger");

//import slices
const cakeReducer = require("../Features/cake/cakeSlice");
const icecreamReducer = require("../Features/icecream/icecreamSlice");
const usersSlice = require("../Features/users/userSlice");

//create logger
const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    usersSlice: usersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
