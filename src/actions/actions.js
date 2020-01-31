// Axios import
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// Action Exports
// --THIS IS FOR TESTING--
export const TESTING = "TESTING";
// Login Actions - Login action functionality and handling possible errors
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
// Signup Actions - Signup action functionality and handling possible errors
export const SIGNUP_USER = "SIGNUP_USER";
export const SIGNUP_USER_ERROR = "SIGNUP_USER_ERROR";
// Admin Login Actions - Admin login functionality and handling possible errors
export const LOGIN_ADMIN = "LOGIN_ADMIN";
export const LOGIN_ADMIN_ERROR = "LOGIN_ADMIN_ERROR";
// Fetching Tickets Actions - Used for fetching all tickets that are in the system and handling possible errors
export const FETCH_TICKETS = "FETCH_TICKETS";
export const FETCH_TICKETS_ERROR = "FETCH_TICKETS_ERROR";
// Create Ticket Actions - Used for creating a new ticket and handling possible errors
export const ADD_TICKET = "ADD_TICKETS";
export const ADD_TICKET_ERROR = "ADD_TICKET_ERROR";
// Assign Ticket Actions - Used for assigning tickets to users or moving back into the pool and handling possible errors
export const ASSIGN_TICKET = "ASSIGN_TICKET";
export const ASSIGN_TICKET_ERROR = "ASSIGN_TICKET_ERROR";
// Resolve Ticket Actions - Used for marking tickets as resolved and handling possible errors
export const RESOLVE_TICKET = "RESOLVE_TICKET";
export const RESOLVE_TICKET_ERROR = "RESOLVE_TICKET_ERROR";
// Fethching and Loading status for various actions
export const FETCHING_TICKETS = "FETCHING_TICKETS";
export const ADDING_TICKET = "ADDING_TICKET";
export const ASSIGNING_TICKET = "ASSIGNING_TICKET";
export const RESOLVING_TICKET = "RESOLVING_TICKET";
 
// Action Const's
const API = 'https://localhost:5000/api/';

// Testing Method
export const testing = () => 
{
    console.log('testing action fired')
    return {
        type: TESTING,
        payload: 'Testing payload'
    };
};

// User Signup Method
export const userSignUp = user => 
{
    axios.post(API + 'signup', user)
        .then((res) => {
            localStorage.setItem('token', res.data.token);
        })
        .catch((err) => {
            return {
                type: SIGNUP_USER_ERROR,
                payload: err
            };
        });
};

// Signin Method for User's
export const userSignIn = user => 
{
    axios.post(API + 'login', user)
        .then((res) => 
        {
            localStorage.setItem('token', res.data.token);
        })
        .catch((err) =>
        {
            return {
                type: LOGIN_USER_ERROR,
                payload: err
            }
        })
        return {
            type: LOGIN_USER,
            payload: localStorage.getItem('token')
        };
};

// Signout Method for User's
export const userSignOut = () =>
{
    localStorage.setItem('token', '');
    return {
        type: LOGIN_USER,
        payload: ''
    };
};

// Admin signin method
export const adminSignin = user => 
{
    axios.post(API + 'adminLogin', user)
        .then((res) => 
        {
            localStorage.setItem('token', res.data.token);
        })
        .catch((err) =>
        {
            return {
                type: LOGIN_ADMIN_ERROR,
                payload: err
            }
        })
        return {
            type: LOGIN_ADMIN,
            payload: localStorage.getItem('token')
        };
};

// Admin signout method
export const adminSignOut = () => 
{
    localStorage.setItem('token', '');
    return {
        type: LOGIN_ADMIN,
        payload: ''
    };
};

// Fetching of tickets
export const fetchTickets = () => 
{
    const promise = axiosWithAuth.get(API + 'tickets');

    return dispatch => {
        dispatch({ type: FETCHING_TICKETS});
        promise
        .then((res) => {
            dispatch({type: FETCH_TICKETS, payload: res.data});
            dispatch({type: FETCHING_TICKETS});
        })
        .catch((err) => {
            dispatch({type: FETCH_TICKETS_ERROR, payload: err});
            dispatch({type: FETCHING_TICKETS})
        })
    };
};

// Adding of ticket
export const addTicket = ticket => {
    const promise = axiosWithAuth.post(API + 'addTicket', ticket);

    return dispatch => {
        dispatch({type: ADDING_TICKET});
    promise
    .then((res) => {
        dispatch({type: ADD_TICKET, payload: res.data});
        dispatch({type: ADDING_TICKET});
    })
    .catch((err) => {
        dispatch({type: ADD_TICKET_ERROR, payload: err});
        dispatch({type: ADDING_TICKET});
    })
    };
};

// Assigning of ticket
export const assignTicket = ticket=> {
    const promise = axiosWithAuth.put(API + 'ticket', ticket);

    return dispatch => {
        dispatch({type: ASSIGNING_TICKET});
    promise
    .then((res) => {
        dispatch({type: ASSIGN_TICKET, payload: res.data});
        dispatch({type: ASSIGNING_TICKET});
    })
    .catch((err) => {
        dispatch({type: ASSIGN_TICKET_ERROR, payload: err});
        dispatch({type: ASSIGNING_TICKET});
    })
    };
};

// Resolving of a ticker
export const resolveTicket = ticket => {
    const promise = axiosWithAuth.put(API + 'resolveTicket', ticket);

    return dispatch => {
        dispatch({type: RESOLVING_TICKET});
    promise
    .then((res) => {
        dispatch({type: RESOLVE_TICKET, payload: res.data});
        dispatch({type: RESOLVING_TICKET});
    })
    .catch((err) => {
        dispatch({type: RESOLVE_TICKET_ERROR, payload: err});
        dispatch({type: RESOLVING_TICKET});
    })
    };
};