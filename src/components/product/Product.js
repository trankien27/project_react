import ProductCard from "./ProductCard";
import './Product.scss';
import { GetAllProduct } from "../../ApiService/Service";
import { useEffect, useState } from "react";
const Product = (props) => {
    const [products, setProducts] = useState();
    const getProducts = async () => {
        let res = await GetAllProduct();
        console.log(res.result)
        setProducts(res.result);

    }
    useEffect(() => {
        console.log(products)
        getProducts();
    }, [])

    // const products = [
    //     {
    //         brand: "kien",
    //         description: "des",
    //         image: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
    //         formattedPrice: 1000
    //     },
    //     {
    //         brand: "kien2",
    //         description: "des",
    //         image: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
    //         formattedPrice: 1000
    //     }
    // ]

    return (

        <div className="product-section">
            <div>Sort section</div>
            <div className="product-show">
                {
                    products && products.length > 0 &&
                    products.map((product, index) => {
                        return (
                            <ProductCard product={product} />
                        )
                    })
                }
                {products && products.length == 0 &&
                    <td>Danh sách sp trống</td>
                }
            </div>


        </div>
    )
}


export default Product;