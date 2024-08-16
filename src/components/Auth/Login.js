import { useState } from "react";
import "./Login.scss"
import { useNavigate } from "react-router-dom";
import { PostLogin } from "../../ApiService/Service";
import { toast, ToastContainer } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const Login = () => {
    const [isShowPass, setIsShowPass] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const hanldeLogin = async (username, password) => {
        await PostLogin(username, password).then((res) => {


            toast.success('Đăng nhập thành công!');
            if (res.result.role[0].name == "ADMIN") {
                navigate('/admin');
            } else {
                navigate('/')
            }
        }).catch((error) => {

            toast.error("Sai tài khoản hoặc mật khẩu");

        })




    }
    return (
        <div className="login-container">
            <div className="header">
                <span>
                    Bạn chưa có tài khoản?
                </span>
                <button onClick={() => { navigate("/register") }}>
                    Đăng ký
                </button>
            </div>

            <div className="title col-4 mx-auto">
                Shop Mobile</div>

            <div className="welcome col-4 mx-auto">
                Xin chào!</div>

            <div className="content-form col-3 mx-auto">
                <div className='form-group'>
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    ></input>
                    <label>Mật khẩu</label>
                    <input
                        type={isShowPass ? "text" : "password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                    {isShowPass ?
                        <span className="icons-eye" onClick={() => setIsShowPass(false)}>
                            <VscEye />
                        </span>
                        :
                        <span className="icons-eye" onClick={() => setIsShowPass(true)}>
                            <VscEyeClosed />
                        </span>
                    }
                    <span className="forgot-password">Quên mật khẩu?</span>
                    <div>
                        <button className="btn-login"
                            onClick={() => hanldeLogin(username, password)}
                        >Đăng nhập</button>
                    </div>
                    <div className="text-center">
                        <span onClick={() => { navigate("/") }}>&#60;&#60;Trở về trang chủ</span>
                    </div>

                </div>
            </div>

        </div>
    )

}
export default Login;