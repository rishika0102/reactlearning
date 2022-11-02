import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching() {

  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [idButtonFromClick, setIdButtonFromClick] = useState(1)

  const handleClick = () => {
    setIdButtonFromClick(id)
  }

  useEffect( () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      console.log("response..",res);
      setPosts(res.data)
    })
    .catch(error =>{
      console.log(error);
    })
  }, [idButtonFromClick])


  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)}/>
      <button onClick={handleClick}>Fetch Id</button>
      <ul>
      {posts.title}
      </ul>
    </div>
  )
}

export default DataFetching
