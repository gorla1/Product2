import Axios from 'axios'
import { host } from './keys'
host

export default Axios.create({
    baseURL : host,
    headers : {
        Authorization : localStorage.getItem('key') ? localStorage.getItem('key') : ""
        }
})


