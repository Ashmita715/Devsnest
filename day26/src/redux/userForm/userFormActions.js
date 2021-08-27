import { updateFirstName, updateLastName } from "./userFormActionTypes";

export const updateFirstNameInput = (input) => {
    return{
        type: updateFirstName,
        payload: input
    }
}

export const updateLastNameInput = (input) => {
    return{
        type: updateLastName,
        payload: input
    }
}