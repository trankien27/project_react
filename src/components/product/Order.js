import { Modal } from "react-bootstrap"
import './Order.scss'
import { GetAllProvice } from "../../ApiService/Service";
import { useEffect, useState } from "react";
import SelectionAdress from "./SelectionAdress";
const OrderModal = (props) => {
    const showModal = props;
    const [listProvince, setListProvince] = useState();
    const fetchProvince = async () => {
        let res = await GetAllProvice();
        setListProvince(res.data)
        console.log(res);
    }
    useEffect(() => {
        fetchProvince();
    }, [])
    return (
        <>


            <Modal className='modal-buy'
                show={showModal}
                size="xl"

                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Đặt hàng sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="body">

                    <div className="image-product">
                        <img src="https://cdn-images.vtv.vn/2019/10/10/photo-1-1570646414965538138380.jpg" />
                        <p>Iphone</p>
                        <p>9,9999999 Đ</p>
                    </div>

                    <div className="input-info">
                        <label>Số lượng</label>
                        <div className="control">
                            <button type="button" id="btnMinutes" fdprocessedid="w9ovnv">-</button>
                            <input id="Number" name="Number" type="text" value="1" />
                            <button type="button" id="btnPlus" fdprocessedid="ui0nch">+</button>
                        </div>
                        <label>Họ tên</label>
                        <input id="hoten" name="hoten" type="text" placeholder="Họ và tên" />


                        <label>Số điện thoại</label>
                        <input id="sdt" name="sdt" type="text" placeholder="Số điện thoại" />


                        <label>Email</label>
                        <input id="email" name="email" type="email" placeholder="Email" />
                        <label>Hình thức thanh toán</label>
                        <select className="selection">

                            <option value="1">Thanh toán khi nhận hàng</option>
                            <option value="2">Thanh toán VNPAY</option>


                        </select>
                        <SelectionAdress />
                        <label>Địa chỉ</label>
                        <div className="address-input">


                            <select className="selection">
                                {listProvince && listProvince.map((province, index) => {
                                    return (
                                        <option value="1">{province.name}</option>
                                    )

                                })}
                            </select>

                            <select className="selection">
                                {listProvince && listProvince.map((province, index) => {
                                    return (
                                        <option value="1">{province.name}</option>
                                    )

                                })}
                            </select>
                        </div>
                    </div>

                </form></Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default OrderModal;