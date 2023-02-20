// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBxktyW8SzI5El2g5IfhvBU9wROswnOXmU",
//   authDomain: "shopultimate-bb461.firebaseapp.com",
//   projectId: "shopultimate-bb461",
//   storageBucket: "shopultimate-bb461.appspot.com",
//   messagingSenderId: "649711237771",
//   appId: "1:649711237771:web:523d66287674facd95b28e",
//   measurementId: "G-J643QPGWW5",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const storage = getStorage(app);





// 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0FAcpRJ2jWitxA4sEGnIWXC2buhCH2-Q",
  authDomain: "profile-b6a08.firebaseapp.com",
  projectId: "profile-b6a08",
  storageBucket: "profile-b6a08.appspot.com",
  messagingSenderId: "1026482565346",
  appId: "1:1026482565346:web:3d8c1f93f713a6ee782ebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
