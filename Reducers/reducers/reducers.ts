export const initialState={
     loading:true,
     data:[],
     error:''
}

export const reducer=(state=initialState,action:any)=>{
    switch (action.type) {
        case "FETCH_SUCCESS":
            return{
                ...state,
                loading:false,
                data:action.payload
            }
        case "FETCH_ERROR":
            return{
                   
                    loading:false,
                    data:[],
                    error:'error'
                }
    
        default:
            state;
    }
}