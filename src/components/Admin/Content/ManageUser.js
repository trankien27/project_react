import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {

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
                size='xl'
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thêm người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3">
                    <div className="col-md-12">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-6">
                        <label for="inputUsername" className="form-label">Tên đăng nhập</label>
                        <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Mật khẩu</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-12">
                        <label for="inputDob" className="form-label">Ngày sinh</label>
                        <input type="date" className="form-control" id="inputDob" placeholder="nn/TT/nnnn" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputFirstname" className="form-label">Họ</label>
                        <input type="text" className="form-control" id="inputFirstname" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputLastname" className="form-label">Tên</label>
                        <input type="text" className="form-control" id="inputLastname" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
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




const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Quản lý người dùng
            </div>
            <div className="user-container">
                <div>
                    <button>Thêm</button>
                    <Example />
                </div>
                <div>
                    table user
                </div>
            </div>

        </div>
    )
}
export default ManageUser;