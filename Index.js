const {createStore, applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");
/**
 * Action 
 * Reducer
 * Store
 */

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

//initialState

const InitialState = {
    count: 0
}

//action

const getIncrement = () => {
    return{
        type: INCREMENT
    }
} 

const getDecrement = () => {
    return{
        type: DECREMENT
    }
} 

// reducer 

const getReducer = (state = InitialState , action) => {
    switch(action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            };

        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            };

        default:
            return state
    }
}

const store = createStore(getReducer, applyMiddleware(logger))

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getIncrement())
store.dispatch(getIncrement())
store.dispatch(getIncrement())
store.dispatch(getDecrement())

