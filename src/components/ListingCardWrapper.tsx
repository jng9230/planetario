import type { Listing } from "../utils/dummyData";
import { ListingCard } from "./ListingCard";

const ListingCardWrapper = ({
    data
}: {
    data: Listing[]
}) => {
    return ( <>
    <div className="space-y-4 py-6">
        {
            data.map(d => <ListingCard listing={d} />)
        }
    </div>
    </> );
}
 
export default ListingCardWrapper;