import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import counter from './slice/counter'
import todos from './slice/todos'
import posts from './slice/posts'
import routes from './slice/routes'
import auth from './slice/auth'

const appReducer = combineReducers({
    counter,
    todos,
    posts,
    routes,
    auth
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todos', 'posts', 'auth'],
    blacklist: ['counter', 'routes'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export default store;
export const persistor = persistStore(store);
