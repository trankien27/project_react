import { useState } from "react";
import "./Login.scss"
const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const hanldeLogin = () => {
        alert('login')
    }
    return (
        <div className="login-container">
            <div className="header">
                Bạn chưa có tài khoản?</div>

            <div className="title col-4 mx-auto">
                Shop Mobile</div>

            <div className="welcome col-4 mx-auto">
                Xin chào!</div>

            <div className="content-form col-4 mx-auto">
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
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                    <span className="forgot-password">Quên mật khẩu?</span>
                    <div>
                        <button className="btn-login"
                            onClick={() => hanldeLogin()}
                        >Đăng nhập</button>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default Login;