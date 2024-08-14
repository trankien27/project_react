import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DeleteProductApi } from '../../../../ApiService/Service';
import { FaSync } from 'react-icons/fa';
import { toast } from 'react-toastify';

const DeleteProduct = (props) => {
    const { show, setShow } = props;
    const { dataDelete } = props;

    const handleClose = () => setShow(false);
    const handleSubmitDelete = async () => {
        try {
            await DeleteProductApi(dataDelete.productId);

            handleClose();
            await props.fetchListProduct();
            toast.success("Xoá thành công!");

        } catch (error) {
            console.log(error);
            toast.error(error);

        }




    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xoá sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xoá sản phẩm <b>   ?</b>?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Huỷ
                    </Button>
                    <Button variant="primary" onClick={handleSubmitDelete}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteProduct;