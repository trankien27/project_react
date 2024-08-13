import axios from "../utils/axiosCustomize";

var token = "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJraWVuIiwic3ViIjoiYWRtaW4iLCJleHAiOjE3MjM1OTgyNjgsImlhdCI6MTcyMzU2MjI2OCwianRpIjoiY2YwZGZmODgtYmRjYy00ZWFkLThkYTEtNzAxNzk2NGRjYjg3Iiwic2NvcGUiOiJST0xFX0FETUlOIn0.1kcpNKyV-JKxjOc2z41Eo5oSp_bGJcBzURT2t41wjN-ObTLUBBtBAAzARTcaToVvl_CjMIXiNh7PBeuP3yozng";
const config = {
    headers: {
        "Authorization": `Bearer ${token}`,
    }
};

//api get all user
const GetAllUser = () => {
    // var token = "";
    // const config = {
    //     headers: {
    //         "Authorization": `Bearer ${token}`,
    //     }
    // };

    return axios.get('users', config)

}
export { GetAllUser }
const GetAllProduct = () => {
    return axios.get('products')
}
export { GetAllProduct }

//api thêm người dùng
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

//api kiểm tra username
const CheckExistedUsername = (username) => {
    return axios.get("users/" + username)

}
export { CheckExistedUsername }


//api thêm sản phẩm



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

const UpdateProductApi = (idProduct, nameProduct, descriptionProduct, imgProduct, quantityProduct, priceProduct) => {

    // var token = "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJraWVuIiwic3ViIjoiYWRtaW4iLCJleHAiOjE3MjM1MTIyNTcsImlhdCI6MTcyMzQ3NjI1NywianRpIjoiMTU4N2U3MzQtODM5Mi00ZjliLTg2YzYtNmJlMDVkNjQxMWE2Iiwic2NvcGUiOiJST0xFX0FETUlOIn0.-FMEHixolRbxmJVskMitiQ6ZCr15uGLPUPHE6yTk5TY0I3KjA-eozPUekdEu2EJd5BxFa7ytW6kjoLVrXDeUSA";
    // const config = {
    //     headers: {
    //         "Authorization": `Bearer ${token}`,
    //     }
    // };
    const formdata = new FormData();
    formdata.append('productName', nameProduct);
    formdata.append('productDescription', descriptionProduct);
    formdata.append('productImage', imgProduct);
    formdata.append('productQuantity', quantityProduct);
    formdata.append('productPrice', priceProduct);

    let data = Object.fromEntries(formdata.entries());
    return axios.put("products/" + idProduct, data, config);

}
export { UpdateProductApi }

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
