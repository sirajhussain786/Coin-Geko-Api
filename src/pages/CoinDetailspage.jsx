import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FetchCoinDetails } from "../Service/FetchCoinDetails";
import PageLoader from "../Components/Loader/PageLoader";




function CoinDetailsPage(){
    const {coinId} = useParams();

     const { data: coin, isError, isLoading } = useQuery({
    queryKey: ["coin", coinId],
    queryFn: () => FetchCoinDetails(coinId),
        cacheTime: 1000 * 60 * 8,
        staleTime: 1000 * 60 * 8,
    
  });


    if(isLoading){
        return <PageLoader/>
    }
    if(isError){
        return <div>Error: something went wrong</div>
    }
    return(
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-center w-full mt-6 border-r-2 border-gray-500 md:w-1/3 md:mt-0">
                <img className="mb-5 h-52"
                alt={coin?.name}
                src={coin?.image.large} />

                <h1 className="text-3xl font-bold text-white">
                    {coin?.name}
                </h1>

                <p className="px-3 py-5 text-justify">
                    {coin?.description.en}
                </p>
                <div className="flex flex-col w-full md:flex-row md:justify-around">
                    <div className="flex gap-2">
                        <h1 className="text-2xl font-bold text-green-600">Rank</h1>
                        <span className="text-2xl text-red-600">{coin?.market_cap_rank}</span>
                    </div>
                    <div>
                        <div className="flex gap-2">
                        <h1 className="text-2xl font-bold text-green-600"> Current Price</h1>
                        <span className="text-2xl text-red-600">{coin?.market_data.current_price["usd"]}</span>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default CoinDetailsPage;