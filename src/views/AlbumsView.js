import React, {useEffect, useState} from 'react';
import axios from "axios";
import AlbumsGrid from "../components/AlbumsGrid";

function AlbumsView(props) {
    const [albums,setAlbums] = useState([]);

    async function getAlbums(params){
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums',{params});
        setAlbums(response.data);
    }

    useEffect(()=>{
        getAlbums().catch(console.error);
    },[])

    return (
        <div className="d-flex row justify-content-evenly m-0"
        >
            <AlbumsGrid data={albums}/>
        </div>
    );
}

export default AlbumsView;