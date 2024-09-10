import ProductCard from "./ProductCard";
import './Product.scss';
import { GetAllProduct } from "../../ApiService/Service";
import { useEffect, useState } from "react";
import OrderModal from "./Order";
const Product = (props) => {
    const formatter = new Intl.NumberFormat();
    const [products, setProducts] = useState();
    const [product, setProduct] = useState();


    const getProducts = async () => {
        let res = await GetAllProduct();
        console.log(res.result)
        setProducts(res.result);

    }
    useEffect(() => {
        console.log(products)
        getProducts();

    }, [])
    const [show, setShow] = useState(false);

    const handleBuy = (product) => {
        setShow(true);
        setProduct(product);

    }
    return (

        <div className="product-section">
            <div>Sort section</div>
            <div className="product-show">
                {
                    products && products.length > 0 &&
                    products.map((product, index) => {
                        return (
                            <a className="product-card">
                                <img className="product-img" src={product.productImage} />
                                <div className="contentBox">
                                    <h3 className="product-name" >{product.productName}</h3>
                                    <h2 className="price">{formatter.format(product.productPrice)}đ</h2>
                                    <a onClick={() => handleBuy(product)} className="buy-btn">Mua ngay</a>
                                </div>
                            </a>
                        )
                    })
                }
                {products && products.length == 0 &&
                    <td>Danh sách sp trống</td>
                }
            </div>
            <OrderModal
                show={show}
                product={product}
                setShow={setShow}
            />

        </div>
    )
}


export default Product;