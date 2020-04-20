import { Action } from '@ngrx/store';

export interface State{
    texto: string;
}

export const initialState={
    texto:'Codido mentor'
}

export function miReducer(state : State = initialState, action : Action){
    console.log(action )
}