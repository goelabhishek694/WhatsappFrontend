import Axios from  "axios";
const URL = process.env.REACT_APP_BACKEND_URL
const SECURITY_KEY = 'D73373D9B4ED6FEC5B8B2DAF6WA929B1C7D14CDC88B196EBDCCEA77AFF7BB9';

const getGroupByCode = async code => {
    if(code){
        let _group_info = null;
        await Axios.post(`${URL}/group/get_by_code`, {code, key: SECURITY_KEY})
        .then(res => _group_info = res.data)
        .catch(err => _group_info =  err.response )
        return _group_info
    }else return undefined;
}

export default getGroupByCode