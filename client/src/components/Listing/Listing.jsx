import ListingCard from "../ListingCard/ListingCard"
import Labels from "../Labels/Labels"
import SearchHeader from "../SearchHeader/SearchHeader"


import "./Listing.scss";

function Listing({dataList, path, listingColumn}) {
    return (
        <section className="listing">
            <SearchHeader path="/warehouses/add" value="+ Add New Warehouse"/>
            <section className="listing__labels-container">
                {listingColumn.map(column => {
                    return <Labels name={column} />
                })}
            </section>
            {dataList.map(item => {
                return (
                        <ListingCard data={item} path={path} />
                )
            })}
        </section>
    )
}

export default Listing






