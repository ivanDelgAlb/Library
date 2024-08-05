import Axios from 'axios';
import Swal from 'sweetalert2';
import appServices from './appServices';

const addUser = (user) => {
    if(user[2] === user[3]){
        Axios.post("http://localhost:8080/api/users", {
            name: user[0],
            email: user[1],
            password: user[2]
        }).then((res) => {
            if (res.data === 'duplicated_username'){
                Swal.fire({
                    icon: 'info',
                    html:
                    '<h3> Username already taken! </h3>' +
                    'The username you chose is already taken. Please try with a new one.',
                })
            } else if (res.data === 'duplicated_email'){
                Swal.fire({
                    icon: 'info',
                    html:
                    '<h3> Email already in use </h3>' +
                    'This email has an account created.',
                })
            } else {
                Swal.fire({
                    icon: 'success',
                    html:
                    '<h3> User created successfully </h3>' + 
                    'Now you can login with your account!',
                    confirmButtonText: "Go to login"
                }).then(() => {
                    appServices.moveToLogin();
                })
            }
        })
    } else {
        Swal.fire({
            icon: 'error',
            html:
            '<h3> Passwords do not match! </h3>' +
            'Passwords do not match. Please try again.',
        })
    }
}

const userService = {addUser};

export default userService;