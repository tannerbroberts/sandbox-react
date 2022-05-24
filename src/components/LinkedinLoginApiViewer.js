import React, { useState, useEffect} from 'react';
import '../App.css';

export default function LinkedinLoginApiViewer( {login} ) {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then((res) => { return res.json() })
    .then(data => setData)
  }, [login]);


  if(data) {
    return (
      <>
          <pre>{JSON.stringify(data, null, 4)}</pre>
      </>
    );
  } else {
    // Github API currently returns an error object, so this doesn't get hit ever.
    // As an aside, this would be a great place to throw an exception.
    return "No data found!"
  }
}
