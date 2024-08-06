import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import './ManageUser.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
const UserModal = (props) => {

    const { show, setShow } = props;
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [token, setToken] = useState("");

    const handleClose = () => setShow(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    const handleSubmit = async () => {
        const isValidEmail = validateEmail(email);

        let login = {
            username: 'admin',
            password: 'admin'
        }
        await axios.post('http://localhost:8080/auth/token', login).then(res => {
            setToken(res.data.result.token);
        })

        //validate emaill
        if (!isValidEmail) {
            toast.error('Email nhập sai định dạng!')
            return;
        }
        if (!password) {
            toast.error('Mật khẩu không được để trống!');
            return;
        }



        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        };
        const formdata = new FormData();
        formdata.append('username', username);
        formdata.append('firstname', firstname);
        formdata.append('lastname', lastname);
        formdata.append('email', email);
        formdata.append('dob', dob);
        formdata.append('password', password);

        let data = Object.fromEntries(formdata.entries());
        console.log(data)
        await axios.post('http://localhost:8080/users', data, config)
            .then(response => {
                setShow(false);
                setEmail("");
                setDob("");
                setFirstname("");
                setLastname("");
                setPassword("");
                setUsername("");
                toast.success("Thêm người đùng thành công");

            })
            .catch(error => {
                console.log(error);
            });

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
                    <Modal.Title>Thêm người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3">
                    <div className="col-md-12">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="col-6">
                        <label for="inputUsername" className="form-label">Tên đăng nhập</label>
                        <input type="text" className="form-control" id="inputUsername" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Mật khẩu</label>
                        <input type="password" className="form-control" id="inputPassword4" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="col-12">
                        <label for="inputDob" className="form-label">Ngày sinh</label>
                        <input type="date" className="form-control" id="inputDob" placeholder="nn/TT/nnnn" value={dob} onChange={(event) => setDob(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputFirstname" className="form-label">Họ</label>
                        <input type="text" className="form-control" id="inputFirstname" value={firstname} onChange={(event) => setFirstname(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputLastname" className="form-label">Tên</label>
                        <input type="text" className="form-control" id="inputLastname" value={lastname} onChange={(event) => setLastname(event.target.value)} />
                    </div>


                </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}




const ManageUser = (props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">
                Quản lý người dùng
            </div>
            <div className="user-content">
                <div className='btn-add-user'>
                    <button onClick={() => setShowModal(true)} className='btn btn-primary' >Thêm người dùng <FcPlus /></button>
                    <UserModal show={showModal} setShow={setShowModal} />
                </div>
                <div>
                    table user
                </div>
            </div>

        </div>
    )
}
export default ManageUser;