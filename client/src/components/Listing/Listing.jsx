import ListingCard from "../ListingCard/ListingCard"
import Labels from "../Labels/Labels"
import SearchHeader from "../SearchHeader/SearchHeader"


import "./Listing.scss";

function Listing({warehouseList}) {
    return (
        <section className="listing">
            <SearchHeader/>
            <section className="listing__labels-container">
                <Labels  name="WAREHOUSE" />
                <Labels  name="ADDRESS" />
                <Labels  name="CONTACT NAME" />
                <Labels  name="CONTACT INFORMATION" />
                <Labels  name="ACTIONS" />
            </section>
            {warehouseList.map(item => {
                return (
                        <ListingCard data={item} />
                )
            })}
        </section>
    )
}

export default Listing






