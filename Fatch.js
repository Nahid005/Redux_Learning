const {createStore, applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

/**
 * Action 
 * Reducer
 * Store
 */

// constant value 

const GET_USER_URL = "GET_USER_URL"
const GET_SUCCESS_USER = "GET_SUCCESS_USER"
const GET_FAILED_USER = "GET_FAILED_USER"

const initialState = {
    user: [],
    isLoading: false,
    error: null
}

// action 

const getAllUser = () => {
    return {
        type:GET_USER_URL
    }
}

const getSuccessUser = (users) => {
    return {
        type:GET_SUCCESS_USER,
        payload: users,
    }
}

const getFailedUser = (error) => {
    return {
        type:GET_FAILED_USER,
        payload:error
    }
}

// reducer handle 

const getDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_URL:
            return{
                isLoading: true,
                ...state,
            }

        case GET_SUCCESS_USER:
            return{
                isLoading: false,
                ...state,
                user:[...state.user, action.payload]
            }
        case GET_FAILED_USER:
            return{
                ...state,
                error: action.payload
            }
        default:
            state

    }
}

const store = createStore(getDataReducer, applyMiddleware(logger))
store.subscribe(()=> {
    console.log(getState())
})

