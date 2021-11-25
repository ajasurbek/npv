import { Link } from 'react-router-dom' 
import '../MovieCard/MovieCard.scss'

const TvRecommendCard = ({id, title, date, imgLink, rating}) => {
    return (
        <>
        <Link to={`tvrecommend/${id}`}  className="movie__card">
        <p className="card__ranking">{rating}</p>
        <div className="img__holder-movie">
        <img src={imgLink} alt="img" className="card__img-movie"/>
        </div>
        <h2 className="card__title color">{title}</h2>
        <h5 className="card__date color">{date}</h5>
        </Link>
        </>
    )
}

export default TvRecommendCard