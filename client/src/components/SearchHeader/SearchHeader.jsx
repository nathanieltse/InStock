import {Link} from 'react-router-dom'
import './SearchHeader.scss'

const SearchHeader = ({path, value}) =>{
    return (
        <section className="search-header">
                <h1 className="search-header__title">Warehouses</h1>
                <form className="search-header__form">
                    <input
                        className="search-header__form-input"
                        type="text"
                        name="search"
                        placeholder="Search..."
                    />
                    <Link className="search-header__form-link" to={path}>
                        <input
                            className="search-header__form-submit"
                            type="submit"
                            name="addWarehouse"
                            value={value}
                            />
                    </Link>
                </form>
            </section>
    )
}

export default SearchHeader