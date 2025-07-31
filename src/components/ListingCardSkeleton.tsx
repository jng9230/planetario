// src/components/ui/skeleton.jsx (This file is created by the command above)
// No need to touch this file, just know it exists.

// Your component where you want to show the loader
import { Skeleton } from "./ui/skeleton"

export function ListingCardSkeleton() {
  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-64" />
      </div>
    </div>
  )
}