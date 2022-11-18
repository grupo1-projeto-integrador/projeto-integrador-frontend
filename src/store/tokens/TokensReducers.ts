import { StringDecoder } from 'string_decoder';
import { Action } from './Actions';

export interface TokenState {
    tokens: string,
    id: string
}

const initialState = {
    tokens: "",
    id: ""
}

export const tokensReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload, id: state.id}
        };

        case "ADD_ID":{
            return {id: action.payload, tokens: state.tokens}
        }

    default:
        return state
    }
}