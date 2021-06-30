import logo from '../../assets/logo/inStock-logo.png'
import {Link} from 'react-router-dom'
import './PageHeader.scss'

const PageHeader = ({path}) => {
    return (
        <nav className="nav">
            <div className="nav__logo-wrapper">
                <img className="nav__logo-img" src={logo} alt="instock logo"/>
            </div>
            <div className="nav__wrapper">
                <Link className={path === "/" ? "nav__link nav__link--active" : "nav__link"} to="/">Warehouses</Link>
                <Link className={path === "/inventory" ? "nav__link  nav__link--active" : "nav__link"} to="/inventory">Inventory</Link>
            </div>
        </nav>
    )
}

export default PageHeader