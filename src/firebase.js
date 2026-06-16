import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyCZrT16HJs-3JrbbcSePf-e-EIpehkEPpg",
//   authDomain: "rural-classroom.firebaseapp.com",
//   projectId: "rural-classroom",
//   storageBucket: "rural-classroom.appspot.com",
//   messagingSenderId: "916425430497",
//   appId: "1:916425430497:web:ba178206cb6a0f12402ea0",
//   measurementId: "G-XZSY6TT3GT",
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyCqo0hZNEFtV8oojYVT_i__oiBi03q2BQg",
//   authDomain: "rural-classroom-deb4b.firebaseapp.com",
//   projectId: "rural-classroom-deb4b",
//   storageBucket: "rural-classroom-deb4b.appspot.com",
//   messagingSenderId: "564145504433",
//   appId: "1:564145504433:web:73a9860f1332dd94a4a290",
//   measurementId: "G-B18PGLY34Z",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBVzQRzsjBzdJERv0TWEAHTgY0BDwMq4V4",
  authDomain: "rural-classroom-2df1c.firebaseapp.com",
  projectId: "rural-classroom-2df1c",
  storageBucket: "rural-classroom-2df1c.firebasestorage.app",
  messagingSenderId: "398275091037",
  appId: "1:398275091037:web:1b4fb8351a7fd9fdfb4bb4",
  measurementId: "G-GER8J59FT3"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();

// Function to upload picture and get URL
export const uploadPicture = async (file, type) => {
  const storageRef = storage.ref();
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  const fileName = `${uniqueSuffix}-${file.name}`;
  const fileRef = storageRef.child(`${type}/${fileName}`);
  // i want view url of the file
  await fileRef.put(file);
  const url = await fileRef.getDownloadURL();
  return url;
};

export const uploadFile = async (file, type) => {
  const storageRef = storage.ref();
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  const fileName = `${uniqueSuffix}-${file.name}`;
  const fileRef = storageRef.child(`${type}/${fileName}`);
  await fileRef.put(file);
  const url = await fileRef.getDownloadURL();
  return url;
};
