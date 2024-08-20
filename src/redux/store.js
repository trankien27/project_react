import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import rootReducer from './reducer/rootReducer'
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
let persistor = persistStore(store)

export { store, persistor };