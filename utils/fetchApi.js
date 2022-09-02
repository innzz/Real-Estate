import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";


export const fetchApi = async (url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'ba16cb5be2msh6535b6ead74c882p15ce85jsn0b795a808275',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}