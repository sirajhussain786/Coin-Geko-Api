import { useQuery } from '@tanstack/react-query';
import {  useContext, useState } from 'react';
import { FetchCoinData } from '../Service/FetchCoinData';
import { currencycontext } from '../currencycontext';
import { useNavigate } from 'react-router-dom';


function CoinTable() {
  const {currency} = useContext(currencycontext);
  const [page, setpage] = useState(1);
  const navigate = useNavigate();


  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['coins', page, currency],
    queryFn: () => FetchCoinData(page, currency),
    retry: 2,
    retryDelay: 10000,
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

 function handleRedirect(id){
  navigate(`/details/${id}`);
 }
 

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='my-5 flex flex-col gap-5 w-[80vw] mx-auto pr-[2vw]'>
      <div className='flex items-center w-full px-2 py-4 font-semibold text-black bg-yellow-400'>
        <div className='basis-[35%]'>
        Coin
      </div>
      <div className='basis-[25%]'>
        Price
      </div>
      <div className='basis-[20%]'>
        24Change
      </div>
      <div className='basis-[20%]'>
        market_cap
      </div>

      </div>

      <div className='flex flex-col w-[80vw] mx-auto'>
        {isLoading && <div>loading...</div>}
        {data && data.map((coin) =>{
          return(
            <div onClick={() => handleRedirect(coin.id)} key={coin.id} className='flex items-center justify-between w-full px-4 py-4 font-semibold text-white bg-transparent'>


              <div className='flex items-center justify-start gap-5 basis-[35%]'>

                <div className='w-[5rem] h-[5rem]'>
                  < img  src={coin.image} className='w-full h-full' loading="lazy" />
                </div>
                <div className='flex flex-col'>
                  <div className='text-3xl'>{coin.name}</div>
                  <div className='text-xl'> {coin.symbol}</div>
                </div>
              </div>
              <div className='basis-[25%]'>
                {coin.high_24h}
              </div>
              <div className='basis-[20%]'>
                {coin.price_change_24h}
              </div>
              <div className='basis-[20%]'>
                {coin.market_cap}
              </div>
            </div>


          );
        })}
      </div>
      <div className='flex items-center justify-center gap-4 '>
        <button disabled = {page === 1}
        onClick={() => setpage(page -1)} className='text-2xl text-white btn btn-primary btn-wide'>prev</button>
         <button onClick={() => setpage(page +1)} className='text-2xl text-white btn btn-secondary btn-wide'>Next</button>
      </div>
    </div>
  );
}

export default CoinTable;
