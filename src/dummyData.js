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

export const users = [
    {
        id: 1,
        user_name: 'RickyReparo',
        full_name: 'Rick Smith',
        password: 'password',

    },
    {
        id: 2,
        user_name: 'BettyBoop',
        full_name: 'Betty Birtha',
        password: 'password',

    },
    {
        id: 3,
        user_name: 'CurtainMaster',
        full_name: 'Curt Cunningham',
        password: 'password',

    },
    {
        id: 4,
        user_name: 'RightOrWrong',
        full_name: 'Right Reevins',
        password: 'password',

    },
    {
        id: 5,
        user_name: 'FrankyBoy',
        full_name: 'Frank Smith',
        password: 'password',

    },
    {
        id: 6,
        user_name: 'user6',
        full_name: 'User Six',
        password: 'password',

    },
    {
        id: 7,
        user_name: 'user7',
        full_name: 'User Seven',
        password: 'password',

    },
    {
        id: 8,
        user_name: 'User8',
        full_name: 'User Eight',
        password: 'password',

    },
    {
        id: 9,
        user_name: 'user9',
        full_name: 'User Nine',
        password: 'password',

    },
    {
        id: 10,
        user_name: 'user10',
        full_name: 'User Ten',
        password: 'password',

    },
    {
        id: 11,
        user_name: 'user11',
        full_name: 'User Eleven',
        password: 'password',

    },

]

export const providers = [
    {
        id: 1,
        user_id: 1,
        provider_name: "Rick's Repair",
        introduction: 'Bacon ipsum dolor amet meatloaf landjaeger t-bone sausage, hamburger ball tip cupim frankfurter pancetta turducken pork belly venison capicola turkey kielbasa. Swine t-bone meatloaf, chuck leberkas pig pork venison short loin sirloin landjaeger flank cow corned beef shoulder.',
        services: [1, 5],
        location: "32541",
        quote_requests_list: [1], //the quote request list will be for the provider dashboard
        avg_rating: 5,
    },

    {
        id: 2,
        user_id: 2,
        provider_name: "Betty's Bathroom Repair",
        introduction: 'Bacon ipsum dolor amet meatloaf landjaeger t-bone sausage, hamburger ball tip cupim frankfurter pancetta turducken pork belly venison capicola turkey kielbasa. Swine t-bone meatloaf, chuck leberkas pig pork venison short loin sirloin landjaeger flank cow corned beef shoulder.',
        services: [2],
        location: "33410",
        quote_requests_list: [1], //the quote request list will be for the provider dashboard
        avg_rating: 5,
    },

    {
        id: 3,
        user_id: 3,
        provider_name: "Curt's Curtains",
        introduction: 'Bacon ipsum dolor amet meatloaf landjaeger t-bone sausage, hamburger ball tip cupim frankfurter pancetta turducken pork belly venison capicola turkey kielbasa. Swine t-bone meatloaf, chuck leberkas pig pork venison short loin sirloin landjaeger flank cow corned beef shoulder.',
        services: [1, 4],
        location: "32541",
        quote_requests_list: [1], //the quote request list will be for the provider dashboard
        avg_rating: 2,
    },

    {
        id: 4,
        user_id: 4,
        provider_name: "Right Roofing",
        introduction: 'Bacon ipsum dolor amet meatloaf landjaeger t-bone sausage, hamburger ball tip cupim frankfurter pancetta turducken pork belly venison capicola turkey kielbasa. Swine t-bone meatloaf, chuck leberkas pig pork venison short loin sirloin landjaeger flank cow corned beef shoulder.',
        services: [6],
        location: "33410",
        quote_requests_list: [1], //the quote request list will be for the provider dashboard
        avg_rating: 2,
    },

    {
        id: 5,
        user_id: 5,
        provider_name: "Frank's Flooring",
        introduction: 'Bacon ipsum dolor amet meatloaf landjaeger t-bone sausage, hamburger ball tip cupim frankfurter pancetta turducken pork belly venison capicola turkey kielbasa. Swine t-bone meatloaf, chuck leberkas pig pork venison short loin sirloin landjaeger flank cow corned beef shoulder.',
        services: [6],
        location: "32541",
        quote_requests_list: [1], //the quote request list will be for the provider dashboard
        avg_rating: 4,
    }

]

export const reviews = [
    {
        id: 1,
        text: `Bacon ipsum dolor amet jerky pastrami turducken, meatloaf salami chuck beef drumstick 
        meatball bacon jowl doner. Tongue pork belly flank, frankfurter pig strip steak alcatra short 
        ribs turducken swine shoulder ham hock porchetta cupim. Porchetta short ribs jerky, venison 
        meatloaf turducken ham meatball.`,
        rating: 4,
        date_created: "2019-06-03T18:29:11.996Z",
        provider_id: 1,
        user_id: 6,
    },
    {
        id: 2,
        text: `Bacon ipsum dolor amet jerky pastrami turducken, meatloaf salami chuck beef drumstick 
        meatball bacon jowl doner. Tongue pork belly flank, frankfurter pig strip steak alcatra short 
        ribs turducken swine shoulder ham hock porchetta cupim. Porchetta short ribs jerky, venison 
        meatloaf turducken ham meatball.`,
        rating: 3,
        date_created: "2019-06-03T18:29:11.996Z",
        provider_id: 2,
        user_id: 7,
    },
    {
        id: 3,
        text: `Bacon ipsum dolor amet jerky pastrami turducken, meatloaf salami chuck beef drumstick 
        meatball bacon jowl doner. Tongue pork belly flank, frankfurter pig strip steak alcatra short 
        ribs turducken swine shoulder ham hock porchetta cupim. Porchetta short ribs jerky, venison 
        meatloaf turducken ham meatball.`,
        rating: 5,
        date_created: "2019-06-03T18:29:11.996Z",
        provider_id: 1,
        user_id: 7,
    },
    {
        id: 4,
        text: `Bacon ipsum dolor amet jerky pastrami turducken, meatloaf salami chuck beef drumstick 
        meatball bacon jowl doner. Tongue pork belly flank, frankfurter pig strip steak alcatra short 
        ribs turducken swine shoulder ham hock porchetta cupim. Porchetta short ribs jerky, venison 
        meatloaf turducken ham meatball.`,
        rating: 4,
        date_created: "2019-06-03T18:29:11.996Z",
        provider_id: 1,
        user_id: 8,
    },
    {
        id: 5,
        text: `Bacon ipsum dolor amet jerky pastrami turducken, meatloaf salami chuck beef drumstick 
        meatball bacon jowl doner. Tongue pork belly flank, frankfurter pig strip steak alcatra short 
        ribs turducken swine shoulder ham hock porchetta cupim. Porchetta short ribs jerky, venison 
        meatloaf turducken ham meatball.`,
        rating: 4,
        date_created: "2019-06-03T18:29:11.996Z",
        provider_id: 1,
        user_id: 9,
    },
    {
        id: 6,
        text: `Bacon ipsum dolor amet jerky pastrami turducken, meatloaf salami chuck beef drumstick 
        meatball bacon jowl doner. Tongue pork belly flank, frankfurter pig strip steak alcatra short 
        ribs turducken swine shoulder ham hock porchetta cupim. Porchetta short ribs jerky, venison 
        meatloaf turducken ham meatball.`,
        rating: 4,
        date_created: "2019-06-03T18:29:11.996Z",
        provider_id: 3,
        user_id: 6,
    },
    {
        id: 7,
        text: `Bacon ipsum dolor amet jerky pastrami turducken, meatloaf salami chuck beef drumstick 
        meatball bacon jowl doner. Tongue pork belly flank, frankfurter pig strip steak alcatra short 
        ribs turducken swine shoulder ham hock porchetta cupim. Porchetta short ribs jerky, venison 
        meatloaf turducken ham meatball.`,
        rating: 4,
        date_created: "2019-06-03T18:29:11.996Z",
        provider_id: 3,
        user_id: 6,
    },
    {
        id: 8,
        text: `Bacon ipsum dolor amet jerky pastrami turducken, meatloaf salami chuck beef drumstick 
        meatball bacon jowl doner. Tongue pork belly flank, frankfurter pig strip steak alcatra short 
        ribs turducken swine shoulder ham hock porchetta cupim. Porchetta short ribs jerky, venison 
        meatloaf turducken ham meatball.`,
        rating: 4,
        date_created: "2019-06-03T18:29:11.996Z",
        provider_id: 4,
        user_id: 6,
    },
    {
        id: 9,
        text: `Bacon ipsum dolor amet jerky pastrami turducken, meatloaf salami chuck beef drumstick 
        meatball bacon jowl doner. Tongue pork belly flank, frankfurter pig strip steak alcatra short 
        ribs turducken swine shoulder ham hock porchetta cupim. Porchetta short ribs jerky, venison 
        meatloaf turducken ham meatball.`,
        rating: 4,
        date_created: "2019-06-03T18:29:11.996Z",
        provider_id: 5,
        user_id: 6,
    },
    {
        id: 10,
        text: `Bacon ipsum dolor amet jerky pastrami turducken, meatloaf salami chuck beef drumstick 
        meatball bacon jowl doner. Tongue pork belly flank, frankfurter pig strip steak alcatra short 
        ribs turducken swine shoulder ham hock porchetta cupim. Porchetta short ribs jerky, venison 
        meatloaf turducken ham meatball.`,
        rating: 4,
        date_created: "2019-06-03T18:29:11.996Z",
        provider_id: 5,
        user_id: 6,
    },
    {
        id: 11,
        text: `Bacon ipsum dolor amet jerky pastrami turducken, meatloaf salami chuck beef drumstick 
        meatball bacon jowl doner. Tongue pork belly flank, frankfurter pig strip steak alcatra short 
        ribs turducken swine shoulder ham hock porchetta cupim. Porchetta short ribs jerky, venison 
        meatloaf turducken ham meatball.`,
        rating: 4,
        date_created: "2019-06-03T18:29:11.996Z",
        provider_id: 2,
        user_id: 6,
    },
    {
        id: 12,
        text: `Bacon ipsum dolor amet jerky pastrami turducken, meatloaf salami chuck beef drumstick 
        meatball bacon jowl doner. Tongue pork belly flank, frankfurter pig strip steak alcatra short 
        ribs turducken swine shoulder ham hock porchetta cupim. Porchetta short ribs jerky, venison 
        meatloaf turducken ham meatball.`,
        rating: 4,
        date_created: "2019-06-03T18:29:11.996Z",
        provider_id: 3,
        user_id: 6,
    },

]

