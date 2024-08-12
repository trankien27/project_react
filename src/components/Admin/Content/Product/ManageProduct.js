import { useState } from 'react';
import './ManageProduct.scss';
import TableProduct from './TableProduct';
import { FcPlus } from "react-icons/fc";
import ProductModal from './CreateProduct';
import { useEffect } from "react"
import { GetAllProduct } from "../../../../ApiService/Service";
import UpdateProduct from './UpdateProduct';


const ManageProduct = (props) => {
    const [listProduct, setListProduct] = useState([]);

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const fetchlistProduct = async () => {
        let res = await GetAllProduct();
        console.log(res.result)
        setListProduct(res.result)

    }

    useEffect(() => {
        fetchlistProduct();

    }, []);

    const [dataUpdate, setDataUpdate] = useState();
    const [showModal, setShowModal] = useState(false);

    const handleUpdateProduct = (product) => {
        setShowUpdateModal(true);
        setDataUpdate(product);



    }

    return (
        <div className="manage-product-container">

            <div className='title'>
                Quản lý hàng hoá
            </div>
            <div className='product-content'>
                <div className='btn-add-product'>
                    <button className='btn btn-primary' variant="primary" onClick={() => setShowModal(true)}><FcPlus /> Thêm sản phẩm </button>
                </div>
                <div className='table-products'>

                    <TableProduct listProduct={listProduct}
                        handleUpdateProduct={handleUpdateProduct}
                    />
                </div>
                <ProductModal
                    show={showModal}
                    setShow={setShowModal}
                    fetchListProduct={fetchlistProduct}
                />
                <UpdateProduct
                    dataUpdate={dataUpdate}
                    show={showUpdateModal}
                    setShow={setShowUpdateModal}
                    fetchListProduct={fetchlistProduct}

                />
            </div>

        </div>


    )
}
export default ManageProduct;