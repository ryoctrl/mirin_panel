import * as firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_databaseURL,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
};

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
