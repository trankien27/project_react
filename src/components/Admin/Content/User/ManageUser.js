import { useState } from 'react';
import UserModal from './CreateUser';
import { FcPlus } from "react-icons/fc";
import './ManageUser.scss';
import TableUser from './TableUser';
import { useEffect } from "react"
import { GetAllUser } from "../../../../ApiService/Service";
import UpdaetUserModal from './UpdateUser';
import ViewUser from './ViewUser';
import { constant } from 'lodash';




const ManageUser = (props) => {
    const [listUser, setListUser] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [dataUpdate, setDataUpdate] = useState();
    const fetchUser = async () => {
        let res = await GetAllUser();
        console.log(res);
        setListUser(res.result)
    }

    useEffect(() => {
        fetchUser();
    }, []);

    //function update
    const hanldeUpdateUser = (user) => {
        setDataUpdate(user);
        setShowUpdateModal(true);
    }


    //function viewUser
    const handleViewUser = (user) => {
        setDataUpdate(user);
        setShowViewModal(true);
    }

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
                <UpdaetUserModal
                    dataUpdate={dataUpdate}
                    show={showUpdateModal}
                    setShow={setShowUpdateModal}
                    fetchUser={fetchUser}

                />
                <div>
                    <TableUser
                        hanldeUpdateUser={hanldeUpdateUser}
                        handleViewUser={handleViewUser}
                        listUser={listUser} />

                </div>
                <div>
                    <ViewUser
                        dataUpdate={dataUpdate}
                        show={showViewModal}
                        setShow={setShowViewModal}

                    />
                </div>
            </div>

        </div>
    )
}
export default ManageUser;