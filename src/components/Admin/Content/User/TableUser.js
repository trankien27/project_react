import { useState } from "react"

const TableUser = (props) => {

    const { listUser } = props;

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Số thứ tự</th>
                        <th scope="col">Username</th>
                        <th scope="col">Họ </th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Ngày sinh</th>
                        <th scope="col">Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{item.username} </td>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.dob}</td>
                                    <td>   <button className="btn btn-secondary" onClick={() => props.handleViewUser(item)}>View</button>
                                        <button className="btn btn-warning"
                                            onClick={() => props.hanldeUpdateUser(item)}
                                        >Update</button>
                                        <button className="btn btn-danger"
                                            onClick={() => props.hanldeDeleteUser(item)}
                                        >Delete</button></td>

                                </tr>
                            )
                        })
                    }

                    {listUser && listUser.length == 0 &&
                        <td>Danh sách người dùng trống</td>
                    }

                </tbody>
            </table>
        </>
    )

}
export default TableUser