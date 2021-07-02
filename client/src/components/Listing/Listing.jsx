import ListingCard from "../ListingCard/ListingCard"
import Labels from "../Labels/Labels"
import SearchHeader from "../SearchHeader/SearchHeader"


import "./Listing.scss";

const Listing = ({dataList, pagePath, addItemPath, addItemValue, listingColumn}) => {
    return (
        <section className="listing">
            <SearchHeader addItemPath={addItemPath} value={addItemValue} pagePath={pagePath}/>
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






