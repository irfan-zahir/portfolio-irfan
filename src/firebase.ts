import firebase from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: firebase.FirebaseOptions = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGESENDERID,
    appId: import.meta.env.VITE_APPID,
    measurementId: import.meta.env.VITE_MEASUREMENTID,
}

const app = firebase.initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const firestore = getFirestore(app)

declare global {
    interface Window {
        recaptchaVerifier: RecaptchaVerifier
    }
}

window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response: unknown) => {
        //   onSignInSubmit();
        console.log("signing in invi recaptcha", { response })
    }
}, auth);