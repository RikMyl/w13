import logo from './logo.svg';
import './App.css';

function App() {
  //here is an exmple how to create an array
  const names = ["Päivi", "Ghodrat", "Timo"];
  //here is an example how to use the array above to create an array of option elements
  //see https://www.w3schools.com/jsref/jsref_map.asp
  const arrayOfOptionNames = names.map((name, position)=>{
    //in JSX language you can combine html elements and js variables this way (see {} around variables)
    return <option key={position} value={position}>{name}</option>

  })
  return (
    <div className="App">
      See the source code how to convert an array to html elements
      <hr/>
      <select>
        //now we can use the created variable to add the options for select
        {arrayOfOptionNames}   //again arrayOfOptionNames is a variable so need to be inside {}
      </select>
    </div>
  );
}

export default App;
