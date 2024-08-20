
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DeleteProductApi, DeleteUserApi } from '../../../../ApiService/Service';
import { toast } from 'react-toastify';

const DeleteUser = (props) => {
    const { token } = props;
    const { show, setShow } = props;
    const { dataDelete } = props;

    const handleClose = () => setShow(false);
    const handleSubmitDelete = async () => {
        try {
            await DeleteUserApi(dataDelete.userID);

            handleClose();
            await props.fetchUser();
            toast.success("Xoá thành công!");

        } catch (error) {
            console.log(error);
            toast.error("Đã xảy ra lỗi");

        }




    }
    return (
        <>
            <Modal
                animation={true}
                backdrop="static" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xoá người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xoá người dùng:  <b>{dataDelete ? dataDelete.username : ""}</b>?</Modal.Body>
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

export default DeleteUser;