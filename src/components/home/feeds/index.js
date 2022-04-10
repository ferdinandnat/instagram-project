import axios from 'axios'
import { useEffect, useState} from 'react'

function Feeds() {
    const [photos, setPhotos] = useState([])
    
    useEffect(() => {
      async function getPhotos() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
      }
      
      getPhotos()
    }, [])
  return (
    <div>
      <h1>Feeds</h1>
    </div>
  )
}

export default Feeds
