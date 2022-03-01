import React, {useEffect, useState} from 'react';
import axios from "axios";
import PhotosList from "../components/PhotosList";

function PhotosView({albumId}) {
    const [pictures,setPictures]=useState([]);

    async function getPicturesById(params){
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/photos?albumId='+albumId,{params}
        );
        setPictures(response.data);
    }

    useEffect(()=>{
        getPicturesById().catch(console.error);
    },[])

    return (
        <div>
            <PhotosList data={pictures}/>
        </div>
    );
}

export default PhotosView;