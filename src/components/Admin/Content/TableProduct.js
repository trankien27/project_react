import { useEffect, useState } from "react"
import { GetAllProduct } from "../../../ApiService/Service";
const TableProduct = (props) => {
    const [listProduct, setListProduct] = useState([]);
    const fetchlistProduct = async () => {
        let res = await GetAllProduct();
        // console.log(res.result)
        setListProduct(res.result)

    }

    useEffect(() => {
        fetchlistProduct();

    }, []);

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Số thứ tự</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Số lượng  </th>
                        <th scope="col">Giá </th>
                        <th scope="col">Mô tả </th>
                        <th scope="col">Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {listProduct && listProduct.length > 0 &&
                        listProduct.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{item.productName} </td>
                                    <td>{item.productQuantity}</td>
                                    <td>{item.productPrice}</td>
                                    <td>{item.productDescription}</td>
                                    <td>
                                        <button className="btn">View</button>
                                        <button className="btn btn-warning">Update</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    {listProduct && listProduct.length == 0 &&
                        <td>Danh sách người dùng trống</td>
                    }

                </tbody>
            </table>
        </>
    )

}
export default TableProduct;