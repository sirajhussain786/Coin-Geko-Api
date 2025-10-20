
import axiosinstance from "../helper/axioxInstance";

export async function FetchCoinDetails(id){
  
    
    try {
        const response = await axiosinstance.get(`/coins/${id}`)
        
        return response.data;
        
    } catch (error) {
        console.error(error);
        return null;
        
        
    }

}
