import { CREATE_TOKEN, REMOVE_TOKEN } from "./actions"



// provide state to default to avoid errors
export const token = (state = {}, action) => {
    // get the type and payload from the given action
    const { type, payload } = action;

    switch (type) {
        // create cases for all of the possible actions
        case CREATE_TOKEN: {
            // get the text defined in the payload (see actions if you are confused)
            const { token } = payload;
           
            // concat so you don't mutate the state - concat returns a new array
            return token;
        }
        case REMOVE_TOKEN: {
            
            return {};
        }
        default:
            return state;
    }
}