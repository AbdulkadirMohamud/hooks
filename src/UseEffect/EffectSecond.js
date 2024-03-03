import React, {UseEffect, UseState} from "react";
import axios from "axios";

function EffectSecond() {
    const [data, setData ] = useState("");
    const [count , setCount ] = useState(0);
    
    useEffect(() => {
        axios 
        .get("https://jsonplaceholder.typicode.com/comments")
        .then(( response) => {
            setData(response.data [0].email );
            console.log("API IS Working ");
        });
    }, []);

    return (
        <div>
            Hello How are you 
            <h1> {data }</h1>
            <h1> {count  }</h1>
            <button 
            onClick={() => {
                setCount(count+2);
            }}
            > 
            click 
            </button>
            </div>
    );
        }

        export default EffectSecond;

            

        
    