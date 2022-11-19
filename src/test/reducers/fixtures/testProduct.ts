import { Product } from "../../../types/Products"
export const products: Product [] =[
    {
        id: 1,
        title: "New Title",
        price: 10000,
        description: "New Description",
        category: {
        id: 4,
        name: "Shoes",
        image: "https://api.lorem.space/image/shoes?w=640&h=480&r=5685"
        },
        images: [
        "https://api.lorem.space/image/shoes?w=640&h=480&r=9794",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=4855",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=8952"
        ]
        },
        {
        id: 2,
        title: "Gorgeous Soft Car",
        price: 603,
        description: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        category: {
            
        id: 1,
        name: "Clothes",
        image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6913"
        },
        images: [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=9763",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=7645",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6292"
        ]
        },
        {
        id: 3,
        title: "New Title",
        price: 200,
        description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        category: {
        id: 1,
        name: "Clothes",
        image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6913"
        },
        images: [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=7865",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=2533",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=5139"
        ]
    }
]
