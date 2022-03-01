import React, {useEffect, useState} from 'react';
import axios from "axios";

function ProductView(props) {
    const [products,setProducts] = useState([]);

    async function getProducts(params){
        const response = await axios.get(
            'http://localhost:8080/products/',{params}
        );
        setProducts(response.data);
    }

    useEffect(()=>{
        getProducts().catch(console.error);
    },[])

    return (
        <div>
            <p>{products.length}</p>
            {
                products.map(product=>(
                    <p>{product.id}, {product.productName}, {product.description}</p>
                ))
            }
        </div>
    );
}

export default ProductView;