import './index.css'

function Card(props) {
    const username = props.username
    const image = props.image
    const caption = props.caption
    const likeCount = props.likeCount
    return (
        <div className='card'>
            <img className='card__image' src={image}/>
            <div> {likeCount} <img className='card__like' src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEwMjguNCkiPjxwYXRoIGQ9Im03IDEwMzEuNGMtMS41MzU1IDAtMy4wNzg0IDAuNS00LjI1IDEuNy0yLjM0MzEgMi40LTIuMjc4OCA2LjEgMCA4LjVsOS4yNSA5LjggOS4yNS05LjhjMi4yNzktMi40IDIuMzQzLTYuMSAwLTguNS0yLjM0My0yLjMtNi4xNTctMi4zLTguNSAwbC0wLjc1IDAuOC0wLjc1LTAuOGMtMS4xNzItMS4yLTIuNzE0NS0xLjctNC4yNS0xLjd6IiBmaWxsPSIjYzAzOTJiIi8+PC9nPjwvc3ZnPg=='/></div>
            <div>{username}</div>
            <div>{caption}</div>
        </div>
    )
}

export default Card