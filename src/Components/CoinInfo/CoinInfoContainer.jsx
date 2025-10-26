import { useContext, useState } from "react";
import CoinInfo from "./CoinInfo";
import PageLoader from "../Loader/PageLoader";
import Alert from "../Alert/Alert";
import { fetchCoinHistory } from "../../Service/FetchCoinHistory";
import { currencycontext } from "../../currencycontext";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function CoinInfoContainer() {
    const { coinId } = useParams();
    const {currency} = useContext(currencycontext);
    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('');
    const {data:historic, isError, isLoading } = useQuery({

        queryKey: ["coinHistoric", coinId, currency, days, interval],
        queryFn: () => fetchCoinHistory(coinId, interval, days, currency),
            cacheTime: 1000 * 60 * 8,
            staleTime: 1000 * 60 * 8,   
        });
        if(isLoading){
            return <PageLoader/>
        }
        if(isError){
            return <Alert message="Error fetching data" type="Error"/>
        }
    return (
        <div>
        <CoinInfo historic={historic} setCoinInterval={setCoinInterval} setDays={setDays} days={days}/>
        </div>
    )
}
export default CoinInfoContainer;