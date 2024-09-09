import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FaFileUpload } from "react-icons/fa";


import axios, { Axios } from 'axios';
import { CreateNewProduct } from '../../../../ApiService/Service';
import { toast } from 'react-toastify';
import { useState } from 'react';

const ProductModal = (props) => {


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
        const data = new FileReader();
        data.addEventListener('load', () => {
            setImgProduct(data.result)
        })
        data.readAsDataURL(event.target.files[0])
        console.log(imgProduct)
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImg(URL.createObjectURL(event.target.files[0]));
        } else {
            // setPreviewImg("");
        }

    }


    const handleSubmitCreateProduct = async () => {
        try {
            await CreateNewProduct(nameProduct, descriptionProduct, imgProduct, quantityProduct, priceProduct);
            toast.success("Thêm sản phẩm thành công")
            handleClose();
            await props.fetchListProduct(0);
        } catch (error) {
            toast.error("bạn nhập thông tin chưa đúng")
            console.log(error);
        }


        ;
        // console.log(res)


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
export default ProductModal;