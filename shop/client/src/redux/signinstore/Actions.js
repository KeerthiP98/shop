import Axios from "axios";


export const get_all_signusers='get_all_signusers';
export const get_all_signusers_success='get_all_signusers_success';
export const get_all_signusers_failure='get_all_signusers_failure';

export const get_signuser='get_signuser';
export const get_signuser_success='get_signuser_success';
export const get_signuser_failure='get_signuser_failure';


export const create_signuser='create_signuser';
export const create_signuser_success='create_signuser_success';
export const create_signuser_failure='create_signuser_failure';

export const update_signuser='update_signuser';
export const update_signuser_success='update_signuser_success';
export const update_signuser_failure='update_signuser_failure';

export const delete_signuser='delete_signuser';
export const delete_signuser_success='delete_signuser_success';
export const delete_signuser_failure='delete_signuser_failure';

export const update_input='update_input';
export const update_input_success='update_input_success';
export const update_input_failure='update_input_failure';






// get all signusers

export const getallsignusers=()=>{
    return async(dispatch)=>{
        try{
            dispatch({type:get_all_signusers});
            let dataUrl=`http://localhost:3002/api/signusers`;
            let response= await Axios.get(dataUrl);
            dispatch({type:get_all_signusers_success,  payload:response.data});
        }
        catch(error)
        {
            dispatch({type:get_all_signusers_failure,   payload:error});
        }
    }
}


// get single signuser

export const getsignuser=(signuserId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:get_signuser});
            let dataUrl=`http://localhost:3002/api/signusers/${signuserId}`;
            let response= await Axios.get(dataUrl);
            dispatch({type:get_signuser_success,  payload:response.data});
        }
        catch(error)
        {
            dispatch({type:get_signuser_failure,    payload:error});
        }
    }
}


// create new signuser

export const createsignuser=(user)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:create_signuser});
            let dataUrl='http://localhost:3002/api/signcreateuser';
            let response= await Axios.post(dataUrl,user);
            dispatch({type:create_signuser_success,  payload:response.data});
        }
        catch(error)
        {
            dispatch({type:create_signuser_failure,   payload:error});
        }
    }
}

// update input

export const updateinput=(key,value)=>{
    return {
        type:update_input,
        payload:{key,value}
    }
}

// update signuser

export const updatesignuser=(signuserId,signuser)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:update_signuser});
            let dataUrl=`http://localhost:3002/api/signupdateuser/${signuserId}`;
            let response= await Axios.put(dataUrl,signuser);
            dispatch({type:update_signuser_success,  payload:response.data});
        }
        catch(error)
        {
            dispatch({type:update_signuser_failure,  payload:error});
        }
    }
}

// delete signuser

export const deletesignuser=(signuserId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:delete_signuser});
            let dataUrl=`http://localhost:3002/api/signdeleteuser/${signuserId}`;
            let response= await Axios.delete(dataUrl);
            dispatch({type:delete_signuser_success, payload:response.data});
            dispatch(getallsignusers())

        }
        catch(error)
        {
            dispatch({type:delete_signuser_failure, payload:error});
        }
    }
}



