interface BasePlanetDescriptor {
    color: string
}

interface SquarePlanetDescriptor extends BasePlanetDescriptor {
    length: number,
    width: number,
    shape: "square",
}

interface CirclePlanetDescriptor extends BasePlanetDescriptor{
    radius: number,
    shape: "circle"
}

type PlanetDescriptor = CirclePlanetDescriptor | SquarePlanetDescriptor;

interface Planet {
    population?: number,
    radius?: number,
    name: string,
    descriptor:  PlanetDescriptor
}

interface Owner {
    name: string,
    email: string
}

enum ListingStatus {
    Pending = "Pending",
    Sold = "Sold",
    Active = "Active",
    OffMarket = "Off-Market"
}

export interface Listing {
    id?: number,
    owner: Owner,
    planet: Planet,
    status?: ListingStatus,
    cost: number
    
}

export const data: Listing[] = [
    {
        owner: {
            name: "Gabe Newell",
            email: "steam@steam.com"
        },
        planet: {
            name: "A90SDU",
            descriptor: {
                shape: "circle",
                radius: 10,
                color: "black"
            }
        },
        cost: 123123
    },
    {
        owner: {
            name: "Gabe Newell",
            email: "steam@steam.com"
        },
        planet: {
            name: "23R234DF13",
            descriptor: {
                shape: "circle",
                radius: 10,
                color: "green"
            }
        },
        cost: 123123
    },
    {
        owner: {
            name: "Gabe Newell",
            email: "steam@steam.com"
        },
        planet: {
            name: "G34F5N",
            descriptor: {
                shape: "circle",
                radius: 10,
                color: "red"
            }
        },
        cost: 123123
    },
    {
        owner: {
            name: "Gabe Newell",
            email: "steam@steam.com"
        },
        planet: {
            name: "EEB56B2B",
            descriptor: {
                shape: "circle",
                radius: 10,
                color: "pink"
            }
        },
        cost: 123123
    },
    {
        owner: {
            name: "Gabe Newell",
            email: "steam@steam.com"
        },
        planet: {
            name: "A90SDU",
            descriptor: {
                shape: "circle",
                radius: 10,
                color: "gray"
            }
        },
        cost: 123123
    },
]