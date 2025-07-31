import { ListingCardSkeleton } from "./ListingCardSkeleton";

const ListingCardSkeletonWrapper = () => {
    const numSkeletons = 6
    const skeletons = Array.from({length: 6})
    return (<>
    <div className="space-y-4 py-6">
        {
            skeletons.map(d => {
                return <ListingCardSkeleton/>
            })
        }
    </div>
    </>);
}
 
export default ListingCardSkeletonWrapper;