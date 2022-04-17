import './index.css'

function Card(props) {
    const image = props.image
    const caption = props.caption
    const likeCount = props.likeCount
    return (
        <div className='card'>
            <img src={image}/>
            <div>{caption}</div>
        </div>
    )
}

export default Card