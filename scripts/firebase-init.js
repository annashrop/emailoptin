
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCXrZyRjTDmwxYRNNXvbtnc0eLNdbxmPXM",
  authDomain: "emailoptin-be000.firebaseapp.com",
  databaseURL: "https://emailoptin-be000-default-rtdb.firebaseio.com",
  projectId: "emailoptin-be000",
  storageBucket: "emailoptin-be000.firebasestorage.app",
  messagingSenderId: "549214862785",
  appId: "1:549214862785:web:613c2c8435de1533b74340",
  measurementId: "G-6C92LPC8CF"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
