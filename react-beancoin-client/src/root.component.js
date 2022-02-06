import './index.css'
import { useState } from 'react';

export default function Root(props) {

  const [userQuery, setUserQuery] = useState()

  const updateUserQuery = event =>{
    console.log("user query: ", userQuery)
    setUserQuery(event.target.value)
  }

  const searchQuery = () =>{
    window.open(`https://www.google.com/search?q=${userQuery}`)
  }

  const handleKeyPress = event =>{
    if (event.key == "Enter"){
      searchQuery();
    }
  }

  return (
<div>
      <section className="App">{props.name}
        is mounted and girls are cute!!
      </section>

      <input value={userQuery} onChange={updateUserQuery}/>
      <button onClick={searchQuery}>Search</button>
</div>
  );
}
