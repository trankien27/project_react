import { Modal } from "react-bootstrap"
import './Order.scss'
import { GetAllDistrict, GetAllProvice, GetProvince, Order } from "../../ApiService/Service";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const OrderModal = (props) => {
    const formatter = new Intl.NumberFormat();
    const [listProvince, setListProvince] = useState();
    const [districts, setDistricts] = useState();
    const [selection, setSelection] = useState(1);
    const { show, setShow } = props;
    const { product } = props;


    const [fullname, setFullname] = useState();
    const [numberPhone, setNumberPhone] = useState();
    const [payment, setPayment] = useState("Thanh toán khi nhận hàng");
    const [email, setEmail] = useState();
    const [province, setProvince] = useState();
    const [district, setDistrict] = useState("Quận Ba Đình");
    const [note, setNote] = useState();
    const [quantityProduct, setQuantityProduct] = useState(1);



    const handleClose = () => {
        setShow(false);
    }
    const handleDecrese = () => {
        setQuantityProduct(quantityProduct - 1)
    }
    const fetchProvince = async () => {
        let res = await GetAllProvice();
        setListProvince(res.data)

    }

    const findProvince = async () => {
        let res = await GetProvince(selection);
        setProvince(res.data.name);
        console.log(province);
    }
    findProvince();
    const handleSubmit = async () => {
        try {
            let res = await Order(product.productName, fullname, numberPhone, payment, email, quantityProduct, district, province, note)
            console.log(res);
            toast.success("Đặt hàng thành công")
            handleClose();
        } catch (e) {
            toast.error("Đã xảy ra lỗi")
            console.log(e)
        }



    }


    const fetchDistricts = async () => {
        let res = await GetAllDistrict(selection);
        setDistricts(res.data.districts);


    }

    useEffect(() => {

        fetchProvince();
        fetchDistricts();
    }, [selection])

    return (
        <>


            <Modal className='modal-buy'
                show={show}
                size="xl"
                onHide={handleClose}
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Đặt hàng sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="body">

                    <div className="image-product">

                        <img src={product?.productImage} />
                        <p className="name"><span>Tên sản phẩm:</span>{product?.productName}</p>
                        <p className="price"><span>Giá :</span>{formatter.format(product?.productPrice)}</p>
                    </div>

                    <div className="input-info">
                        <label>Số lượng</label>
                        <div className="control">
                            <button disabled={quantityProduct <= 1} type="button" onClick={() => handleDecrese()}>-</button>
                            <input id="Number" name="Number" type="text" disabled value={quantityProduct} onChange={(event) => setQuantityProduct(event.target.value)} />
                            <button type="button" id="btnPlus" fdprocessedid="ui0nch" onClick={() => setQuantityProduct(quantityProduct + 1)}>+</button>
                        </div>
                        <label>Họ tên</label>
                        <input value={fullname} onChange={(e) => setFullname(e.target.value)} id="hoten" name="hoten" type="text" placeholder="Họ và tên" />


                        <label>Số điện thoại</label>
                        <input value={numberPhone} onChange={(e) => setNumberPhone(e.target.value)} id="sdt" name="sdt" type="text" placeholder="Số điện thoại" />


                        <label>Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" placeholder="Email" />
                        <label>Hình thức thanh toán</label>
                        <select value={payment} onChange={(e) => setPayment(e.target.value)} className="selection">

                            <option >Thanh toán khi nhận hàng</option>
                            <option >Thanh toán VNPAY</option>


                        </select>

                        <label>Địa chỉ</label>
                        <div className="address-input">


                            <select value={province} placeholder="Tỉnh / Thành phố" className="selection" onChange={(e) => {
                                setProvince()
                                setSelection(e.target.value)
                            }}>
                                {listProvince?.map((province) => {
                                    return (
                                        <option value={province?.code}>{province?.name}</option>
                                    )

                                })}
                            </select>

                            <select value={districts} onChange={(e) => setDistrict(e.target.value)} className="selection" placeholder="Quận/Huyện">
                                {districts?.map((district) => {
                                    return (
                                        <option value={district?.name}  >
                                            {district?.name}</option>
                                    )

                                })}
                            </select>
                        </div>
                        <div className="note-area">
                            <label>Địa chỉ cụ thể
                            </label>
                            <input value={note} onChange={(e) => setNote(e.target.value)} className="note" />
                        </div>
                    </div>

                </form></Modal.Body>
                <Modal.Footer className="modal-footer">
                    <div className="confirm-buy">
                        <button className="btn btn-primary" onClick={() => handleSubmit()}>Tiến hành mua hàng </button>
                    </div>

                </Modal.Footer>
            </Modal>
        </>
    );
}
export default OrderModal;