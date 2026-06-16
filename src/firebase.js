import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVzQRzsjBzdJERv0TWEAHTgY0BDwMq4V4",
  authDomain: "rural-classroom-2df1c.firebaseapp.com",
  projectId: "rural-classroom-2df1c",
  storageBucket: "rural-classroom-2df1c.firebasestorage.app",
  messagingSenderId: "398275091037",
  appId: "1:398275091037:web:1b4fb8351a7fd9fdfb4bb4",
  measurementId: "G-GER8J59FT3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);

// Function to upload picture and get URL
export const uploadPicture = async (file, type) => {
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  const fileName = `${uniqueSuffix}-${file.name}`;
  const fileRef = ref(storage, `${type}/${fileName}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
};

export const uploadFile = async (file, type) => {
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  const fileName = `${uniqueSuffix}-${file.name}`;
  const fileRef = ref(storage, `${type}/${fileName}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
};
