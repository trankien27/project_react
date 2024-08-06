import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageProduct.scss';
import { FaFileUpload } from "react-icons/fa";
import { FcPlus } from "react-icons/fc";

import axios, { Axios } from 'axios';

function ProductModal(props) {
    const { show, setShow } = props;



    const [nameProduct, setNameProduct] = useState("");
    const [priceProduct, setPriceProduct] = useState(0);
    const [quantityProduct, setQuantityProduct] = useState(0);
    const [descriptionProduct, setDescriptionProduct] = useState();
    const [imgProduct, setImgProduct] = useState("");

    const [previewImg, setPreviewImg] = useState("");


    const handleClose = () => {
        setShow(false);
        setNameProduct("");
        setPriceProduct(0);
        setQuantityProduct(0);
        setDescriptionProduct("");
        setImgProduct("");
        setPreviewImg("");
    }
    const handleUpLoadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImg(URL.createObjectURL(event.target.files[0]));
            setImgProduct(URL.createObjectURL(event.target.files[0]))
        } else {
            // setPreviewImg("");
        }

    }
    const handleSubmitCreateProduct = async () => {
        // let data = {
        //     productName: nameProduct,
        //     productDescription: descriptionProduct,
        //     productImage: imgProduct,
        //     productQuantity: quantityProduct,
        //     productPrice: priceProduct

        // }

        // console.log(data)

        var token = "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJraWVuIiwic3ViIjoiYWRtaW4iLCJleHAiOjE3MjI5OTU2MzAsImlhdCI6MTcyMjk1OTYzMCwianRpIjoiOWZkY2RlMTktYjM3NC00MWU0LTgzNTAtMmRmMDJjZDEyNWNmIiwic2NvcGUiOiJST0xFX0FETUlOIn0.F4funMzUFkVd1PviLqo1iPF9A9l-8TU-iVJLUzJooxaiCxrxJdxTrLOo8QxPcJ1dEIZyw52t6kEvuWlOAtyTYQ";
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        };
        const formdata = new FormData();
        formdata.append('productName', nameProduct);
        formdata.append('productDescription', descriptionProduct);
        formdata.append('productImage', imgProduct);
        formdata.append('productQuantity', quantityProduct);
        formdata.append('productPrice', priceProduct);

        let data = Object.fromEntries(formdata.entries());
        console.log(data)
        await axios.post('http://localhost:8080/products', data, config)
            .then(response => {
                setShow(false);
            })
            .catch(error => {
                console.log(error);
            });

    }

    return (
        <>


            <Modal className='modal-add-user'
                show={show}
                onHide={handleClose}
                size='s'
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thêm sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3">
                    <div className="col-md-12">
                        <label for="inputNameProduct" className="form-label">Tên sản phẩm</label>
                        <input type="text" className="form-control" id="inputNameProduct" value={nameProduct} onChange={(event) => setNameProduct(event.target.value)} />
                    </div>
                    <div className="col-6">
                        <label for="inputPriceProduct" className="form-label">Giá sản phẩm</label>
                        <input type="number" className="form-control" step="1000" min="0" id="inputPriceProduct" value={priceProduct} onChange={(event) => setPriceProduct(event.target.value)} />
                    </div>
                    <div className="col-6">
                        <label for="inputQuantityProduct" className="form-label">Số lượng</label>
                        <input type="number" className="form-control" step="1" min="0" id="inputQuantityProduct" value={quantityProduct} onChange={(event) => setQuantityProduct(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="inputDescriptionProduct" className="form-label">Mô tả sản phẩm</label>
                        <textarea className="form-control" id="inputDescriptionProduct" rows="3" value={descriptionProduct} onChange={(event) => setDescriptionProduct(event.target.value)}></textarea>
                    </div>
                    <div className="col-12" htmlFor='inputImage'>
                        <label for="inputImage" className="form-label label-upload"><FaFileUpload />Tải ảnh lên </label>
                        <input type="file" className="form-control" id="inputImage" hidden onChange={(event) => { handleUpLoadImage(event) }}></input>
                    </div>
                    <div className='col-md-12 img-preview'>
                        {
                            previewImg ? <img src={previewImg}></img>
                                :
                                <span>Preview Image </span>
                        }


                    </div>


                </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleSubmitCreateProduct}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const ManageProduct = (props) => {

    const [showModal, setShowModal] = useState(false);
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

                    table
                </div>
                <ProductModal
                    show={showModal}
                    setShow={setShowModal}
                />
            </div>

        </div>


    )
}
export default ManageProduct;