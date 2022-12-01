import axios from 'axios';
const url='https://itunes.apple.com/search?term='

export const  getResponse=async(name:any)=>{
    try {
        const res=await axios.get(url+`${name}`);
        console.log(res.data);
        return res.data.results;
    } catch (error) {
        return 'error'
    }
}