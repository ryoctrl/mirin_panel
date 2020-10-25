import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import 'firebase/storage';

console.log(process.env);

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

console.log(firebaseConfig);

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.analytics();
export const storage = firebase.storage();

export const uploadImage = async (
  path: string,
  data: File
): Promise<string> => {
  const ref = storage.ref();
  const imageRef = ref.child(`mirin-panel/images/${path}`);
  await imageRef.put(data);
  return await imageRef.getDownloadURL();
};

export const deleteImage = async (path: string) => {
  const ref = storage.ref();
  const imageRef = ref.child(`lostrpg/images/${path}`);
  return await imageRef.delete();
};
