import { TEST } from "../constants/types"
const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST: {
            return {
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        }
        default:
            return state;
    }
}

export default testReducer;