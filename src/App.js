import React,{useState} from 'react'
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "fc62f397";
  const YOUR_APP_KEY ="e982dfdf48ea7f68f6643903f2bc367c";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div>
      <center>
        <h3>Food Recipe App</h3>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)}/> <br/><br/>
          <input type="submit" className="btn btn-primary" value="Search"/>
        </form>
        <br/>
        {data.length>=1 ? <Products  data={data}/>:null}
      </center>
    </div>
  )
}
export default App
