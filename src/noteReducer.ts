export interface NoteState {
    notes: string[]
} 

const intialState = {
    notes: []
}

type Action = {type : "ADD_NOTE", payload: string}

export const noteReducer = (state: NoteState = intialState,action: Action) => {
    switch(action.type) {
        case "ADD_NOTE": {
            return {...state, notes: [...state.notes, action.payload]}
        }
        default: 
            return state;
    }
}