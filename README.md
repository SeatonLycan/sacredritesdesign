## Sacred Rites Design Website

## Development
To get started, install the dependecies from the root with `yarn install`. This will install all dependecies for the the project. 

See `yarn run` for the list of other commands that can be run in each package.
- `yarn dev` Runs next dev which starts Next.js in development mode
- `yarn run` Runs next start which starts a Next.js production server

## Deployment
- Run `yarn build` in the `sacred-rites-jewelry` directory to build the Next.js application
- Run `yarn build` in the `functions` directory to build the Firebase Cloud Functions
- Run `yarn deploy` in the `functions` directory to deploy just the Cloud Functions, or `firebase deploy` to deploy all Firebase properties

## SendGrid

Notes for SendGrid setup:

- Add Authenticated Sender information (email, address)
- Generate API Key
- Configure Firebase "Trigger Email" extension with the "FROM" address as the authenticated sender email, the username `apikey` and the password `API_KEY`
