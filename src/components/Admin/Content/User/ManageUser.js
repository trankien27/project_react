import { useState } from 'react';
import UserModal from './CreateUser';
import { FcPlus } from "react-icons/fc";
import './ManageUser.scss';
import TableUser from './TableUser';
import { useEffect } from "react"
import { GetAllUser } from "../../../../ApiService/Service";




const ManageUser = (props) => {
    const [listUser, setListUser] = useState([]);

    const fetchUser = async () => {
        let res = await GetAllUser();
        console.log(res);
        setListUser(res.result)
    }

    useEffect(() => {
        fetchUser();
    }, []);

    const [showModal, setShowModal] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">
                Quản lý người dùng
            </div>
            <div className="user-content">
                <div className='btn-add-user'>
                    <button onClick={() => setShowModal(true)} className='btn btn-primary' >Thêm người dùng <FcPlus /></button>
                    <UserModal
                        fetchUser={fetchUser}
                        show={showModal}
                        setShow={setShowModal} />
                </div>
                <div>
                    <TableUser listUser={listUser} />
                </div>
            </div>

        </div>
    )
}
export default ManageUser;