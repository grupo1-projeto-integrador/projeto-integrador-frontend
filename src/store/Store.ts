import { legacy_createStore as createStore} from 'redux';
import { tokensReducer } from './tokens/TokensReducers';

const store = createStore(tokensReducer);

export default store;