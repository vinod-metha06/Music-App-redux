import axios from 'axios';

export const  getData=async()=>{
        try {
            console.log("Calling API....")
            const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(res.data)
            return res.data;
        } catch (error) {
            return 'error'
        }
}