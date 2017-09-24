import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducer from './reducers';

export default function configureStore(onPersist) {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware),
    // autoRehydrate(),
    devTools({
      name: 'budgety',
      realtime: true,
    }),
  );

  const store = createStore(reducer, enhancer);

  persistStore(
    store,
    {
      blacklist: ['nav'],
      storage: AsyncStorage,
    },
    onPersist,
  );
  return store;
}
