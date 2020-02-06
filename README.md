# DevDesk

React.js front end for DevDesk application

## About

This application is intended to be used as a solution for developers looking for help from one another. The application is designed with two user roles, students/helpers, students can create help requests, helpers can assign tickets to themselves in order to assist students. Students retain the ability to delete their own tickets to remove the chance of a ticket being removed before they can view it. 

## Helpers

Helper creation can be done from the signup page of the application. To signup as a helper you simply check the box 'Register as Helper' upon signup. The process is the same for logging in as a helper prior to the account creation.

## Students 

Students follow the normal login and signup flow, simply input all of the information in the signup page or login page without checking the checkbox and you will be treated as a student account

## State Management

State management throughtout the application is handled with redux. All network request, button clicks, and data changes throughout the whole of the application are handled withing actions.js and reducers.js

## Client Side Routing

React Router is used throughout the application to dynamically change the content being displayed according to actions taken by the user, and to reflect updates to the underlying state of the application. All routing is setup in index.js and the routes are defined within App.js

## Styling

Styling of this application was made a breeze with use of The Ant Design react library, the forms validation was built on top of the provided forms, as well as majority of the UI bas based around the provided components

## Secure Routing

The creation of PrivateRoute and axiosWithAuth were vital to the core functionality of this application. There are parts of the app that require the user has a valid token to access server side information, as well parts of the application where unauthorized users could become a security issue if they were able to enter.

## Installation

- Fork or download a copy of this repos
- Once downloaded navigate to the directory and run 'npm install'
- After installation run the command 'npm run start'
- Navigation to 'http://localhost:3000' and you will be shown the login page
- Create an account by clicking Register a new account
- All fields of the form are required for account registration
- Once registered you will be logged in automatically
- Home shows all tickets within the system
- Within home on the top right of the page the user can choose the layout style of all shown tickets, the options are Cards in a grid, or A list with rows
- Explore allows you to find specific tickets based on the language chosen
- My Tickets allows you to view all tickets you have submitted if you have submitted any
- Clicking the User tab will open a modal that allows the user to update their information as well as upload a avatar image
- Clicking Add Ticket will open a modal with all the fields required to create a new ticket and submit it to the system
- Clicking logout will do just that