import { Link } from 'react-router-dom'
import '../MovieCard/MovieCard.scss'

const TopRatedCard = ({id, nomi, ranking, vaqti, imgLink}) => {
  return (
    <>
    <Link to={`./latestMovie/${id}`} className="movie__card">
        <p className="card__ranking">{ranking}</p>
        <div className="img__holder-movie">
        <img src={imgLink} alt="img" className="card__img-movie"/>
        </div>
        <h2 className="card__title color">{nomi}</h2>
        <h5 className="card__date color">{vaqti}</h5>
    </Link>
    </>
    )
  }
  export default TopRatedCard