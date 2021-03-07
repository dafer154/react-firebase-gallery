import axios from "axios";
import firebase, { storage } from '../firebase';

//FAKE DATABASE
export const BASE_URL = "http://localhost:3001/appData";

export const getAllProducts = async () => {
    try {
        return await axios.get(BASE_URL)
    } catch (error) {
        console.log("error", error)
    }
};

export const getAllProductsColumns = async () => {
    try {
        return await axios.get(BASE_URL)
    } catch (error) {
        console.log("error", error)
    }
}

export const getCollection = async (collectionId, db = firebase.firestore()) => {
    try {
        const data = await db.collection(collectionId).get()
        return data.docs.map(doc => ({
            ...(doc.data()),
            _id: doc.id
        }));
    } catch (error) {
        console.log("Error", error)
    }
};

export const deleteItemOnCollection = async (
    collectionId,
    idImage,
    db = firebase.firestore()
) => {
    try {
        return db.collection(collectionId).doc(idImage).delete();
    } catch (error) {
        console.log("Error", error);
    }
}

export const addItemToCollection = async (collectionId, image, db = firebase.firestore()) => {
    try {
        const storageRef = storage.ref('images/')
        const fileRef = storageRef.child(`${new Date().getMilliseconds().toString()}-${image.name}`)
        await fileRef.put(image)
        const urlImage = await fileRef.getDownloadURL()
        const objectImage = { name: image.name, url: urlImage }
        const newItem = await (await db.collection(collectionId).add(objectImage)).get();
        return {
            ...newItem.data(),
            _id: newItem.id
        }
    } catch (error) {
        console.log("Error", error);
    }
}