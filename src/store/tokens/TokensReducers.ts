import { Action } from './Actions'

export interface TokenState {
    tokens: string,
    tipo: string
    id: string
}

const initialState = {
    tokens: '',
    tipo: '',
    id: ''
}

export const tokensReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            return { tokens: action.payload, tipo: state.tipo, id: state.id }
        };

        case "ADD_TIPO": {
            return { tipo: action.payload, tokens: state.tokens, id: state.id }
        };
        case 'ADD_ID': {
            return { id: action.payload, tokens: state.tokens, tipo:state.tipo }
        }
        default: return state
    }
}