import React, {useEffect, useState} from 'react';
import ImagesGrid from "../components/ImagesGrid";
import axios from "axios";

function ImagesView({id}) {
    console.log(id);
    const[images,setImages]=useState([]);

    async function getImages(params){
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId='+id,{params});
        setImages(response.data);
    }

    useEffect(()=>{
        getImages().catch(console.error);
    },[])

    return (
        <div className="d-flex row justify-content-evenly">
            <ImagesGrid data={images}/>
        </div>
    );

}

export default ImagesView;