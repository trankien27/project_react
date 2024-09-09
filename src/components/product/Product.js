import ProductCard from "./ProductCard";
import './Product.scss';
import { GetAllProduct } from "../../ApiService/Service";
import { useEffect, useState } from "react";
import OrderModal from "./Order";
const Product = (props) => {
    const [showModal, setShowModal] = useState(false);
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
            <OrderModal
                show={showModal}
            />

        </div>
    )
}


export default Product;