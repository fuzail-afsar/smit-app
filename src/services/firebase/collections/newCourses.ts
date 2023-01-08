import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import firebase from "../firebase";

const db = getFirestore(firebase);

export const getNewCourses = async (
  callback: (doc: QueryDocumentSnapshot<DocumentData>) => void
) => {
  try {
    const querySnapshot = await getDocs(collection(db, "new_courses"));
    querySnapshot.forEach((doc) => {
      callback(doc);
    });
  } catch (error) {
    throw error;
  }
};

// export const getBannerImages = () =>
//   new Promise(async (resolve: (images: string[]) => void, reject) => {
//     try {
//       const images: string[] = [];
//       await getBanner((doc) => images.push(doc.data().image));
//       resolve(images);
//     } catch (error) {
//       reject(error);
//     }
//   });
