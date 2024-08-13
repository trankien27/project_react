import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash'
import { toast } from 'react-toastify';
import { parseISO, differenceInYears } from 'date-fns';
import { UpdateUserApi } from '../../../../ApiService/Service';
import { useEffect, useState } from 'react';
const ViewUser = (props) => {
    const { dataUpdate } = props
    const { show, setShow } = props;
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");


    useEffect(() => {
        console.log(dataUpdate)
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email);
            setDob(dataUpdate.dob);
            setFirstname(dataUpdate.firstname);
            setLastname(dataUpdate.lastname);
            setUsername(dataUpdate.username);


        }


    }, [dataUpdate]);
    const handleClose = () => {

        setShow(false);
        setEmail("");
        setDob("");
        setFirstname("");
        setLastname("");
        setPassword("");
        setUsername("");
    }

    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Xem thông tin người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3">
                    <div className="col-md-12">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input disabled type="email" className="form-control" id="inputEmail4" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="col-6">
                        <label for="inputUsername" className="form-label">Tên đăng nhập</label>
                        <input disabled={true} type="text" className="form-control" id="inputUsername" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Mật khẩu</label>
                        <input disabled type="password" className="form-control" id="inputPassword4" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="col-12">
                        <label for="inputDob" className="form-label">Ngày sinh</label>
                        <input disabled type="text" className="form-control" id="inputDob" placeholder="nn/TT/nnnn" value={dob} onChange={(event) => setDob(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputFirstname" className="form-label">Họ</label>
                        <input disabled type="text" className="form-control" id="inputFirstname" value={firstname} onChange={(event) => setFirstname(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputLastname" className="form-label">Tên</label>
                        <input disabled type="text" className="form-control" id="inputLastname" value={lastname} onChange={(event) => setLastname(event.target.value)} />
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
export default ViewUser;