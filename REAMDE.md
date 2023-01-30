# SIL Frontend Engineer Assessment

## A Node backend

- Steps

- Run __npm install__ to install dependencies

- Run __npm start__ to serve application

3rd party packages that I included are
cores, dotenv, express, google-auth-library, jsonwebtoken and nodemon

## Api

/api/v1/users - Accepts a raw JWT token from the frontend application and using google-auth-library, verifies that the token is actually from google. Based on the decoded information, a new session token is created and sent back to the frontend application.

## Submitted by Victor Gichui Nyangi
