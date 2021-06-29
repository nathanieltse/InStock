import logo from '../../assets/logo/inStock-logo.png'
import {Link} from 'react-router-dom'
import './PageHeader.scss'

const PageHeader = () => {
    return (
        <nav className="nav">
            <img className="nav__logo" src={logo} alt="instock logo"/>
            <Link to="/">Warehouses</Link>
            <Link to="/inventory">Inventory</Link>
        </nav>
    )
}

export default PageHeader