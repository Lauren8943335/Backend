import React, {useState} from 'react'; // used to create and manage components 
import axios from 'axios'; // for making http request to fetch data from the API
import './KanyeQuote.css'; //Style for quote app


function App() {
    //set the state quote var and a function quote to update it 
    const[quote, setQuote] =useState('') 
   // funciton get quote
    const fetchQuote = async () => { 
        try{
    const response = await axios.get("http://api.kanye.rest");   
    setQuote(response.data.quote);        
    } catch (error){ 
        console.error("Error fetching quote:", error); 
    }
}; 
    
    return (
        <div className="quote-container">
            <h1>Kanye West Quote</h1>
            <p className="quote">{quote || "Click the button to get inspired!"}</p>
            <button onClick={fetchQuote}>Get Kanye Quote</button>
        </div>

    ); 
}; 

export default App
