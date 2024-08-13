import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash'
import { FaFileUpload } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { UpdateProductApi } from '../../../../ApiService/Service';

function UpdateProduct(props) {

    const { dataUpdate } = props;
    const { show, setShow } = props;
    const [idProduct, setIdProduct] = useState("");
    const [nameProduct, setNameProduct] = useState("");
    const [priceProduct, setPriceProduct] = useState(0);
    const [quantityProduct, setQuantityProduct] = useState(0);
    const [descriptionProduct, setDescriptionProduct] = useState();
    const [imgProduct, setImgProduct] = useState("");
    const [previewImg, setPreviewImg] = useState("");
    useEffect(() => {
        console.log(dataUpdate)
        if (!_.isEmpty(dataUpdate)) {
            setIdProduct(dataUpdate.productId)
            setNameProduct(dataUpdate.productName);
            setPriceProduct(dataUpdate.productPrice);
            setQuantityProduct(dataUpdate.productQuantity);
            setDescriptionProduct(dataUpdate.productDescription);
            setImgProduct(dataUpdate.productImage);
            setPreviewImg(dataUpdate.productImage);

        }
    }, [dataUpdate]);


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
    const handleSubmitUpdate = async () => {
        try {
            await UpdateProductApi(idProduct, nameProduct, descriptionProduct, imgProduct, quantityProduct, priceProduct);
            toast.success("Cập nhật sản phẩm thành công")
            handleClose();
            await props.fetchListProduct();
        } catch (error) {
            toast.error("bạn nhập thông tin chưa đúng")
            console.log(error);
        }


        ;



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
                    <Modal.Title>Cập nhật sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3">
                    <div className="col-md-12">
                        <label for="inputNameProduct" className="form-label">Tên sản phẩm</label>
                        <input disabled={true} type="text" className="form-control" id="inputNameProduct" value={nameProduct} onChange={(event) => setNameProduct(event.target.value)} />
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
                    <Button variant="primary" onClick={handleSubmitUpdate}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default UpdateProduct;