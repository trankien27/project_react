import axios from "../utils/axiosCustomize";

var token = "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJraWVuIiwic3ViIjoiYWRtaW4iLCJleHAiOjE3MjM4MzE1MDEsImlhdCI6MTcyMzc5NTUwMSwianRpIjoiNWUyYmQ4NWUtZmUzMS00NzBiLWEzOGUtZmE1NzdmM2UzMzA1Iiwic2NvcGUiOiJST0xFX0FETUlOIn0.bO-sUAf2RX77Dd3DNPltiAiTPy_6RfYqky2t-7k-tWRgQcr59Urqa1z50u3oovHtMSZ8APrb_LSWzXL6Yt51jg";
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
    DeleteUserApi
}