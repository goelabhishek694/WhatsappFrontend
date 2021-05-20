import Axios from "axios";
const URL = process.env.REACT_APP_BACKEND_URL
const SECURITY_KEY = 'D73373D9B4ED6FEC5B8B2DAF6WA929B1C7D14CDC88B196EBDCCEA77AFF7BB9';

const getGroupById = async id => {
    if(id){
        let _userinfo = null;
        await Axios.post(`${URL}/group/get_by_id`, {id, key: SECURITY_KEY})
        .then(res => _userinfo = res.data)
        .catch(err => _userinfo =  err.response )
        return _userinfo
    }else return undefined;
}

export default getGroupById