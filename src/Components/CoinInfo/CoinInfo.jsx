import { Line } from "react-chartjs-2";
import Alert from "../Alert/Alert";
import { CategoryScale } from "chart.js";
import  Chart  from "chart.js/auto";

function CoinInfo({historic, setCoinInterval, setDays, days}) {
    Chart.register(CategoryScale);

    if(!historic){
        return <Alert message="No data available" type="Warning"/>
    }
    return (
        <div className="flex flex-col items-center justify-center w-full p-6 mt-6 md:w-3/4 ">
            <Line
            data={{
                labels: historic.prices.map((price) => {
                    let date = new Date(price[0]);  
                    let time =
                    date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                    return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                    {
                        data: historic.prices.map((price) => price[1]),
                        label: `Price ( Past ${days} Days ) in USD`,
                        borderColor: "green",
                    },
                ],                       
            }}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                pointRadius: 0, 

                scales: {
                    y: {
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return '$' + value;
                            }
                        }
                    }
                }
            }} 
            heiht={400}
            width={600}    
              


            />
        </div>
    )
}
export default CoinInfo;