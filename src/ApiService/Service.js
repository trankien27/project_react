import axios from "../utils/axiosCustomize";

var token = "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJraWVuIiwic3ViIjoiYWRtaW4iLCJleHAiOjE3MjM2NjQzNjUsImlhdCI6MTcyMzYyODM2NSwianRpIjoiODUwMmRkZDEtMGI5OS00YmQ5LTkyMDAtNmU5ZjY0ZGNhMDA1Iiwic2NvcGUiOiJST0xFX0FETUlOIn0.H-IVNNRSQz63HHbfN2DIn_BtmxZAnEkcr_mj8lQ6tGqhhPUhUZvjcABHqcox8Cy5BWJ4wMxCMeHvYgGmX0Ip_w";
const config = {
    headers: {
        "Authorization": `Bearer ${token}`,
    }
};


//User
//api get all user
const GetAllUser = () => {
    return axios.get('users', config)

}
export { GetAllUser }

// create new user
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
export { CreateNewUser }

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
export { UpdateUserApi }
const GetAllProduct = () => {
    return axios.get('products')
}
export { GetAllProduct }



//api kiểm tra username
const CheckExistedUsername = (username) => {
    return axios.get("users/" + username)

}
export { CheckExistedUsername }


//Product

//create new product
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
export { CreateNewProduct }

//update product
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
export { UpdateProductApi, DeleteProductApi }


const DeleteProductApi = (productId) => {

    return axios.delete('products/' + productId, config);

}