
import axiosinstance from "../helper/axioxInstance";

export async function FetchCoinData(page=2, currency='usd'){
    const perpage = 10;
    
    try {
        const response = await axiosinstance.get(`/coins/markets?vs_currency=${currency}&order= market_cap_desc&per_page=${perpage}&page=${page}`)
        
        return response.data;
        
    } catch (error) {
        console.error(error);
        return null;
        
        
    }

}
