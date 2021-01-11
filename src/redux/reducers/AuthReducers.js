const INITIAL_STATE = {
    username    : "",
    isLogin     : true,
    isLoading   : false
};

export default (state=INITIAL_STATE, action)=>{
    switch(action.type) {
        case 'LOGIN'    :
            return {...state,...action.payload,isLoading:false,isLogin:true}
        case 'LOADING'  :
            return {...state,isLoading:true}
        case 'ERROR'    :
            return {...state,isLoading:false}
        case 'LOGOUT'   :
            return INITIAL_STATE
        default:
            return state
    };
};
