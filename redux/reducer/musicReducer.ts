export const initialState={
    loading:true,
    data:[],
    error:''
}

export const musicReducer= (state=initialState,action:any) =>{

        switch (action.type) {
            
            case "FETCH":
                return{
                    ...state,
                    data:action.payload,
                    loading:false

                }
                
            case "FETCH_ERROR":
                    return{
                        data:[],
                        loading:false,
                        error:'error'
    
                    }    
        
            default:
                state;
        }
}