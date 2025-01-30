// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZTvWZqG9rz1vXnHF8dYDtKAqg7E0ty-Y",
  authDomain: "foodsharess.firebaseapp.com",
  databaseURL: "https://foodsharess-default-rtdb.firebaseio.com",
  projectId: "foodsharess",
  storageBucket: "foodsharess.appspot.com",
  messagingSenderId: "654727671146",
  appId: "1:654727671146:web:9ed193e5d9c5f4e931f25c",
  measurementId: "G-G5RKQZ0MLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Export Firebase config (if needed in other parts of the app)
export { database };
export default app;
