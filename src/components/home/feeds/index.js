import axios from 'axios'
import { useEffect, useState} from 'react'
import Card from '../card'
import {getFeeds} from '../../../data/firebase'


function Feeds() {
    const [photos, setPhotos] = useState([])
    
    useEffect(() => {
      async function getPhotos() {
        const response = await getFeeds() 
        setPhotos(response)
        console.log(response)
    }
      
      getPhotos()
    }, [])

    const renderPhotos = () => {
        // tugas selanjutnya: munculin sbgai card yang ada caption dan icon like
        return photos.map(photo => {
          return <Card 
            image={photo.image} 
            caption={photo.caption}
            likeCount= '100'  />
        })
    }

  return (
    <div>
      <h1>Feeds</h1>
    { renderPhotos() }
    </div>
  )
}

export default Feeds
