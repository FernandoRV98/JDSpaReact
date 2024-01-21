// Firebase/firebase.js
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../Firebase/firebase';

export const getAdvertisements = async () => {
    const advertisementsCol = collection(db, 'advertisements');
    const advertisementSnapshot = await getDocs(advertisementsCol);
    return advertisementSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }));
};