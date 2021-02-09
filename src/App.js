import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';

const App = () => {

  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    const rootAPI = "https://api.unsplash.com"
    const apiKey = process.env.REACT_APP_API_KEY

    axios
      .get(`${rootAPI}/search/photos?client_id=${apiKey}`, {
        params: {
        query: 'cars'
        }
      })
      .then(res => console.log(res.data.results))
  }, [])


  const handleInput = e => {
    setInputValue(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <div className="main">
      <a href="#">
            <i className="fa fa-search"></i>
      </a>
        <input type="text" value={inputValue} onChange={handleInput} placeholder="Search term..." name="box"/>
        </div>
      </form>
    </div>
  );
}

export default App;
