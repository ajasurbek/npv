import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'

import './Header.scss'
import Close from '../../assets/images/icons/close.png'
import Burger from '../../assets/images/icons/list.png'

const Header = () => {

    let history = useHistory();
    const [search, setSearch] = useState('');
    const [sb,setSb] = useState(false)

    useEffect(() => {
      if(search.length !== 0){
        history.push(`/search/${search}`)
      } else{
        history.push(`/`);
      }
    }, [search])


    return (
        <>
        <div className="header">
        <div className="container">
            
  <div className="header__movie">
      <Link to='/' className="header__logo links">
       <img src="https://149349460.v2.pressablecdn.com/wp-content/themes/vayvo-progression/images/logo.png" alt="logo" width='220' height='40' />
        </Link>
        <div className="header__links">
        <Link to='/movies' className="movies__link links laptop">Movies</Link>
        <Link to='/tvshows' className="tv-shows__link links laptop">Tv Shows</Link>
        <Link to='/latestMovies' className="top-rated__link links laptop">Top Rated Movie</Link>
        <Link to='/upcoming' className="up-coming__link links laptop">Up coming</Link>
        </div>
        
        
        <div className="container__item">
		<form className="form">
			<input type="search" className="form__field" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search} />
			<button type="submit" className="btn btn--primary btn--inside uppercase">Search</button>
		</form>
   
    <img className='burger' onClick={() => setSb(!sb)} src={Burger} alt="open img" />
       
	</div>
  
     
   
    <div className={`sidebar ${sb ? 'active' : ''}`} >
    <div className="header__mobile">
   
     <img className='clone-btn burger' onClick={() => setSb(false)} src={Close} alt="close img" />
   
        <Link onClick={() => setSb(false)} to='/movies' className="movies__link links-mobile">Movies</Link>
        <Link onClick={() => setSb(false)} to='/tvshows' className="tv-shows__link links-mobile">Tv Shows</Link>
        <Link onClick={() => setSb(false)} to='/latestMovies' className="top-rated__link links-mobile">Top Rated Movie</Link>
        <Link  onClick={() => setSb(false)} to='/upcoming' className="up-coming__link links-mobile">Up coming</Link>
        </div>
    </div>
        
  </div>
        </div>
        </div>
        </>
        )
    }
    export default Header