import {
    // Testing
    TESTING,
    // User Login
    LOGIN_USER, LOGIN_USER_ERROR,
    // Signup User
    SIGNUP_USER, SIGNUP_USER_ERROR,
    // Admin Login
    LOGIN_ADMIN, LOGIN_ADMIN_ERROR,
    // Fetch Tickers
    FETCH_TICKETS, FETCH_TICKETS_ERROR, FETCHING_TICKETS,
    // Adding Tickets
    ADD_TICKET, ADD_TICKET_ERROR, ADDING_TICKET,
    // Assigning Ticker
    ASSIGN_TICKET, ASSIGN_TICKET_ERROR, ASSIGNING_TICKET,
    // Resolving Ticker
    RESOLVE_TICKET, RESOLVE_TICKET_ERROR, RESOLVING_TICKET
} from '../actions/actions';

const initialState = {
    testing: '',
    user: '',
    tickets: [],
    loginError: '',
    fetchError: '',
    addError: '',
    assignError: '',
    resolveError: '',
    fetchingData: false
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case TESTING:
            return {
                ...state,
                testing: action.payload
            };
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGIN_USER_ERROR:
            return {
                ...state, 
                loginError: action.payload
            }
        case SIGNUP_USER:
            return {
                ...state,
                user: action.payload
            }
        case SIGNUP_USER_ERROR:
            return {
                ...state,
                loginError: action.payload
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
                ...state
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
                ...state
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
        default:
            return state;
    }
}