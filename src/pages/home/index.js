import Feeds from "../../components/home/feeds"
import {useNavigate} from 'react-router-dom'
function Home() {
    const navigate = useNavigate()

    function goToUpload() {
        navigate('/post-create')
    }
    return (
    <div>
        <button onClick={goToUpload}>Upload photo</button>

        
        <Feeds/>
    </div>)
}

export default Home