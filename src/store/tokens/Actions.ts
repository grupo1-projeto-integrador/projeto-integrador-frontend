export type Action = {type:'ADD_TOKEN'|'ADD_TIPO'|'ADD_ID', payload: string}

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token,
});

export const addId = (id: string): Action => ({
    type: "ADD_ID",
    payload: id,
});

export const addTipo = (tipo: string): Action => ({
    type: "ADD_TIPO",
    payload: tipo,
})