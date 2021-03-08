import React, { useEffect, useState, useRef } from "react";
import { getCollection, deleteItemOnCollection, addItemToCollection } from '../../services/DataService'
import './styles/Gallery.css';
import SpinnerCustom from '../shared/SpinnerCustom';


const Gallery = () => {

    const [listImages, setListImages] = useState<any>([]);
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [notImages, setNotIMages] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const imageInputRef = useRef<any>(null);

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

    const deleteImage = async (idImage: string, imageName: string) => {
        setLoading(true)
        try {
            await deleteItemOnCollection('images', idImage, imageName);
            getAllImages()
            setLoading(false);
        } catch (error) {
            console.log("Error", error)
        }
    }

    const onFileChange = async (event: any) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const onFileUpload = async () => {
        setLoading(true)
        try {
            await addItemToCollection('images', selectedFile)
            getAllImages()
            imageInputRef.current.value = "";
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
                <input type="file" onChange={onFileChange} ref={imageInputRef} />
                <button onClick={onFileUpload}>
                    Upload!
                </button>
            </div>
            <div className="gallery">
                {
                    !notImages && listImages.map((img: any) => (
                        <div className="gallery-item" key={img._id} >
                            <div className="delete-image" onClick={() => deleteImage(img._id, img.name)}></div>
                            <img className="gallery-image" src={img.url} alt={img.name} />
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