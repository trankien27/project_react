import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        let login = {
            username: username,
            password: password
        }
        await axios.post('http://localhost:8080/auth/token', login).then(res => {
            console.log(res.data.result.token);
        })
    }
    return (
        <div className='login-container' >
            <Form action='/' className='form-login'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={(event) => {
                        setUsername(event.target.value)
                    }} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(event) => {
                        setPassword(event.target.value)
                    }} />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Login;