export const getFetch=(data:any)=>{
    return{
        type:"FETCH",
        payload:data
    }
}

export const errorOccur=()=>{
    return{
        type:"FETCH_ERROR",
        payload:{}
    }
}