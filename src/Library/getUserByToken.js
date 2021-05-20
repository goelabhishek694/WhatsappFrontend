import Axios from "axios";
const URL = process.env.REACT_APP_BACKEND_URL
const SECURITY_KEY = 'D73373D9B4ED6FEC5B8B2DAF6WA929B1C7D14CDC88B196EBDCCEA77AFF7BB9';

const getUserByToken = async token => {
    if(token){
        let _userinfo = null;
        await Axios.post(`${URL}/users/get_by_token`, {token, SECURITY_KEY})
        .then(res => _userinfo = res.data)
        .catch(err => _userinfo =  err.response )
        return _userinfo
    }else return undefined;
}

export default getUserByToken;