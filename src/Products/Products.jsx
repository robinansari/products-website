import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
    const {products} =useLoaderData();
    
    return (
        <div className="grid grid-cols-3 mx-20 py-10 gap-10">
           {
            products.map((product,idx) => <Product key={idx} product={product}></Product>)
           }
        </div>
    );
};

export default Products;