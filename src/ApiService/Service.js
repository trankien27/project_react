import axios from "../utils/axiosCustomize";
import axiosDefault from "../utils/axiosDefault";
localStorage.getItem('JWT')
console.log(localStorage.getItem('JWT'))
var token = localStorage.getItem('JWT')
const config = {


    headers: {
        "Authorization": `Bearer ${token}`,


    }

};


//0 login
const PostLogin = (username, password) => {
    const formdata = new FormData();
    formdata.append('username', username);
    formdata.append('password', password);


    let data = Object.fromEntries(formdata.entries());

    return axios.post('auth/token', data);
}
//1.User
//1.1.api get all user
const GetAllUser = () => {
    return axios.get('users', config)

}
// 1.2create new user
const CreateNewUser = (username, firstname, lastname, email, dob, password) => {
    const formdata = new FormData();
    formdata.append('username', username);
    formdata.append('firstname', firstname);
    formdata.append('lastname', lastname);
    formdata.append('email', email);
    formdata.append('dob', dob);
    formdata.append('password', password);

    let data = Object.fromEntries(formdata.entries());
    console.log(data)
    return axios.post('users', data);

}

//1.3 update user
const UpdateUserApi = (userID, username, firstname, lastname, email, dob, password) => {

    const formdata = new FormData();
    formdata.append('username', username);
    formdata.append('firstname', firstname);
    formdata.append('lastname', lastname);
    formdata.append('email', email);
    formdata.append('dob', dob);
    formdata.append('password', password);

    let data = Object.fromEntries(formdata.entries());
    console.log(data)
    return axios.put('users/' + userID, data, config);

}
//1.4 api kiểm tra username
const CheckExistedUsername = (username) => {
    return axios.get("users/" + username)
}
//1.5 api delete user
const DeleteUserApi = (userID) => {

    return axios.delete('users/' + userID, config);
}
//2Product
//2.1 get all product
const GetAllProduct = () => {
    return axios.get('products')
}

//2.2 create new product
const CreateNewProduct = (nameProduct, descriptionProduct, imgProduct, quantityProduct, priceProduct) => {


    const formdata = new FormData();
    formdata.append('productName', nameProduct);
    formdata.append('productDescription', descriptionProduct);
    formdata.append('productImage', imgProduct);
    formdata.append('productQuantity', quantityProduct);
    formdata.append('productPrice', priceProduct);

    let data = Object.fromEntries(formdata.entries());
    return axios.post('products', data, config);

}

//2.3 update product
const UpdateProductApi = (idProduct, nameProduct, descriptionProduct, imgProduct, quantityProduct, priceProduct) => {
    const formdata = new FormData();
    formdata.append('productName', nameProduct);
    formdata.append('productDescription', descriptionProduct);
    formdata.append('productImage', imgProduct);
    formdata.append('productQuantity', quantityProduct);
    formdata.append('productPrice', priceProduct);

    let data = Object.fromEntries(formdata.entries());
    return axios.put("products/" + idProduct, data, config);

}
//2.4 xoá sản phẩm
const DeleteProductApi = (productId) => {

    return axios.delete('products/' + productId, config);
}
const GetProductWithPaginate = (pageNo, PageSize) => {

    return axios.get(`products?pageNo=${pageNo}&pageSize=${PageSize}`);
}
const GetAllProvice = () => {
    return axiosDefault.get('https://provinces.open-api.vn/api/?depth=2')
}
const GetProvince = (provinceCode) => {
    return axiosDefault.get(`https://provinces.open-api.vn/api/p/${provinceCode}`)
}
const GetAllDistrict = (provinceCode) => {
    return axiosDefault.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
}

const Order = (productName, fullname, numberPhone, payment, email, quantityProduct, district, province, note
) => {
    const formdata = new FormData();
    formdata.append('productName', productName);
    formdata.append('fullname', fullname);
    formdata.append('numberPhone', numberPhone);
    formdata.append('payment', payment);
    formdata.append('email', email);
    formdata.append('quantityProduct', quantityProduct);
    formdata.append('district', district);
    formdata.append('province', province);
    formdata.append('note', note);

    let data = Object.fromEntries(formdata.entries());
    return axios.post(`order`, data, config)
}
export {
    PostLogin,

    GetAllProduct,
    UpdateProductApi,
    DeleteProductApi,
    CreateNewProduct,
    GetProductWithPaginate,

    CheckExistedUsername,
    UpdateUserApi,
    GetAllUser,
    CreateNewUser,
    DeleteUserApi,
    GetAllDistrict,
    GetAllProvice,
    GetProvince,
    Order
}
