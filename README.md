
## Developing

Steps to run the project:
1. Install dependencies with `npm install`
2. Make sure your .env file is in place in the root of the solution with the following keys:
```bash
PUBLIC_apiKey=
PUBLIC_authDomain=
PUBLIC_projectId=
PUBLIC_storageBucket=
PUBLIC_messagingSenderId=
PUBLIC_appId=
PUBLIC_measurementId=
```

P.S. Currently authentication is not being enforced since this is still early days, so the above keys will only be ABSOLUTELY necessary if you want to check out the login and registering flows

3. Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
