import ListingCard from "../ListingCard/ListingCard"
import Labels from "../Labels/Labels"
import SearchHeader from "../SearchHeader/SearchHeader"


import "./Listing.scss";

function Listing({dataList, pagePath, addItemPath, addItemValue, listingColumn}) {
    return (
        <section className="listing">
            <SearchHeader addItemPath={addItemPath} value={addItemValue}/>
            <section className="listing__labels-container">
                {listingColumn.map((column, index) => {
                    return <Labels key={index} name={column} />
                })}
            </section>
            {dataList.map(item => {
                return (
                        <ListingCard key={item.id} data={item} pagePath={pagePath} />
                )
            })}
        </section>
    )
}

export default Listing






