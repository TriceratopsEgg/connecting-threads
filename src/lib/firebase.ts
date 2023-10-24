import {
    PUBLIC_apiKey,
    PUBLIC_appId,
    PUBLIC_authDomain,
    PUBLIC_measurementId,
    PUBLIC_messagingSenderId,
    PUBLIC_projectId,
    PUBLIC_storageBucket
  } from '$env/static/public';
  import { initializeApp, getApps } from 'firebase/app';
  import { getAuth } from 'firebase/auth';
  
  const firebaseConfig = {
    apiKey: PUBLIC_apiKey,
    authDomain: PUBLIC_authDomain,
    projectId: PUBLIC_projectId,
    storageBucket: PUBLIC_storageBucket,
    messagingSenderId: PUBLIC_messagingSenderId,
    appId: PUBLIC_appId,
    measurementId: PUBLIC_measurementId
  };
  
  // Initialize Firebase
  let firebaseApp;
  
  if (getApps().length === 0) {
    firebaseApp = initializeApp(firebaseConfig);
  }
  
  // Auth
  const firebaseAuth = getAuth(firebaseApp);
  
  export { firebaseApp, firebaseAuth };