import {
    // Testing
    HOME_LOADED,
    // User Login
    LOGIN_USER, LOGIN_USER_ERROR,
    // Signup User
    SIGNUP_USER, SIGNUP_USER_ERROR,
    // Account is Helper Action
    IS_HELPER,
    // Admin Login
    LOGIN_ADMIN, LOGIN_ADMIN_ERROR,
    // Fetch Tickers
    FETCH_TICKETS, FETCH_TICKETS_ERROR, FETCHING_TICKETS,
    // Fetch Tickers
    FETCH_USER_TICKETS, FETCH_USER_TICKETS_ERROR,
    // Clearing of tickets
    CLEAR_TICKETS,
    // Adding Tickets
    ADD_TICKET, ADD_TICKET_ERROR, ADDING_TICKET,
    // Assigning Ticker
    ASSIGN_TICKET, ASSIGN_TICKET_ERROR, ASSIGNING_TICKET,
    // Resolving Ticker
    RESOLVE_TICKET, RESOLVE_TICKET_ERROR, RESOLVING_TICKET, SET_USER_ID,
    CLEAR_STATE
} from '../actions/actions';

const initialState = {
    token: '',
    user: '',
    userID: '',
    tickets: [],
    loginError: '',
    signUpError: '',
    fetchError: '',
    addError: '',
    assignError: '',
    resolveError: '',
    isHelper: false,
    fetchingData: false,
    testing: 1
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case HOME_LOADED:
            return {
                ...state,
                token: action.payload
            }
        case IS_HELPER:
            return {
                ...state,
                isHelper: action.payload
            }
        case LOGIN_USER:
            return {
                ...state,
                token: action.payload
            }
        case LOGIN_USER_ERROR:
            return {
                ...state, 
                loginError: action.payload
            }
        case SET_USER_ID:
            return {
                ...state,
                userID: action.payload
            }
        case SIGNUP_USER:
            return {
                ...state,
                user: action.payload
            }
        case SIGNUP_USER_ERROR:
            return {
                ...state,
                signUpError: action.payload
            }
        case LOGIN_ADMIN:
            return {
                ...state,
                user: action.payload
            }
        case LOGIN_ADMIN_ERROR:
            return {
                ...state,
                loginError: action.payload
            }
        case FETCH_TICKETS:
            return {
                ...state,
                tickets: action.payload
            }
        case FETCH_USER_TICKETS: 
            return {
                ...state,
                tickets: action.payload
            }
        case CLEAR_TICKETS:
            return {
                ...state,
                tickets: []
            }
        case FETCH_USER_TICKETS_ERROR: 
            return {
                ...state,
                tickets: [],
                fetchError: action.payload
            }
        case FETCH_TICKETS_ERROR:
            return {
                ...state,
                fetchError: action.payload
            }
        case FETCHING_TICKETS: 
            return {
                ...state,
                fetchingData: !state.fetchingData
            }
        case ADD_TICKET: 
            return {
                ...state,
                testing: state.testing + 1
            }
        case ADD_TICKET_ERROR:
            return {
                ...state,
                addError: action.payload
            }
        case ADDING_TICKET:
            return {
                ...state,
                fetchingData: !state.fetchingData
            }
        case ASSIGN_TICKET:
            return {
                ...state,
                testing: state.testing + 1
            }
        case ASSIGN_TICKET_ERROR:
            return {
                ...state,
                assignError: action.payload
            }
        case ASSIGNING_TICKET:
            return {
                ...state,
                fetchingData: !state.fetchingData
            }
        case RESOLVE_TICKET:
            return {
                ...state
            }
        case RESOLVE_TICKET_ERROR:
            return {
                ...state,
                resolveError: action.payload
            }
        case RESOLVING_TICKET: 
            return {
                ...state,
                fetchingData: !state.fetchingData
            }
        case CLEAR_STATE:
            return {
                state: {}
            }
        default:
            return state;
    }
}