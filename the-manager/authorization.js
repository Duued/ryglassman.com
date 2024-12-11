/*(import {Pool} from 'pg'
require('dotenv').config()

const pool = new Pool({
    host:"localhost",
    user: "dogs",
    pass: process.env.password
})
*/

const login_password = document.getElementById('password');

function checkAuth(){
    if(login_password.value == 'test'){
        login_password.style = "background-color: green";
    }
    else{
        login_password.style = "background-color: red;";
    }


}