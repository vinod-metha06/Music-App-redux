export const initialState={
    loading:false,
    data:[],
    error:''
}

export const rredcuer=(state=initialState,action:any)=>{
   switch (action.type) {
    case "FETCH":
        return{
            ...state,
            loading:false,
            data:action.payload
        }
    case "FETCH_ERROR":
            return{
                ...state,
                loading:false,
                data:action.payload
            }
   
    default:
        state;
   }
}