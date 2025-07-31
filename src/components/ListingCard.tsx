import { Skeleton } from "./ui/skeleton"
import type { Listing } from "../utils/dummyData"

export function ListingCard({
    listing
}: {
    listing: Listing
}) {
    const makePlanetImg = (planet: Listing["planet"]) => {
        const planetColor = planet.descriptor.color;
        return <>
            <div className={`h-12 w-12 rounded-full`}
                style={{backgroundColor: planetColor}}
            >
            </div>
        </>
    }

    return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg">
        <div className="h-12 w-12 rounded-full">
            {makePlanetImg(listing.planet)}
        </div>
        <div className="space-y-2">
            <div className="h-4 w-64">{listing.planet.name}</div>
            <div className="h-4 w-64">{listing.cost} buckeroos</div>
        </div>
    </div>
    )
}