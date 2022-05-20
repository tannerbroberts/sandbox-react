import React, { useState, useEffect} from 'react';
import '../App.css';

export default function App( {login} ) {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then((res) => { return res.json() })
    .then((data) => setData(data))
  }, [login]);


  if(data) {
    return (
      <div className="App">
        {/* {
          Object.keys(data)
          .map((value, index) => { return <button>{value}</button> })
        } */}
        {JSON.stringify(data, null, 3)}
      </div>
    );
  }

  return <p>No Profile Found!</p>
}