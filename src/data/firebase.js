import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, addDoc, doc, getDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPaQf4ktYzVQotbvo3DrkcZgng573OLhk",
  authDomain: "instagram-clone-3b62e.firebaseapp.com",
  projectId: "instagram-clone-3b62e",
  storageBucket: "instagram-clone-3b62e.appspot.com",
  messagingSenderId: "304677069039",
  appId: "1:304677069039:web:2945011f8492ab4a8fbb1a",
  measurementId: "G-JQHV210CHT"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

export const getFeeds = async () => {
    const querySnapshot = await getDocs(collection(firestore, "feed"));
    const feeds = []
    querySnapshot.forEach(item => {
      const data = {
        id: item.id,
        ...item.data()
      }
      feeds.push(data)
      console.log(data) 
  
    })
    return feeds
}

export const createFeed = async (username,image,caption) => {
  const feed = {
    username: username,
    image: image,
    caption: caption,
    likeCount: 0
}
  await addDoc(collection(firestore, 'feed'), feed)
}

export const getfeedDetail = async (id) => {
  const docRef = doc(firestore, 'feed', id)
  const docSnap = await getDoc (docRef)
  return docSnap.data()
}
