import axios from "axios";


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
    return axios.post('http://localhost:8080/users', data);

}
export { CreateNewUser }

//api kiểm tra username
const CheckExistedUsername = (username) => {
    return axios.get("http://localhost:8080/users/" + username)

}
export { CheckExistedUsername }


//api thêm sản phẩm



const CreateNewProduct = (nameProduct, descriptionProduct, imgProduct, quantityProduct, priceProduct) => {
    var token = "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJraWVuIiwic3ViIjoiYWRtaW4iLCJleHAiOjE3MjMwNjA0OTMsImlhdCI6MTcyMzAyNDQ5MywianRpIjoiNDFlNWMzMzEtZWNiYi00ZmZiLWI5ZTYtM2MwYWQ1YmYyNmI1Iiwic2NvcGUiOiJST0xFX0FETUlOIn0.fHw8DyAN6ni1U49f4p3WRZje8a24NiUGBRW_RWofukuRB58nCKTO9gZMQ9yBf1LdOrI0KCivBInFic4I9kiPoQ";
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    };
    const formdata = new FormData();
    formdata.append('productName', nameProduct);
    formdata.append('productDescription', descriptionProduct);
    formdata.append('productImage', imgProduct);
    formdata.append('productQuantity', quantityProduct);
    formdata.append('productPrice', priceProduct);

    let data = Object.fromEntries(formdata.entries());
    return axios.post('http://localhost:8080/products', data, config);

}
export { CreateNewProduct }