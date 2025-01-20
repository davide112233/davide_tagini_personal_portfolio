import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFaCaEuhjsh8KUskswRRwM4sj8VeENRMw",
  authDomain: "davide-tagini-portfolio-server.firebaseapp.com",
  projectId: "davide-tagini-portfolio-server",
  storageBucket: "davide-tagini-portfolio-server.firebasestorage.app",
  messagingSenderId: "303243672966",
  appId: "1:303243672966:web:454e5947c958713c2d4007",
  measurementId: "G-BFFQ0GZV8J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };