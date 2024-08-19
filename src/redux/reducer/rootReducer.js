import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
<<<<<<< HEAD
import userReducer from './userReducer';
=======
import userReducer from './userReducer'
>>>>>>> 1332b79b61fc95b43e4b0af937ac07c4cc8ad6e5

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
<<<<<<< HEAD


=======
>>>>>>> 1332b79b61fc95b43e4b0af937ac07c4cc8ad6e5
});

export default rootReducer;