import * as Actions from './Actions';

export const signuserFeatureKey ="signusers";
let initialState ={
    errorMessage:"",
    signusers:[],
    signuser:{}
}

const Reducer=(state=initialState,action)=>{
    let {type,payload}=action;
    switch(type)
    {
        //get all signusers
        case Actions.get_all_signusers:
            return   {...state}
            

            //get all signusers success
            case Actions.get_all_signusers_success:
                return {
                    ...state,
                    signusers:payload
                }

           //get all signusers failure

           case Actions.get_all_signusers_failure:
                return {
                    ...state,
                    errorMessage:payload
                }


                //get  signuser
        case Actions.get_signuser:
            return   {...state}
            

            //get  signuser success
            case Actions.get_signuser_success:
                return {
                    ...state,
                    signuser:payload
                }

           //get  signuser failure

           case Actions.get_signuser_failure:
                return {
                    ...state,
                    errorMessage:payload
                }
  


                //create  signuser
        case Actions.create_signuser:
            return   {...state}
            

            //create  signuser success
            case Actions.create_signuser_success:
                return {
                    ...state
                
                }

           //create  signuser failure

           case Actions.create_signuser_failure:
                return {
                    ...state
                    
                }


                //update input
                case Actions.update_input:
                    return{
                        ...state,
                        signuser:{
                            ...state.signuser,
                            [payload.key]:payload.value
                        }
                    }


                    //update  signuser
        case Actions.update_signuser:
            return   {...state,}
            

            //update  signuser success
            case Actions.update_signuser_success:
                return {
                    ...state,
                
                }

           //update  signuser failure

           case Actions.update_signuser_failure:
                return {
                    ...state,
                    
                }


                //delete  signuser
        case Actions.delete_signuser:
            return   {...state}
            

            //delete  signuser success
            case Actions.delete_signuser_success:
                return {
                    ...state,
                
                }

           //delete  signuser failure

           case Actions.delete_signuser_failure:
                return {
                    ...state,
                    
                }
                

                default :
                return state;
            

    }
}

export {Reducer}