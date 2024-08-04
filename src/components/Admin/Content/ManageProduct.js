import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProductForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size='s'
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thêm người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body><form class="row g-3">
                    <div class="col-md-12">
                        <label for="inputNameProduct" class="form-label">Tên sản phẩm</label>
                        <input type="email" class="form-control" id="inputNameProduct" />
                    </div>
                    <div class="col-6">
                        <label for="inputPriceProduct" class="form-label">Giá sản phẩm</label>
                        <input type="number" class="form-control" step="1000" min="0" id="inputPriceProduct" placeholder="" />
                    </div>
                    <div class="col-6">
                        <label for="inputQuantityProduct" class="form-label">Số lượng</label>
                        <input type="number" class="form-control" step="1" min="0" id="inputQuantityProduct" placeholder="" />
                    </div>
                    <div class="mb-3">
                        <label for="inputDescriptionProduct" class="form-label">Mô tả sản phẩm</label>
                        <textarea class="form-control" id="inputDescriptionProduct" rows="3"></textarea>
                    </div>
                    <div class="col-12">

                    </div>

                </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const ManageProduct = (props) => {
    return (
        <div>
            <button>ok</button>
            <ProductForm /></div>


    )
}
export default ManageProduct;