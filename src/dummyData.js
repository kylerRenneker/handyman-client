export const services = [
    {
        id: 1,
        name: "Appliance Repair"
    },
    {
        id: 2,
        name: "Bathroom Installation & Repair"
    },
    {
        id: 3,
        name: "Deck Installation & Repair"
    },
    {
        id: 4,
        name: "Curtian & Blind Installation"
    },
    {
        id: 5,
        name: "Flooring Installation & Repair"
    },
    {
        id: 6,
        name: "Roofing"
    },
]

const users = [

]

export const providers = [
    {
        id: 1,
        user_id: 1,
        provider_name: "Rick's Repair",
        introduction: null,
        services: [1, 5],
        location: "32541",
        quote_requests_list: [1], //the quote request list will be for the provider dashboard
        avg_rating: 5,
        reviews: [1, 2, 3]
    },

    {
        id: 2,
        user_id: 2,
        provider_name: "Betty's Bathroom Repair",
        introduction: null,
        services: [2],
        location: "33410",
        quote_requests_list: [1], //the quote request list will be for the provider dashboard
        avg_rating: 5,
        reviews: [4, 5]
    },

    {
        id: 3,
        user_id: 3,
        provider_name: "Curt's Curtains",
        introduction: null,
        services: [1, 4],
        location: "32541",
        quote_requests_list: [1], //the quote request list will be for the provider dashboard
        avg_rating: 2,
        reviews: [6, 7]
    },

    {
        id: 4,
        user_id: 4,
        provider_name: "Right Roofing",
        introduction: null,
        services: [6],
        location: "33410",
        quote_requests_list: [1], //the quote request list will be for the provider dashboard
        avg_rating: 2,
        reviews: [8, 9]
    },

    {
        id: 5,
        user_id: 5,
        provider_name: "Frank's Flooring",
        introduction: null,
        services: [6],
        location: "32541",
        quote_requests_list: [1], //the quote request list will be for the provider dashboard
        avg_rating: 4,
        reviews: [10, 11]
    }

]

const reviews = [
    {
        id: 1,
        text: `Bacon ipsum dolor amet jerky pastrami turducken, meatloaf salami chuck beef drumstick 
        meatball bacon jowl doner. Tongue pork belly flank, frankfurter pig strip steak alcatra short 
        ribs turducken swine shoulder ham hock porchetta cupim. Porchetta short ribs jerky, venison 
        meatloaf turducken ham meatball.`,
        rating: 4,
        date_created: "2019-06-03T18:29:11.996Z",
        provider_id: 1,
        user_id: ,

    },

]

