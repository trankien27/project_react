import { useState } from 'react';
import './ManageProduct.scss';
import TableProduct from './TableProduct';
import { FcPlus } from "react-icons/fc";
import ProductModal from './CreateProduct';
import { useEffect } from "react"
import { GetAllProduct, GetProductWithPaginate } from "../../../../ApiService/Service";
import UpdateProduct from './UpdateProduct';
import ViewProduct from './ViewProduct';
import DeleteProduct from './DeleteProduct';
import TableProductPaginate from './TableProductPaginate';


const ManageProduct = (props) => {
    const [PageNo, setPageNo] = useState(0);
    const LIMIT_USER = 5;
    const [listProduct, setListProduct] = useState([]);

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [showViewModal, setShowViewModal] = useState(false);
    const [dataUpdate, setDataUpdate] = useState();
    const [showModal, setShowModal] = useState(false);
    const [dataDelete, setDataDelete] = useState();
    const [countPage, setCountPage] = useState(0);

    const countPageTotal = async () => {
        let res = await GetAllProduct();

        console.log(res.result)


    }


    const fetchlistProductWithPaginate = async (page) => {

        let res = await GetProductWithPaginate(page, LIMIT_USER);
        setListProduct(res.result);
        setCountPage(Math.round(+res.quantity / LIMIT_USER));


    }

    const handlePageClick = (page) => {
        setPageNo(page);
        console.log(PageNo)
    }
    useEffect(() => {
        countPageTotal();
        fetchlistProductWithPaginate(PageNo);
        // fetchlistProduct();

    }, [PageNo]);



    //update
    const handleUpdateProduct = (product) => {
        setShowUpdateModal(true);
        setDataUpdate(product);
    }

    //view
    const handleViewProduct = (product) => {
        setShowViewModal(true);
        setDataUpdate(product);
    }
    //page click



    //delete
    const hanldeDeleteProduct = (product) => {
        setShowDeleteModal(true);
        setDataDelete(product);
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

                    <TableProductPaginate
                        countPage={countPage}
                        handlePageClick={handlePageClick}
                        listProduct={listProduct}
                        handleUpdateProduct={handleUpdateProduct}
                        handleViewProduct={handleViewProduct}
                        hanldeDeleteProduct={hanldeDeleteProduct}

                    />
                </div>
                <ProductModal
                    show={showModal}
                    setShow={setShowModal}
                    fetchListProduct={fetchlistProductWithPaginate}
                />
                <UpdateProduct
                    dataUpdate={dataUpdate}
                    show={showUpdateModal}
                    setShow={setShowUpdateModal}
                    fetchListProduct={fetchlistProductWithPaginate}

                />
                <ViewProduct
                    dataUpdate={dataUpdate}
                    show={showViewModal}
                    setShow={setShowViewModal}
                />
                <DeleteProduct
                    dataDelete={dataDelete}
                    show={showDeleteModal}
                    setShow={setShowDeleteModal}
                    fetchListProduct={fetchlistProductWithPaginate}
                />
            </div>

        </div>


    )
}
export default ManageProduct;