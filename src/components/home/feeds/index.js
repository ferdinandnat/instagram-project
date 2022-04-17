import axios from 'axios'
import { useEffect, useState} from 'react'
import Card from '../card'


function Feeds() {
    const [photos, setPhotos] = useState([])
    
    useEffect(() => {
      async function getPhotos() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
        setPhotos(response.data)
        console.log(response.data)
    }
      
      getPhotos()
    }, [])

    const renderPhotos = () => {
        // tugas selanjutnya: munculin sbgai card yang ada caption dan icon like
        return photos.map(photo => <Card image={photo.url} caption={photo.title}/>)
    }

  return (
    <div>
      <h1>Feeds</h1>
    { renderPhotos() }
    </div>
  )
}

export default Feeds
