import { useState } from "react";
import './Register.scss'
import { useNavigate } from "react-router-dom";
import { CheckExistedUsername, CreateNewUser } from "../../ApiService/Service";
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const Register = () => {
    const [isShowPass, setIsShowPass] = useState(false);

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        // if (username || firstname || lastname || email || dob || password === "") {
        //     toast.warning("Không được để trống thông tin")
        //     return
        // }\

        //validate username

        let res = await CheckExistedUsername(username);
        console.log(res.result)
        if (res.result) {
            toast.error("username đã tồn tại!")
            return
        }

        try {
            console.log(password)
            let res = await CreateNewUser(username, firstname, lastname, email, dob, password);
            console.log(res.result);
            toast.success("Đăng ký thành công!")
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error("Đã xảy ra lỗi!")
        }

    }
    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration">
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Đăng Ký</h3>


                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label" for="firstName">Họ </label>
                                                <input
                                                    value={firstname} onChange={(event) => setFirstname(event.target.value)}
                                                    type="text" id="firstName" className="form-control form-control-lg" />

                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label" for="lastName">Tên</label>
                                                <input
                                                    value={lastname} onChange={(event) => setLastname(event.target.value)}
                                                    type="text" id="lastName" className="form-control form-control-lg" />

                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 d-flex align-items-center">

                                            <div data-mdb-input-init className="form-outline datepicker w-100">
                                                <label for="birthdayDate" className="form-label">Ngày sinh</label>
                                                <input
                                                    value={dob} onChange={(event) => setDob(event.target.value)}
                                                    type="date" className="form-control form-control-lg" id="birthdayDate" />

                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label" for="emailAddress">Email</label>
                                                <input
                                                    value={email} onChange={(event) => setEmail(event.target.value)}
                                                    type="email" id="emailAddress" className="form-control form-control-lg" />

                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label" for="username">Username</label>
                                                <input
                                                    value={username} onChange={(event) => setUsername(event.target.value)}
                                                    type="text" id="username" className="form-control form-control-lg" />

                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label" for="phoneNumber">Mật khẩu</label>
                                                <input
                                                    value={password} onChange={(event) => setPassword(event.target.value)}
                                                    type={isShowPass ? "text" : "password"} id="phoneNumber" className="form-control form-control-lg" />
                                                {isShowPass ?
                                                    <span className="icons-eye" onClick={() => setIsShowPass(false)}>
                                                        <VscEye />
                                                    </span>
                                                    :
                                                    <span className="icons-eye" onClick={() => setIsShowPass(true)}>
                                                        <VscEyeClosed />
                                                    </span>
                                                }
                                            </div>

                                        </div>
                                    </div>
                                    <div className="mt-4 pt-2">
                                        <button onClick={handleRegister} className="btn btn-primary btn-lg">Đăng ký</button>
                                    </div>
                                    <div className="text">
                                        <span onClick={() => { navigate("/") }}>&#60;&#60;Trở về trang chủ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Register;