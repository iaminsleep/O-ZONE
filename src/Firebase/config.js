import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAhPeBog3v6j4AqB_sufoiDs-CHocaUAS4",
  authDomain: "o-zone-fbe01.firebaseapp.com",
  projectId: "o-zone-fbe01",
  storageBucket: "o-zone-fbe01.appspot.com",
  messagingSenderId: "391992379119",
  appId: "1:391992379119:web:510e4c602c0d919ad8fd1a",
  measurementId: "G-6W704RK0YM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);