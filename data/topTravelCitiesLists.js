import { cities } from "@/data/skyscannerCities"

function categorizeCitiesByRegion(cityGroups, cities) {
    // Creating a lookup table for city data by entityId for quick access
    const cityLookup = cities.reduce((acc, city) => {
        acc[city.entityId] = city;
        return acc;
    }, {});

    // Transform each group within the cityGroups object
    const transformedGroups = {};
    for (const regionId in cityGroups) {
        transformedGroups[regionId] = cityGroups[regionId].map(group => ({
            weight: group.weight,  // Preserve the weight of each group
            cities: group.cities.map(cityId => cityLookup[cityId] || null).filter(city => city !== null)
        }));
    }

    return transformedGroups;
}

const cityGroups = {
    // EUROPE
    "27563221": [
        // EUROPE

        // Most Popular
        {
            weight: "50",
            cities: [
                "27544008", // London
                "27544856", // Manchester
                "27539733", // Paris
                "27547053", // Berlin
                "27544850", // Madrid
                "27539793", // Rome
                "27546033", // Prague
                "27547454", // Warsaw
                "27539604", // Budapest
                "27547395", // Vienna
                "27548283", // Barcelona
                "27545034", // Munich
                "27544068", // Milan
                "27547055", // Sofia
                "27539565", // Brussels
                "27538778", // Birmingham
                "34235350", // Cologne
                "27545086", // Naples
                "27539477", // Stockholm
                "27545262", // Bucharest
                "27536561", // Amsterdam
                "27537524", // Zurich
                "33735985", // Geneva
                "27541706", // Frankfurt
                "27536295", // Hamburg
                "27540831", // Dusseldorf
                "32030366", // Marseille
                "27544221", // Lyon
                "27547405", // Valencia
                "27547022", // Seville
                "27537474", // Zagreb
                "27544072", // Lisbon
                "27545236", // Porto
                "27538634", // Oslo
                "27539902", // Copenhagen
                "27542027", // Helsinki
                "27548174", // Athens
                "27540851", // Edinburgh
                "27540823", // Dublin
                "27539598", // Bratislava
                "27538720", // Belgrade
                "27546359", // Sarajevo
                "27547202", // Tallinn
            ]
        },


        // UNITED STATES

        // Most Popular
        {
            weight: "25",
            cities: [
                "27536211", // Los Angeles
                "27537542", // New York
                "27544891", // Chicago
                "27541735", // Atlanta
                "27536457", // Dallas
                "27536589", // Denver
                "27546320", // San Francisco
                "27536644", // Miami
                "27542715", // Las Vegas
                "27538444", // Seattle
                "27542899", // Orlando
            ]
        },

        // Popular
        {
            weight: "5",
            cities: [
                "27540837", // Phoenix
                "27538417", // Houston
                "27539525", // Boston
                "27540996", // Minneapolis
                "27536622", // Detroit
                "27545954", // Philadelphia
                "27541669", // Fort Lauderdale
                "27539637", // Baltimore
                "27546380", // Salt Lake City
                "27545066", // San Diego
                "27538424", // Washington, D.C.
                "27544873", // Tampa
                "27542058", // Honolulu
                "27542060", // Portland
                "27537543", // Charlotte
            ]
        },


        // OCEANIA & AUSTRALIA

        // Most Popular
        {
            weight: "10",
            cities: [
                "27547097", // Sydney
                "27544894", // Melbourne
                "27539494", // Brisbane
                "27545934", // Perth
                "27536452", // Adelaide
                "27536526", // Auckland
                "27536222", // Wellington
                "27539784", // Christchurch
                "27539709", // Canberra
                "34900280", // Gold Coast
            ]
        },


        // ASIA

        // Most Popular
        {
            weight: "10",
            cities: [
                "27542089", // Tokyo
                "27545090", // Beijing
                "27546079", // Shanghai
                "27538638", // Seoul
                "27536671", // Bangkok
                "27539774", // Jakarta
                "27540706", // New Delhi
                "27539520", // Mumbai
                "27544979", // Manila
                "27543923", // Kuala Lumpur
                "27546111", // Singapore
                "27542065", // Hong Kong
                "27547236", // Taipei
                "27546329", // Ho Chi Minh City
                "27542908", // Osaka
                "27542903", // Istanbul
                "27540839", // Dubai
                "27543850", // Karachi
                "27539471", // Bengaluru
                "27539726", // Kolkata
                "32575954", // Chennai
                "27544055", // Lahore
                "27546223", // Riyadh
                "27541992", // Hanoi
                "27545997", // Phnom Penh
                "27540668", // Dhaka
                "27539843", // Colombo
            ]
        }
    ],

    // UNITED STATES
    "29475437": [
        // UNITED STATES

        // Most Popular
        {
            weight: "25",
            cities: [
                "27536211", // Los Angeles
                "27537542", // New York
                "27544891", // Chicago
                "27541735", // Atlanta
                "27536457", // Dallas
                "27536589", // Denver
                "27546320", // San Francisco
                "27536644", // Miami
                "27542715", // Las Vegas
                "27538444", // Seattle
                "27542899", // Orlando
            ]
        },

        // Popular
        {
            weight: "10",
            cities: [
                "27540837", // Phoenix
                "27538417", // Houston
                "27539525", // Boston
                "27540996", // Minneapolis
                "27536622", // Detroit
                "27545954", // Philadelphia
                "27541669", // Fort Lauderdale
                "27539637", // Baltimore
                "27546380", // Salt Lake City
                "27545066", // San Diego
                "27538424", // Washington, D.C.
                "27544873", // Tampa
                "27542058", // Honolulu
                "27542060", // Portland
                "27537543", // Charlotte
            ]
        },

        // Less Popular
        {
            weight: "5",
            cities: [
                "27546283", // St Louis
                "27536490", // Pittsburgh
                "27539491", // Nashville
                "35234892", // New Orleans
                "27537702", // Austin
                "27539446", // Cleveland
                "27542857", // Indianapolis
                "27546249", // San Antonio
                "112910553", // Kansas City
                "27544870", // Sacramento
                "27546164", // San Jose
                "27539704", // Columbus
                "27544178", // Cincinnati
                "27544948", // Milwaukee
                "27545177", // Jacksonville
                "27544120", // Louisville
                "27546167", // Richmond
                "27544901", // Memphis
                "27539605", // Buffalo
                "27546049", // Palm Springs
                "27541683", // Fort Myers
                "27536427", // Albuquerque
            ]
        },

        
        // EUROPE

        // Most Popular
        {
            weight: "20",
            cities: [
                "27544008", // London
                "27539733", // Paris
                "27536561", // Amsterdam
                "27548283", // Barcelona
                "27547454", // Warsaw
                "27547395", // Vienna
                "27544850", // Madrid
                "27539793", // Rome
                "27545034", // Munich
                "27541706", // Frankfurt
            ]
        },

        // Popular
        {
            weight: "10",
            cities: [
                "27544068", // Milan
                "27536295", // Hamburg
                "27540831", // Dusseldorf
                "27539477", // Stockholm
                "27538634", // Oslo
                "27548174", // Athens
                "27542027", // Helsinki
                "27545262", // Bucharest
                "27544072", // Lisbon
                "27539902", // Copenhagen
                "27539565", // Brussels
            ]
        },

        // Less Popular
        {
            weight: "5",
            cities: [
                "27547055", // Sofia
                "27538778", // Birmingham
                "34235350", // Cologne
                "27545086", // Naples
                "27537524", // Zurich
                "33735985", // Geneva
                "32030366", // Marseille
                "27544221", // Lyon
                "27547405", // Valencia
                "27547022", // Seville
                "27537474", // Zagreb
                "27545236", // Porto
                "27540851", // Edinburgh
                "27540823", // Dublin
                "27539598", // Bratislava
                "27538720", // Belgrade
                "27546359", // Sarajevo
                "27547202", // Tallinn
            ]
        },

        
        // ASIA

        // Most Popular
        {
            weight: "10",
            cities: [
                "27542089", // Tokyo
                "27545090", // Beijing
                "27546079", // Shanghai
                "27538638", // Seoul
                "27536671", // Bangkok
                "27540706", // New Delhi
                "27543923", // Kuala Lumpur
                "27546111", // Singapore
                "27542065", // Hong Kong
                "27542903", // Istanbul
                "27540839", // Dubai
                "27539774", // Jakarta
            ]
        },

        // Popular
        {
            weight: "5",
            cities: [
                "27544979", // Manila
                "27547236", // Taipei
                "27546329", // Ho Chi Minh City
                "27542908", // Osaka
                "27539520", // Mumbai
                "27539471", // Bengaluru
                "27539726", // Kolkata
                "27540668", // Dhaka
            ]
        },

        // Less Popular
        {
            weight: "1",
            cities: [
                "27544055", // Lahore
                "32575954", // Chennai
                "27546223", // Riyadh
                "27541992", // Hanoi
                "27545997", // Phnom Penh
                "27543850", // Karachi
                "27539843", // Colombo
            ]
        },

        
        // OCEANIA & AUSTRALIA

        // Most Popular
        {
            weight: "6",
            cities: [
                "27547097", // Sydney
            ]
        },

        // Popular
        {
            weight: "2",
            cities: [
                "27544894", // Melbourne
                "27539494", // Brisbane
                "27536526", // Auckland
                "27545934", // Perth
                "27536452", // Adelaide
                "27539784", // Christchurch
                "34900280", // Gold Coast
            ]
        },

        // Less Popular
        {
            weight: "1",
            cities: [
                "27536222", // Wellington
                "27539709", // Canberra
            ]
        },
    ]
}

const categorizedCities = categorizeCitiesByRegion(cityGroups, cities)

export const defaultTravelCitiesList = {
    listEntityId: "27563221",
    cities: categorizedCities["27563221"]
}
export const topTravelCitiesLists = [
    defaultTravelCitiesList,
    {
        listEntityId: "29475437",
        cities: categorizedCities["29475437"]
    },
]

// Optionally, you can freeze the exported array if immutability is required
Object.freeze(topTravelCitiesLists)
