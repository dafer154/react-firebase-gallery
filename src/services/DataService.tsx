import axios from "axios";
import firebase, { storage } from '../firebase';
import { Image } from '../models/Image.Model';

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

export const getCollection = async (collectionId: string, db = firebase.firestore()) => {
    try {
        const {docs = []} = await db.collection(collectionId).get()
        return docs.map((doc: any) => ({
            ...(doc.data()),
            _id: doc.id
        }));
    } catch (error) {
        console.log("Error", error)
    }
};

export const deleteItemOnCollection = async (
    collectionId: string,
    idImage: string,
    imageName: string,
    db = firebase.firestore()
) => {
    try {
        const storageRef = storage.ref('images/')
        const fileRef = storageRef.child(imageName)
        await fileRef.delete();
        return db.collection(collectionId).doc(idImage).delete();
    } catch (error) {
        console.log("Error", error);
    }
}

export const addItemToCollection = async (collectionId: string, image: any, db = firebase.firestore()) => {
    try {
        const modifyName = `${new Date().getMilliseconds().toString()}-${image.name}`
        const storageRef = storage.ref('images/')
        const fileRef = storageRef.child(modifyName)
        await fileRef.put(image)
        const urlImage = await fileRef.getDownloadURL()
        const objectImage: Image = { name: modifyName, url: urlImage }
        const newItem = await (await db.collection(collectionId).add(objectImage)).get();
        return {
            ...newItem.data(),
            _id: newItem.id
        }
    } catch (error) {
        console.log("Error", error);
    }
}