import axios from 'axios';
import NProgress from 'nprogress';

NProgress.configure({
    showSpinner: false,
    trickleSpeed: 100
})
const axiosCustomize = axios.create({
    baseURL: 'http://localhost:8080/',
});
// Add a request interceptor
axiosCustomize.interceptors.request.use(function (config) {
    // Do something before request is sent
    NProgress.start();
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosCustomize.interceptors.response.use(function (response) {
    NProgress.done();
    console.log('intercepter' + response)
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data && response ? response.data : response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosCustomize;