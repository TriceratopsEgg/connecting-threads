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
  
import { readable, writable, type Subscriber } from 'svelte/store';
import { CollectionReference, addDoc, collection, deleteDoc, doc, getFirestore, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from 'firebase/firestore';
import type { WeavingPatterStoreInterface } from '../stores/weavingPatternStore';
import { redirect } from '@sveltejs/kit';

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

// firestore

const db = firebaseApp ? getFirestore(firebaseApp) : undefined;

export const getWeavingPatterns = (uid: string) => {
    if (db) {
        return writable<WeavingPatterStoreInterface[]>(
            undefined,
            (set: Subscriber<WeavingPatterStoreInterface[]>) =>
                onSnapshot<WeavingPatterStoreInterface[]>(
                    query<WeavingPatterStoreInterface[]>(
                        collection(db, 'weavingPatterns') as CollectionReference<WeavingPatterStoreInterface[]>,
                        where('uid', '==', uid),
                        where('sharePublic', '==', 'true'),
                        orderBy('created')
                    ), (q) => {
                        set(q.empty
                            ? []
                            : q.docs.map((doc) => ({ ...doc.data() as any, id: doc.id }))
                        );
                    })
        );
    } else {
        return undefined;
    }
}

export const addWeavingPattern = (uid: string, weavingPattern: WeavingPatterStoreInterface) => {
    console.log(db);
    if (db) {
        addDoc(collection(db, 'weavingPatterns'), {
            uid,
            weavingPattern,
            complete: false,
            created: serverTimestamp()
        });
    } else {
        throw redirect(302, '/authentication/login');
    }
}

export const updateWeavingPattern = (id: string, newStatus: boolean) => {
    if (db) {
        updateDoc(doc(db, 'weavingPatterns', id), { complete: newStatus });
    } else {
        throw redirect(302, '/authentication/login');
    }
}

export const deleteWeavingPattern = (id: string) => {
    if (db) {
        deleteDoc(doc(db, 'weavingPatterns', id));
    } else {
        throw redirect(302, '/authentication/login');
    }
}