import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { toast } from 'react-toastify';
import { parseISO, differenceInYears } from 'date-fns';
import { CheckExistedUsername, CreateNewUser } from '../../../../ApiService/Service';
import { useState } from 'react';
const UserModal = (props) => {


    const { show, setShow } = props;
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");


    const handleClose = () => {

        setShow(false);
        setEmail("");
        setDob();
        setFirstname("");
        setLastname("");
        setPassword("");
        setUsername("");
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    const handleSubmit = async () => {
        console.log(typeof dob)
        //validate age
        var nowDate = new Date();
        const birthDate = parseISO(dob);
        if (differenceInYears(nowDate, birthDate) < 18) {
            toast.warning("Bạn phải ít nhất 18 tuổi!")
            return;
        }


        //validate Username

        let res = await CheckExistedUsername(username);
        console.log(res.result)
        if (res.result) {
            toast.error("username đã tồn tại!")
            return
        }

        //validate email
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Email nhập sai định dạng!')
            return;
        }
        //check null password
        if (!password || !firstname || !lastname || !dob) {
            toast.warning('Không được để trống thông tin!');
            return;
        }

        await CreateNewUser(username, firstname, lastname, email, dob, password)
            .then(async (response) => {
                handleClose();
                toast.success("Thêm người đùng thành công");
                await props.fetchUser();

            })
            .catch(error => {
                toast.error('Đã xảy ra lỗi vì bạn nhập sai(Tên đăng nhập trùng hoặc ngày sinh không hợp lệ)')
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
export default UserModal;