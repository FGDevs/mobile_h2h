const INITIAL_STATE = {
    parcels:[],
    products:[],
    isLoading:false
};

export default (state=INITIAL_STATE, action)=>{
    switch(action.type) {
        case 'LOAD'    :
            return {...state,...action.payload,isLoading:false}
        case 'LOADING'  :
            return {...state,isLoading:true}
        case 'ERROR'    :
            return {...state,isLoading:false}
        case 'LOGOUT'   :
            return INITIAL_STATE
        default:
            return state
    };
}