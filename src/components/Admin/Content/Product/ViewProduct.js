import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash'
import { FaFileUpload } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { UpdateProductApi } from '../../../../ApiService/Service';

function ViewProduct(props) {

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

    return (
        <>


            <Modal className='modal-add-user'
                show={show}
                onHide={handleClose}
                size='s'
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3">
                    <div className="col-md-12">
                        <label for="inputNameProduct" className="form-label">Tên sản phẩm</label>
                        <input disabled={true} type="text" className="form-control" id="inputNameProduct" value={nameProduct} onChange={(event) => setNameProduct(event.target.value)} />
                    </div>
                    <div className="col-6">
                        <label for="inputPriceProduct" className="form-label">Giá sản phẩm</label>
                        <input disabled type="number" className="form-control" step="1000" min="0" id="inputPriceProduct" value={priceProduct} onChange={(event) => setPriceProduct(event.target.value)} />
                    </div>
                    <div className="col-6">
                        <label for="inputQuantityProduct" className="form-label">Số lượng</label>
                        <input disabled type="number" className="form-control" step="1" min="0" id="inputQuantityProduct" value={quantityProduct} onChange={(event) => setQuantityProduct(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="inputDescriptionProduct" className="form-label">Mô tả sản phẩm</label>
                        <textarea disabled className="form-control" id="inputDescriptionProduct" rows="3" value={descriptionProduct} onChange={(event) => setDescriptionProduct(event.target.value)}></textarea>
                    </div>
                    <div className="col-12" htmlFor='inputImage'>
                        <label for="inputImage" className="form-label label-upload"><FaFileUpload />Tải ảnh lên </label>
                        <input disabled type="file" className="form-control" id="inputImage" hidden ></input>
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
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ViewProduct;