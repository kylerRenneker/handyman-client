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

export const providers = [
    {
        id: 1,
        user_id: 2,
        provider_name: "Rick's Repair",
        introduction: null,
        services: [1, 5],
        location: "32541",
        quote_requests_list: [1] //the quote request list will be for the provider dashboard
    },

    {
        id: 2,
        user_id: 2,
        provider_name: "Betty's Bathroom Repair",
        introduction: null,
        services: [2],
        location: "33410",
        quote_requests_list: [1] //the quote request list will be for the provider dashboard
    },

    {
        id: 3,
        user_id: 3,
        provider_name: "Curt's Curtains",
        introduction: null,
        services: [1, 4],
        location: "32541",
        quote_requests_list: [1] //the quote request list will be for the provider dashboard
    },

    {
        id: 4,
        user_id: 4,
        provider_name: "Right Roofing",
        introduction: null,
        services: [6],
        location: "33410",
        quote_requests_list: [1] //the quote request list will be for the provider dashboard
    },

    {
        id: 5,
        user_id: 5,
        provider_name: "Frank's Flooring",
        introduction: null,
        services: [6],
        location: "32541",
        quote_requests_list: [1] //the quote request list will be for the provider dashboard
    }

]