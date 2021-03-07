import React, { useEffect, useState } from "react";
import { getCollection, deleteItemOnCollection, addItemToCollection } from '../../services/DataService'
import './styles/Gallery.css';
import SpinnerCustom from '../shared/SpinnerCustom';

const Gallery = () => {

    const [listImages, setListImages] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [notImages, setNotIMages] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllImages()
    }, [])

    const getAllImages = async () => {
        try {
            const allImages = await getCollection('images');
            setListImages(allImages);
            if (allImages) {
                setNotIMages(!allImages.length);
            }
            setLoading(false);
        } catch (error) {
            console.log("Error", error)
        }
    }

    const deleteImage = async (idImage) => {
        setLoading(true)
        try {
            await deleteItemOnCollection('images', idImage);
            getAllImages()
            setLoading(false);
        } catch (error) {
            console.log("Error", error)
        }
    }

    const onFileChange = async (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const onFileUpload = async () => {
        setLoading(true)
        try {
            await addItemToCollection('images', selectedFile)
            getAllImages()
            setLoading(false);
        } catch (error) {
            console.log("Error", error)
        }
    };

    return (
        <div className="container">
            <h1>Image Gallery</h1>
            {loading && <SpinnerCustom />}
            <div className="gallery__upload-image">
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                    Upload!
                </button>
            </div>
            <div className="gallery">
                {
                    !notImages && listImages.map((img) => (
                        <div className="gallery-item" key={img._id} onClick={() => deleteImage(img._id)}>
                            <div className="delete-image"></div>
                            <img className="gallery-image" src={img.url} />
                        </div>
                    ))
                }
                {
                    notImages && <h1>Empty images</h1>
                }
            </div>
        </div>
    );
};

export default Gallery;