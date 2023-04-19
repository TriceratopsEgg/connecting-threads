// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged }  from "firebase/auth"
import { browser } from '$app/environment';
import { 
    PUBLIC_apiKey,
    PUBLIC_appId,
    PUBLIC_authDomain,
    PUBLIC_measurementId,
    PUBLIC_messagingSenderId,
    PUBLIC_projectId,
    PUBLIC_storageBucket
} from '$env/static/public';
import { authStore } from "../stores/authStore";
import { goto } from "$app/navigation";

const firebaseConfig = {
    apiKey: PUBLIC_apiKey,
    authDomain: PUBLIC_authDomain,
    projectId: PUBLIC_projectId,
    storageBucket: PUBLIC_storageBucket,
    messagingSenderId: PUBLIC_messagingSenderId,
    appId: PUBLIC_appId,
    measurementId: PUBLIC_measurementId
};

let firebaseApp;
let auth;
let unsubOnAuthStateChangedHandler: any;

export function getFirebaseAuth() {
	auth = getAuth(getFirebaseApp());
	auth.useDeviceLanguage();

	if (browser) {
		unsubOnAuthStateChangedHandler = onAuthStateChanged(auth, onAuthStateChangedHandler);
	}
	return auth;
}

function onAuthStateChangedHandler(user: any) {
    authStore.set({
        isLoggedIn: user !== null,
        user: user,
        firebaseControlled: true,
    });

    if (!user) {
        goto("/login");
    }
}

// firebaseApp
export function getFirebaseApp() {
	if (getApps.length === 0) {
		firebaseApp = initializeApp(firebaseConfig);
	} else {
		firebaseApp = getApp();
	}
	return firebaseApp;
}

export const firestore = getFirestore(getFirebaseApp());// Initialize Firebase Authentication and get a reference to the service
export const analytics = getAnalytics(getFirebaseApp());
export default firebaseApp;