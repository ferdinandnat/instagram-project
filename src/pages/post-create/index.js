import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { createFeed } from '../../data/firebase'

function Post() {
    const [username,setUsername] = useState('')
    const [photo,setPhoto] = useState('')
    const [caption,setCaption] = useState('')
    const navigate = useNavigate()

    const submit= async() => {
        await createFeed(username,photo,caption)
        navigate('/')
        console.log('tes')
    }

    const saveUsername = (event) => {
        setUsername(event.target.value)
        console.log(username)
    }

    const savePhoto = (event) => {
        setPhoto(event.target.value)
        console.log(photo)
    }

    const saveCaption = (event) => {
        setCaption(event.target.value)
        console.log(caption)
    }

    return (
    <div>

        <div className="form">
            <h1>Username</h1>
            <input type='text' placeholder="insert username" onChange={saveUsername}/>
        </div>
        <div className="form">
            <h1>Upload photos</h1>
            <input type='text' placeholder="insert url" onChange={savePhoto}/>
        </div>

        <div className="form">
            <h1>Insert Caption</h1>
            <input type='text' placeholder="insert caption" onChange={saveCaption}/>
        </div>

        <div className="form">
            <button onClick={submit}>submit</button> 
        </div>
    </div>
    )
}
export default Post