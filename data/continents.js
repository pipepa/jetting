export const continentData = [

  //      North America
  {
    slug: 'north-america',
    name: `North America`,
    intro: {
      title: 'Discover the Marvels of North America: Your Ultimate Travel Guide',
      text: `Welcome to the enchanting world of North America, where a tapestry of landscapes, cultures, and adventures awaits. Uncover the hidden gems and iconic landmarks that make this continent a traveler's paradise. In this comprehensive travel guide, we'll delve into the heart of North America, offering insights to make your journey truly unforgettable.
       <h6>Geography:</h6>North America's geographical diversity is a spectacle to behold. From the rugged Rocky Mountains in the west to the serene Appalachian Mountains in the east, and from the vast Great Plains to the tropical wonders of the Caribbean, every corner of this continent tells a unique story. Explore the Arctic wilderness, dive into the Pacific and Atlantic oceans, and marvel at the grandeur of Niagara Falls.
       <!--DIVIDER-->
       <h6>Countries:</h6>Embark on a journey through the distinct charms of North America's countries. In the United States, explore the cosmopolitan allure of New York City, the natural wonders of Yellowstone National Park, and the cultural richness of New Orleans. Canada beckons with its pristine national parks, welcoming cities like Toronto and Vancouver, and the stunning landscapes of the Canadian Rockies. Mexico, with its ancient ruins, vibrant markets, and beautiful beaches, invites you to immerse yourself in its rich history and traditions.
       <h6>Climate:</h6>Understanding North America's diverse climate is key to planning a perfect trip. The southern regions enjoy a warm and sunny climate year-round, making them ideal for winter escapes, while the northern areas experience distinct seasons with snowy winters and warm summers. Coastal regions boast milder temperatures, providing pleasant conditions for exploration.
       <h6>Major Cities:</h6>Dive into the heartbeat of North America's major cities. In New York, witness the iconic skyline, Broadway shows, and world-class museums. Toronto captivates with its multicultural vibe and the iconic CN Tower. Mexico City's historic center beckons with colonial architecture and vibrant street markets. Each city is a microcosm of the continent's diversity, offering a blend of history, art, and entertainment.
       <h6>Culture and Language:</h6>North America's cultural mosaic is reflected in its diverse population. Engage with the indigenous heritage, colonial history, and modern influences that shape the cultural landscape. English, French, and Spanish are the primary languages spoken, adding to the continent's linguistic richness.
       <h6>Cuisine:</h6>Indulge in a culinary adventure across North America. In the United States, savor regional specialties like Southern barbecue, New England clam chowder, and Tex-Mex delights. Canada's culinary scene showcases fresh seafood on the coasts and hearty poutine in Quebec. Mexico's cuisine is a fiesta of flavors, from street tacos to mole poblano, enticing every palate.
       <h6>Activities and Attractions:</h6>Discover an array of activities and attractions that cater to every interest. Explore the majestic Grand Canyon, hike the scenic trails of Banff National Park, or relax on the pristine beaches of Cancun. Uncover the magic of Disneyland in California, experience the cultural vibrancy of Montreal's festivals, or embark on a wildlife safari in Costa Rica.
       <h6>Transportation:</h6>Efficient transportation networks make traversing North America convenient. Major airports, well-maintained highways, and reliable public transit systems connect cities and natural wonders. Consider renting a car for road trips, utilize intercity buses or trains for a scenic journey, and explore pedestrian-friendly urban centers.
       <h6>Accommodations:</h6>Whether you seek luxury resorts, cozy bed and breakfasts, or budget-friendly hostels, North America offers a diverse range of accommodations. Stay in iconic hotels overlooking Central Park, rustic lodges in the Rockies, or beachfront resorts along the Mayan Riviera. Our guide helps you find the perfect home base for your adventures.
       <h6>Safety and Travel Tips:</h6>Ensure a safe and seamless journey with our travel tips. Stay informed about visa requirements, health precautions, and local customs. Pack accordingly for the varied climates, and be aware of safety guidelines for outdoor activities. Travel insurance is recommended for added peace of mind.
       Embark on a journey of discovery as you explore North America's wonders. Let this travel guide be your compass, guiding you through a continent that promises endless adventures and cultural treasures. Start planning your North American escape today, and let the magic unfold.
       Unlock exclusive deals on flights, accommodations, and activities by booking your North American getaway now. Your dream adventure awaits – seize the opportunity and create memories that will last a lifetime!
       `,
    },
    weather: {
      winter: {
        celsius: '-20°C to 10°C',
        fahrenheit: '-4°F to 50°F',
      },
      spring: {
        celsius: '0°C to 20°C',
        fahrenheit: '32°F to 68°F',
      },
      summer: {
        celsius: '20°C to 35°C',
        fahrenheit: '68°F to 95°F',
      },
      autumn: {
        celsius: '10°C to 20°C',
        fahrenheit: '50°F to 68°F',
      },
    },
    info: {
      timezone: {
        range: 'UTC-10 to UTC-3',
        note: 'Multiple time zones',
      },
      tourists: {
        range: '137.9 million',
        note: 'International Tourists, 2019',
      },
      demographics: {
        countries: '23',
        population: '579 million',
      },
      heritage: {
        range: '23',
        note: 'UNESCO World Heritage Sites',
      },
    },
    cities: {
      iconic: {
        title: 'Iconic Metropolises',
        desc: 'Explore major cities with famous landmarks and rich cultural experiences',
        list: [
          {
            city: {
              name: 'New York',
              parentId: "29475437",
              iataCode: 'NYC',
            },
            country: {
              name: 'United States',
              entityId: "29475437",
              parentId: "205351567",
            }
          },
          {
            city: {
              name: 'Los Angeles',
              parentId: "29475437",
              iataCode: 'LAX',
            },
            country: {
              name: 'United States',
              entityId: "29475437",
              parentId: "205351567",
            }
          },
          // "Los Angeles, USA",
          // "Chicago, USA",
          // "Toronto, Canada",
          // "San Francisco, USA",
          // "Mexico City, Mexico",
          // "Montreal, Canada",
          // "Vancouver, Canada",
          // "Miami, USA",
          // "Washington, D.C., USA"
        ],
      },
      coastal: {
        title: 'Coastal Gems and Beach Retreats',
        desc: 'Plan a beach escape to cities with sunny vibes, entertainment, and charming coastal retreats',
        list: [
          {
            "city": {
              "name": "Miami",
              "parentId": "4140963",
              "iataCode": "MIA"
            },
            "country": {
              "name": "United States",
              "entityId": "4140964",
              "parentId": "6252001"
            }
          },
          {
            "city": {
              "name": "San Diego",
              "parentId": "5391811",
              "iataCode": "SAN"
            },
            "country": {
              "name": "United States",
              "entityId": "5391811",
              "parentId": "6252001"
            }
          },
          {
            "city": {
              "name": "Honolulu",
              "parentId": "5856195",
              "iataCode": "HNL"
            },
            "country": {
              "name": "United States",
              "entityId": "5856197",
              "parentId": "6252001"
            }
          },
          {
            "city": {
              "name": "Cancun",
              "parentId": "3531673",
              "iataCode": "CUN"
            },
            "country": {
              "name": "Mexico",
              "entityId": "3531674",
              "parentId": "23424900"
            }
          },
          {
            "city": {
              "name": "Charleston",
              "parentId": "4574324",
              "iataCode": "CHS"
            },
            "country": {
              "name": "United States",
              "entityId": "4574324",
              "parentId": "6252001"
            }
          },
          {
            "city": {
              "name": "Santa Monica",
              "parentId": "5393212",
              "iataCode": "SMO"
            },
            "country": {
              "name": "United States",
              "entityId": "5393212",
              "parentId": "6252001"
            }
          },
          {
            "city": {
              "name": "Tulum",
              "parentId": "3515040",
              "iataCode": "TUY"
            },
            "country": {
              "name": "Mexico",
              "entityId": "3515041",
              "parentId": "23424900"
            }
          },
          {
            "city": {
              "name": "Newport",
              "parentId": "5224151",
              "iataCode": "JFK"
            },
            "country": {
              "name": "United States",
              "entityId": "5224151",
              "parentId": "6252001"
            }
          },
          {
            "city": {
              "name": "Acapulco",
              "parentId": "3533462",
              "iataCode": "ACA"
            },
            "country": {
              "name": "Mexico",
              "entityId": "3533463",
              "parentId": "23424900"
            }
          },
          {
            "city": {
              "name": "Myrtle Beach",
              "parentId": "4588718",
              "iataCode": "MYR"
            },
            "country": {
              "name": "United States",
              "entityId": "4588718",
              "parentId": "6252001"
            }
          }
        ],

      },
      cultural: {
        title: 'Cultural Hubs and Heritage Cities',
        desc: 'Immerse yourself in history and culture in cities known for their traditions and artistic scenes',
        // list: ["New Orleans, USA", "Quebec City, Canada", "San Antonio, USA", "Philadelphia, USA", "Boston, USA", "Oaxaca, Mexico", "Savannah, USA", "Guadalajara, Mexico", "Puebla, Mexico", "Quebec City, Canada"],
      },
      nature: {
        title: 'Nature and Adventure Destinations',
        desc: 'Enjoy outdoor adventures in cities surrounded by stunning landscapes and natural wonders',
        // list: ["Vancouver, Canada", "Banff, Canada", "Denver, USA", "Anchorage, USA", "Asheville, USA", "Portland, USA", "Lake Tahoe, USA", "Calgary, Canada", "Boulder, USA", "Jackson Hole, USA"],
      },
      foodie: {
        title: 'Foodie Favorites and Culinary Delights',
        desc: 'Indulge in diverse flavors and gourmet experiences in cities known for their culinary delights',
        // list: ["Montreal, Canada", "New York City, USA", "Mexico City, Mexico", "Austin, USA", "Portland, USA", "Charleston, USA", "San Francisco, USA", "New Orleans, USA", "Vancouver, Canada", "Chicago, USA"],
      },
    },


    tag: "Breakfast Included",
    slideImg: ["/img/destinations/continents/2.png", "/img/destinations/continents/1.png", "/img/destinations/continents/3.png"],
    img: "/img/destinations/continents/las-vegas.jpg",
    title: "",
    location: "",
    ratings: "",
    numberOfReviews: "",
    price: "",
    delayAnimation: "",
    city: "",
    category: "",
    images: {
      heroImg: 'heroImg',
      slideImg: 'slideImg',
    }
  },

  //      South America
  {
    slug: 'south-america',
    name: 'South America',
    intro: {
      title: 'Experience the Wonders of South America: A Comprehensive Travel Guide',
      text: `Welcome to the enchanting world of South America, a continent where vibrant cultures, diverse landscapes, and rich history converge. In this comprehensive travel guide, we invite you to explore the mesmerizing beauty of South America—from the lush Amazon rainforest to the ancient ruins of Machu Picchu. Get ready for an unforgettable journey through this dynamic and captivating continent.
       <h6>Geography:</h6>South America's geography is a symphony of natural wonders. From the awe-inspiring Andes mountain range to the vast Amazon Basin, and from the sun-kissed beaches of Brazil to the unique landscapes of Patagonia, every corner of the continent offers a kaleidoscope of breathtaking scenery.
       <!--DIVIDER-->
       <h6>Countries:</h6>Embark on a cultural odyssey as you traverse the countries of South America. In Brazil, revel in the rhythm of Rio de Janeiro's Carnival, explore the Amazon rainforest, and relax on the pristine beaches of Copacabana. Peru beckons with the ancient mysteries of Machu Picchu and the vibrant markets of Cusco. Argentina captivates with the tango in Buenos Aires and the stunning landscapes of Patagonia.
       <h6>Climate:</h6>Navigate the varied climates of South America to plan your perfect getaway. From the equatorial warmth of the Amazon to the temperate climate of the Andean highlands, and the coastal breezes of Chile to the arid landscapes of the Atacama Desert, our guide provides insights for every season and region.
       <h6>Major Cities:</h6>Immerse yourself in the unique charm of South America's major cities. Buenos Aires entices with its European flair and cultural richness, while Rio de Janeiro dazzles with its iconic Carnival and stunning beaches. Explore the colonial architecture of Lima, Peru, and experience the cosmopolitan energy of Bogotá, Colombia.
       <h6>Culture and Language:</h6>South America's cultural tapestry is woven with indigenous traditions, colonial influences, and modern innovations. Spanish and Portuguese are the predominant languages, each contributing to the continent's linguistic diversity. Engage with local communities to truly appreciate the vibrant cultures that thrive throughout South America.
       <h6>Cuisine:</h6>Embark on a culinary journey that reflects the continent's diverse heritage. Indulge in the flavors of Brazilian churrasco, Peruvian ceviche, and Argentine asado. South American cuisine is a fusion of indigenous ingredients and international influences, creating a gastronomic adventure for every palate.
       <h6>Activities and Attractions:</h6>Discover a wealth of activities and attractions that showcase South America's natural and cultural wonders. Trek to the summit of Machu Picchu, cruise the Galápagos Islands for unique wildlife encounters, or dance the night away in the lively streets of Cartagena. From the stunning Iguazu Falls to the mysterious Nazca Lines, South America promises an array of unforgettable experiences.
       <h6>Transportation:</h6>Navigate the vast continent with ease using our transportation tips. From well-connected airports to scenic bus routes and local ferries, South America offers diverse options for traveling between cities and exploring remote destinations. Consider domestic flights for efficient travel and embark on unforgettable road trips through picturesque landscapes.
       <h6>Accommodations:</h6>Find the perfect accommodations to suit your travel style. Whether you prefer boutique hotels in historic city centers, eco-friendly lodges in the heart of the jungle, or beachfront resorts overlooking the Pacific, South America offers a range of options to enhance your journey.
       <h6>Safety and Travel Tips:</h6>Ensure a safe and enriching adventure with our travel tips. Stay informed about visa requirements, health precautions, and local customs. Be mindful of altitude in highland areas, pack accordingly for diverse climates, and embrace the warmth of South American hospitality.
       Embark on a journey of discovery as you traverse the wonders of South America. Let this travel guide be your compass, guiding you through a continent that promises cultural richness, natural beauty, and unparalleled experiences. Start planning your South American adventure today, and let the magic unfold.
       Seize the opportunity to explore South America by unlocking exclusive deals on flights, accommodations, and activities. Your dream adventure awaits—book now and create memories that will last a lifetime!
       `,
    },
    weather: {
      winter: {
        celsius: "-5°C to 15°C",
        fahrenheit: "23°F to 59°F"
      },
      spring: {
        celsius: "10°C to 25°C",
        fahrenheit: "50°F to 77°F"
      },
      summer: {
        celsius: "25°C to 40°C",
        fahrenheit: "77°F to 104°F"
      },
      autumn: {
        celsius: "15°C to 25°C",
        fahrenheit: "59°F to 77°F"
      },
    },
    info: {
      timezone: {
        range: 'UTC-10 to UTC-3',
        note: 'Multiple time zones',
      },
      tourists: {
        range: 'Varies by country',
        note: 'Brazil - 6.6 million',
      },
      demographics: {
        countries: '12',
        population: '432 million',
      },
      heritage: {
        range: '100',
        note: 'UNESCO World Heritage Sites',
      },
    },
    cities: {
      iconic: {
        title: 'Iconic Metropolises',
        desc: 'Explore vibrant cities with iconic landmarks for an unforgettable urban adventure',
        list: ["Rio de Janeiro, Brazil", "Buenos Aires, Argentina", "São Paulo, Brazil", "Lima, Peru", "Bogotá, Colombia", "Santiago, Chile", "Quito, Ecuador", "Caracas, Venezuela", "Montevideo, Uruguay", "Asunción, Paraguay"],
      },
      coastal: {
        title: 'Coastal Gems and Beach Retreats',
        desc: 'Plan your perfect beach escape in cities with sun-soaked vibes and charming coastal retreats',
        list: ["Rio de Janeiro, Brazil", "Cartagena, Colombia", "Salvador, Brazil", "Máncora, Peru", "Punta del Este, Uruguay", "Angra dos Reis, Brazil", "Santa Marta, Colombia", "Guayaquil, Ecuador", "Florianópolis, Brazil", "Vina del Mar, Chile"],
      },
      cultural: {
        title: 'Cultural Hubs and Heritage Cities',
        desc: 'Immerse in history and culture in cities rich in heritage and artistic expression',
        list: ["Cusco, Peru", "Salta, Argentina", "Córdoba, Argentina", "Ouro Preto, Brazil", "Sucre, Bolivia", "Medellín, Colombia", "Valparaíso, Chile", "Arequipa, Peru", "Porto Alegre, Brazil", "Cuenca, Ecuador"],
      },
      nature: {
        title: 'Nature and Adventure Destinations',
        desc: 'Embark on outdoor adventures in cities surrounded by breathtaking landscapes',
        list: ["Machu Picchu, Peru", "Torres del Paine, Chile", "Iguazu Falls, Argentina", "Amazon Rainforest (Various Countries)", "Galápagos Islands, Ecuador", "Patagonia (Various Countries)", "Uyuni Salt Flats, Bolivia", "Cotopaxi, Ecuador", "Bariloche, Argentina", "Chapada Diamantina, Brazil"],
      },
      foodie: {
        title: 'Foodie Favorites and Culinary Delights',
        desc: 'Indulge in diverse flavors as you explore cities known for culinary delights',
        list: ["Lima, Peru", "Buenos Aires, Argentina", "São Paulo, Brazil", "Medellín, Colombia", "Quito, Ecuador", "Santiago, Chile", "La Paz, Bolivia", "Córdoba, Argentina", "Bogotá, Colombia", "Asunción, Paraguay"],
      },
    },

    tag: "",
    slideImg: ["/img/destinations/continents/2.png", "/img/destinations/continents/1.png", "/img/destinations/continents/3.png"],
    img: "/img/destinations/continents/south-america1.jpg",
    title: "",
    location: "",
    ratings: "",
    numberOfReviews: "",
    price: "",
    delayAnimation: "",
    city: "",
    category: "",
  },

  //      EUROPE
  {
    slug: 'europe',
    name: 'Europe',
    intro: {
      title: 'Experience the Splendors of Europe: A Comprehensive Travel Guide',
      text: `Welcome to the enchanting continent of Europe, where history, culture, and breathtaking landscapes come together to create an unparalleled travel experience. Join us on a journey through this diverse and captivating region as we explore iconic cities, historic landmarks, and the natural wonders that define Europe's allure.
       <h6>Geography:</h6>Europe's geography is a mesmerizing blend of mountains, rivers, coastlines, and picturesque countryside. From the majestic Alps to the serene Baltic Sea, and from the Mediterranean's sun-soaked beaches to the enchanting fjords of Scandinavia, Europe offers a stunning array of landscapes to discover.
       <!--DIVIDER-->
       <h6>Countries:</h6>Embark on a cultural odyssey through Europe's diverse countries. In Italy, be captivated by the artistry of Rome, the romance of Venice, and the cultural richness of Florence. Explore the historical treasures of France, from the iconic Eiffel Tower in Paris to the vineyards of Bordeaux. Delve into the fairytale landscapes of Germany, the ancient history of Greece, and the vibrant charm of Spain.
       <h6>Climate:</h6>Europe's climate varies widely, offering everything from Mediterranean sun to Nordic snow. Plan your visit according to your preferred weather – bask in the sun on the beaches of the Amalfi Coast, enjoy the crisp air in the Swiss Alps, or experience the magic of a snowy winter in Lapland.
       <h6>Major Cities:</h6>Immerse yourself in the rich history and modern vibrancy of Europe's major cities. Wander through the cobbled streets of Prague, explore the architectural marvels of Barcelona, and indulge in the art and fashion of Milan. Each city tells a unique story, blending tradition with contemporary allure.
       <h6>Culture and Language:</h6>Europe's cultural tapestry is woven with the threads of diverse traditions, languages, and lifestyles. Whether you're savoring a gelato in Rome, attending a classical concert in Vienna, or enjoying tapas in Madrid, you'll experience the unique charm that defines European culture.
       <h6>Cuisine:</h6>Dive into the culinary delights of Europe, where each country offers a gastronomic adventure. Indulge in French pastries and wines, savor authentic pasta dishes in Italy, or enjoy hearty German sausages and beer. From tapas in Spain to Greek moussaka, Europe's cuisine is a feast for the senses.
       <h6>Activities and Attractions:</h6>Discover a wealth of activities and attractions across Europe. Marvel at the architectural wonders of Rome's Colosseum and the historic charm of Edinburgh Castle. Hike the scenic trails of the Swiss Alps, cruise along the Danube River, or relax on the beaches of the French Riviera.
       <h6>Transportation:</h6>Europe's efficient transportation network makes exploring easy. Navigate the continent using high-speed trains, extensive bus networks, and well-connected airports. Whether you're hopping between cities or embarking on a countryside adventure, Europe's transportation system ensures a smooth journey.
       <h6>Accommodations:</h6>Choose from a diverse range of accommodations to suit your preferences. Stay in charming boutique hotels in Paris, historic castles in Scotland, or beachside resorts in the Greek Islands. Europe offers accommodations that cater to every style and budget.
       <h6>Safety and Travel Tips:</h6>Ensure a safe and enjoyable journey with our travel tips. Familiarize yourself with visa requirements, local customs, and emergency information. Pack accordingly for varying climates, and consider travel insurance for added peace of mind.
       Embark on a voyage of discovery as you explore the wonders of Europe. Let this travel guide be your companion, guiding you through a continent that seamlessly blends the old-world charm with modern allure. Start planning your European adventure today, and create memories that will last a lifetime.
       Begin your European escapade by securing exclusive deals on flights, accommodations, and activities. Unleash the explorer in you and seize the opportunity to make unforgettable memories in the heart of Europe! Book now and let the magic unfold.
       `,
    },
    weather: {
      winter: {
        celsius: "-10°C to 5°C",
        fahrenheit: "14°F to 41°F"
      },
      spring: {
        celsius: "5°C to 20°C",
        fahrenheit: "41°F to 68°F"
      },
      summer: {
        celsius: "20°C to 35°C",
        fahrenheit: "68°F to 95°F"
      },
      autumn: {
        celsius: "5°C to 15°C",
        fahrenheit: "41°F to 59°F"
      },
    },
    info: {
      timezone: {
        range: 'UTC-1 to UTC+3',
        note: 'Multiple time zones',
      },
      tourists: {
        range: '743.1 million',
        note: 'International Tourists, 2019',
      },
      demographics: {
        countries: '44',
        population: '747 million',
      },
      heritage: {
        range: '445',
        note: 'UNESCO World Heritage Sites',
      },
    },
    cities: {
      iconic: {
        title: 'Iconic Metropolises',
        desc: 'Explore vibrant cities with iconic landmarks for an unforgettable urban adventure.',
        list: ["Paris, France", "London, United Kingdom", "Rome, Italy", "Berlin, Germany", "Barcelona, Spain", "Amsterdam, Netherlands", "Prague, Czech Republic", "Vienna, Austria", "Athens, Greece", "Dublin, Ireland"],
      },
      coastal: {
        title: 'Coastal Gems and Beach Retreats',
        desc: 'Plan your perfect beach escape in cities with sun-soaked vibes and charming coastal retreats',
        list: ["Barcelona, Spain", "Amalfi Coast, Italy", "Nice, France", "Dubrovnik, Croatia", "Algarve, Portugal", "Cinque Terre, Italy", "Santorini, Greece", "Mykonos, Greece", "St. Tropez, France", "Brighton, United Kingdom"],
      },
      cultural: {
        title: 'Cultural Hubs and Heritage Cities',
        desc: 'Immerse in history and culture in cities rich in heritage and artistic expression',
        list: ["Florence, Italy", "Vienna, Austria", "Prague, Czech Republic", "Edinburgh, United Kingdom", "Budapest, Hungary", "Krakow, Poland", "Seville, Spain", "Salzburg, Austria", "Granada, Spain", "Valletta, Malta"],
      },
      nature: {
        title: 'Nature and Adventure Destinations',
        desc: 'Embark on outdoor adventures in cities surrounded by breathtaking landscapes',
        list: ["Interlaken, Switzerland", "Innsbruck, Austria", "Bergen, Norway", "Zakopane, Poland", "Lake Bled, Slovenia", "Scottish Highlands, United Kingdom", "Plitvice Lakes National Park, Croatia", "The Dolomites, Italy", "Lake District, United Kingdom", "Swiss Alps, Switzerland"]
      },
      foodie: {
        title: 'Foodie Favorites and Culinary Delights',
        desc: 'Indulge in diverse flavors as you explore cities known for culinary delights',
        list: ["Paris, France", "Bologna, Italy", "Lyon, France", "Barcelona, Spain", "Brussels, Belgium", "Athens, Greece", "Lisbon, Portugal", "Copenhagen, Denmark", "Turin, Italy", "Madrid, Spain"],
      },
    },

    tag: "best seller",
    slideImg: ["/img/destinations/continents/3.png"],
    img: "/img/destinations/continents/europe.jpg",
    title: "",
    location: "",
    ratings: "",
    numberOfReviews: "",
    price: "",
    delayAnimation: "",
    city: "",
    category: "",
  },

  //      Middle East
  {
    slug: 'middle-east',
    name: 'Middle East',
    intro: {
      title: 'Unveiling the Charms of the Middle East: Your Ultimate Travel Guide',
      text: `Welcome to the enchanting Middle East, a region where ancient history, vibrant cultures, and modern wonders converge. This comprehensive travel guide invites you to explore the rich tapestry of landscapes, traditions, and experiences that make the Middle East a captivating destination.
       <h6>Geography:</h6>The Middle East, at the crossroads of Europe, Asia, and Africa, boasts a diverse geography. From the rolling deserts of Saudi Arabia to the historic landscapes of Jordan and the coastal beauty of Lebanon, each country offers a unique blend of ancient wonders and modern marvels.
       <!--DIVIDER-->
       <h6>Countries:</h6>Embark on a journey through the countries of the Middle East. Discover the iconic pyramids of Egypt, the bustling markets of Morocco, the futuristic skyline of Dubai in the United Arab Emirates, and the historical treasures of Iran. Each country is a mosaic of cultures, offering a glimpse into the region's rich heritage.
       <h6>Climate:</h6>Understanding the climate is crucial for planning your Middle Eastern adventure. Experience the warmth of the Arabian sun, the Mediterranean breezes, and the cooler temperatures of higher elevations. Be mindful of seasonal variations and plan your visit to coincide with the ideal weather for your desired activities.
       <h6>Major Cities:</h6>Immerse yourself in the vibrant cities that define the Middle East. Cairo, with its ancient wonders and bustling markets, is a gateway to Egypt's treasures. Istanbul, where East meets West, offers a blend of history and modernity. Tel Aviv's beaches and Jerusalem's historical significance beckon visitors to Israel. Each city narrates a story of cultural richness and innovation.
       <h6>Culture and Language:</h6>The Middle East is a melting pot of cultures, religions, and languages. Embrace the hospitality of the people, witness traditional ceremonies, and explore the region's art, music, and literature. Arabic is the predominant language, but English is widely spoken in many tourist areas.
       <h6>Cuisine:</h6>Embark on a culinary journey through the Middle East. Indulge in the aromatic spices of Moroccan tagines, savor Lebanese mezze, and delight in the diverse flavors of Persian cuisine. From the street markets of Istanbul to the fine dining restaurants of Dubai, the Middle East tantalizes the taste buds with its gastronomic delights.
       <h6>Activities and Attractions:</h6>Discover a wealth of activities and attractions in the Middle East. Explore the ancient city of Petra in Jordan, marvel at the Pyramids of Giza, relax on the beaches of Oman, or experience the futuristic ambiance of Doha. Whether you seek historical wonders, natural beauty, or modern luxury, the Middle East has it all.
       <h6>Transportation:</h6>Efficient transportation networks make exploring the Middle East convenient. International airports, well-maintained highways, and modern public transit systems connect major cities and attractions. Consider local modes of transportation, such as camels or traditional boats, for a unique cultural experience.
       <h6>Accommodations:</h6>Choose from a variety of accommodations that cater to every traveler's preferences. Luxurious hotels in Dubai offer skyline views, while riads in Morocco provide an authentic experience. Experience the warmth of Arabian hospitality in traditional guesthouses or relax in modern resorts along the Red Sea.
       <h6>Safety and Travel Tips:</h6>Ensure a safe and respectful journey with our travel tips. Be aware of local customs, dress codes, and cultural sensitivities. Stay informed about visa requirements, health precautions, and security guidelines. The Middle East welcomes travelers with open arms, and a little preparation ensures a smooth and enjoyable experience.
       Embark on an enchanting journey through the Middle East, where ancient wonders meet modern marvels. Let this travel guide be your companion as you explore the diverse landscapes, cultures, and experiences that await. Start planning your Middle Eastern adventure today and create memories that will last a lifetime.
       Unlock exclusive deals on flights, accommodations, and activities by booking your Middle Eastern getaway now. Embrace the magic of this extraordinary region and let your journey into the heart of the Middle East begin!
       `,
    },
    weather: {
      winter: {
        celsius: "5°C to 20°C",
        fahrenheit: "41°F to 68°F"
      },
      spring: {
        celsius: "15°C to 30°C",
        fahrenheit: "59°F to 86°F"
      },
      summer: {
        celsius: "25°C to 45°C",
        fahrenheit: "77°F to 113°F"
      },
      autumn: {
        celsius: "15°C to 30°C",
        fahrenheit: "59°F to 86°F"
      },
    },
    info: {
      timezone: {
        range: 'UTC-10 to UTC-3',
        note: 'Multiple time zones',
      },
      tourists: {
        range: '86.2 million',
        note: 'International Tourists, 2019',
      },
      demographics: {
        countries: '18',
        population: '430 million',
      },
      heritage: {
        range: '89',
        note: 'UNESCO World Heritage Sites',
      },
    },
    cities: {
      iconic: {
        title: 'Iconic Metropolises',
        desc: 'Explore vibrant cities with iconic landmarks for an unforgettable urban adventure',
        list: ["Dubai, UAE", "Istanbul, Turkey", "Tel Aviv, Israel", "Doha, Qatar", "Abu Dhabi, UAE", "Riyadh, Saudi Arabia", "Jerusalem, Israel", "Amman, Jordan", "Muscat, Oman", "Beirut, Lebanon"],
      },
      coastal: {
        title: 'Coastal Gems and Beach Retreats',
        desc: 'Plan your perfect coastal escape in cities with sun-soaked vibes and charming retreats',
        list: ["Dubai, UAE", "Tel Aviv, Israel", "Muscat, Oman", "Beirut, Lebanon", "Jeddah, Saudi Arabia", "Aqaba, Jordan", "Manama, Bahrain", "Larnaca, Cyprus", "Salalah, Oman", "Limassol, Cyprus"],
      },
      cultural: {
        title: 'Cultural Hubs and Heritage Cities',
        desc: 'Immerse in history and culture in cities rich in heritage and artistic expression',
        list: ["Istanbul, Turkey", "Tel Aviv, Israel", "Jerusalem, Israel", "Amman, Jordan", "Muscat, Oman", "Beirut, Lebanon", "Cairo, Egypt", "Shiraz, Iran", "Isfahan, Iran", "Petra, Jordan"],
      },
      nature: {
        title: 'Nature and Adventure Destinations',
        desc: 'Embark on outdoor adventures in cities surrounded by breathtaking landscapes',
        list: ["Muscat, Oman", "Petra, Jordan", "Shiraz, Iran", "Isfahan, Iran", "Tabriz, Iran", "Esfahan, Iran", "Salalah, Oman", "Mount Ararat, Turkey", "Wadi Rum, Jordan", "Dead Sea, Israel/Jordan"],
      },
      foodie: {
        title: 'Foodie Favorites and Culinary Delights',
        desc: 'Indulge in diverse flavors as you explore cities known for culinary delights',
        list: ["Tel Aviv, Israel", "Jerusalem, Israel", "Beirut, Lebanon", "Istanbul, Turkey", "Amman, Jordan", "Muscat, Oman", "Doha, Qatar", "Jeddah, Saudi Arabia", "Manama, Bahrain", "Riyadh, Saudi Arabia"],
      },
    },

    tag: "top rated",
    slideImg: ["/img/destinations/continents/4.png"],
    img: "/img/destinations/continents/petra-camels.jpg",
    title: "",
    location: "",
    ratings: "",
    numberOfReviews: "",
    price: "",
    delayAnimation: "",
    city: "",
    category: "",
  },

  //      AFRICA
  {
    slug: 'africa',
    name: 'Africa',
    intro: {
      title: 'Embark on an African Odyssey: A Comprehensive Travel Guide',
      text: `Welcome to the enchanting continent of Africa, a land of diverse landscapes, rich cultures, and unparalleled adventures. In this comprehensive travel guide, we invite you to explore the wonders that make Africa a unique and captivating destination. From the vast deserts to lush rainforests, ancient civilizations to modern metropolises, Africa is a treasure trove waiting to be discovered.
       <h6>Geography:</h6>Africa, the second-largest continent, boasts a spectacular variety of landscapes. From the Sahara Desert in the north to the lush jungles of Central Africa and the iconic savannas of East Africa, the continent is a mosaic of natural beauty. Discover the majestic Victoria Falls, the towering Atlas Mountains, and the pristine beaches along the Indian and Atlantic Oceans.
       <!--DIVIDER-->
       <h6>Countries:</h6>Embark on a journey through Africa's diverse countries. Explore the wildlife-rich plains of Kenya and Tanzania, the ancient wonders of Egypt, and the vibrant cities of South Africa. From the bustling markets of Marrakech to the serene beaches of Zanzibar, each country offers a unique blend of history, culture, and natural beauty.
       <h6>Climate:</h6>Africa's climate is as diverse as its landscapes. Experience the warmth of the Sahara Desert, the mild Mediterranean climate of North Africa, and the tropical conditions near the equator. Our guide provides insights into the best times to visit each region, ensuring an enjoyable and comfortable travel experience.
       <h6>Major Cities:</h6>Immerse yourself in the vibrant energy of Africa's major cities. From the bustling streets of Cairo with its ancient pyramids to the cosmopolitan flair of Cape Town and the cultural richness of Marrakech, each city tells a story of history, art, and modern life.
       <h6>Culture and Language:</h6>Africa's cultural tapestry is woven with a myriad of traditions, languages, and customs. Explore the diverse heritage of the Maasai in East Africa, the ancient civilizations of Egypt and Mali, and the modern artistic scenes in cities like Lagos and Nairobi. With a multitude of languages spoken, including Swahili, Arabic, and French, Africa is a continent of linguistic richness.
       <h6>Cuisine:</h6>Embark on a culinary journey through Africa's diverse flavors. Indulge in Moroccan tagines, South African braais (barbecues), and West African jollof rice. Sample exotic fruits, spices, and traditional dishes that reflect the continent's rich agricultural bounty and cultural heritage.
       <h6>Activities and Attractions:</h6>Africa offers a wealth of activities and attractions for every traveler. Witness the Great Migration in the Serengeti, explore the ancient ruins of Carthage, or unwind on the pristine beaches of Seychelles. Dive into the vibrant marine life of the Red Sea, trek to the summit of Mount Kilimanjaro, or experience the rhythm of traditional music and dance festivals.
       <h6>Transportation:</h6>Efficient transportation options make navigating Africa accessible. Major airports in cities like Johannesburg, Nairobi, and Cairo connect the continent, while well-maintained road networks and domestic flights facilitate exploration. Consider guided safaris, scenic train journeys, and local transportation for an authentic experience.
       <h6>Accommodations:</h6>Choose from a range of accommodations that suit your preferences. Stay in luxury safari lodges overlooking the savannah, boutique hotels in historic medinas, or beachfront resorts in the Seychelles. Our guide helps you find accommodations that enhance your African adventure.
       <h6>Safety and Travel Tips:</h6>Stay informed and travel confidently with our safety tips. Understand visa requirements, health precautions, and local customs. Respect wildlife in national parks, stay hydrated in desert regions, and be mindful of cultural sensitivities. Travel insurance is recommended for added peace of mind.
       Embark on an African odyssey and let the continent's magic unfold. Use this travel guide as your compass, guiding you through a land of wonders, traditions, and breathtaking landscapes. Start planning your African adventure today, and create memories that will last a lifetime.
       Unlock exclusive deals on flights, accommodations, and activities by booking your African odyssey now. Seize the opportunity to experience the beauty and diversity of Africa – your next great adventure awaits!
       `,
    },
    weather: {
      winter: {
        celsius: "5°C to 20°C",
        fahrenheit: "41°F to 68°F"
      },
      spring: {
        celsius: "15°C to 30°C",
        fahrenheit: "59°F to 86°F"
      },
      summer: {
        celsius: "25°C to 40°C",
        fahrenheit: "77°F to 104°F"
      },
      autumn: {
        celsius: "15°C to 30°C",
        fahrenheit: "59°F to 86°F"
      },
    },
    info: {
      timezone: {
        range: 'UTC-1 to UTC+4',
        note: 'Multiple time zones',
      },
      tourists: {
        range: '67.1 million',
        note: 'International Tourists, 2019',
      },
      demographics: {
        countries: '54',
        population: '1.37 billion',
      },
      heritage: {
        range: '154',
        note: 'UNESCO World Heritage Sites',
      },
    },
    cities: {
      iconic: {
        title: 'Iconic Metropolises',
        desc: 'Explore vibrant cities with iconic landmarks for an unforgettable urban adventure',
        list: ["Cairo, Egypt", "Cape Town, South Africa", "Marrakech, Morocco", "Nairobi, Kenya", "Accra, Ghana", "Johannesburg, South Africa", "Lagos, Nigeria", "Addis Ababa, Ethiopia", "Casablanca, Morocco", "Dakar, Senegal"],
      },
      coastal: {
        title: 'Coastal Gems and Beach Retreats',
        desc: 'Plan your perfect beach escape in cities with sun-soaked vibes and charming coastal retreats',
        list: ["Cape Town, South Africa", "Mombasa, Kenya", "Casablanca, Morocco", "Dakar, Senegal", "Durban, South Africa", "Alexandria, Egypt", "Maputo, Mozambique", "Essaouira, Morocco", "Mauritius", "Seychelles"],
      },
      cultural: {
        title: 'Cultural Hubs and Heritage Cities',
        desc: 'Immerse in history and culture in cities rich in heritage and artistic expression',
        list: ["Marrakech, Morocco", "Cairo, Egypt", "Timbuktu, Mali", "Lalibela, Ethiopia", "Zanzibar City, Tanzania", "Fez, Morocco", "Stone Town, Tanzania", "Saint-Louis, Senegal", "Goree Island, Senegal", "Cape Town, South Africa"],
      },
      nature: {
        title: 'Nature and Adventure Destinations',
        desc: 'Embark on outdoor adventures in cities surrounded by breathtaking landscapes',
        list: ["Cape Town, South Africa", "Nairobi, Kenya", "Victoria Falls, Zimbabwe/Zambia", "Maun, Botswana", "Kilimanjaro, Tanzania", "Serengeti National Park, Tanzania", "Drakensberg Mountains, South Africa", "Akagera National Park, Rwanda", "Simien Mountains, Ethiopia", "Table Mountain, South Africa"],
      },
      foodie: {
        title: 'Foodie Favorites and Culinary Delights',
        desc: 'Indulge in diverse flavors as you explore cities known for culinary delights',
        list: ["Marrakech, Morocco", "Cairo, Egypt", "Addis Ababa, Ethiopia", "Cape Town, South Africa", "Accra, Ghana", "Lagos, Nigeria", "Nairobi, Kenya", "Dar es Salaam, Tanzania", "Cairo, Egypt", "Dakar, Senegal"],
      },
    },

    tag: "Breakfast Included",
    slideImg: ["/img/destinations/continents/continents/africa1.jpg"],
    img: "/img/destinations/continents/africa1.jpg",
    title: "",
    location: "",
    ratings: "",
    numberOfReviews: "",
    price: "",
    delayAnimation: "",
    city: "",
    category: "",
    images: {
      heroImg: 'heroImg',
      slideImg: 'slideImg',
    }
  },

  //      ASIA
  {
    slug: 'asia',
    name: 'Asia',
    intro: {
      title: `Unveiling Asia's Wonders: A Comprehensive Travel Guide`,
      text: `Embark on a mesmerizing journey through Asia, a continent steeped in ancient traditions, bustling metropolises, and breathtaking landscapes. Our comprehensive travel guide invites you to explore the diverse tapestry of cultures, cuisines, and experiences that make Asia an extraordinary destination for every traveler.
       <h6>Geography:</h6>Asia, the largest and most diverse continent, unfolds a spectacular canvas of geography. From the towering peaks of the Himalayas to the pristine beaches of Southeast Asia, and from the vast deserts of the Middle East to the lush rainforests of Southeast Asia, Asia's landscapes are as varied as its cultures. Marvel at the Great Wall of China, trek through the Himalayan trails, and relax on the picturesque beaches of Bali.
       <!--DIVIDER-->
       <h6>Countries:</h6>Delve into the enchanting countries that shape the mosaic of Asia. China, with its ancient history and modern marvels, invites exploration of the Forbidden City and the Terracotta Army. Japan captivates with a blend of traditional tea ceremonies and cutting-edge technology. India, a land of colors and contrasts, beckons with the Taj Mahal and vibrant street markets. Each country in Asia unfolds a unique chapter in the continent's rich narrative.
       <h6>Climate:</h6>Navigate Asia's diverse climate zones to plan your ideal journey. From the arid landscapes of the Middle East to the monsoon-soaked regions of Southeast Asia, understanding seasonal variations is essential. Choose between the snowy winters of Siberia, the tropical warmth of Thailand, or the temperate climate of South Korea based on your travel preferences.
       <h6>Major Cities:</h6>Immerse yourself in the vibrant energy of Asia's major cities. Tokyo's neon-lit streets and traditional shrines offer a dynamic blend of old and new. Explore the futuristic skyline of Shanghai, witness the ancient wonders of Delhi, and be captivated by the cultural kaleidoscope of Bangkok. Each city tells a unique story, providing a glimpse into Asia's rich heritage and modern dynamism.
       <h6>Culture and Language:</h6>Asia's cultural tapestry is woven with threads of ancient traditions and contemporary influences. Engage with diverse cultures, languages, and customs that define each region. From the intricate dance forms of Bali to the tea ceremonies of Japan, Asia's cultural landscape is a captivating exploration.
       <h6>Cuisine:</h6>Embark on a gastronomic adventure through Asia's diverse cuisines. Savor the delicate flavors of sushi in Japan, indulge in the spicy curries of India, and explore the street food markets of Bangkok. Asia's culinary scene is a sensory delight, offering a plethora of tastes and textures to tantalize your taste buds.
       <h6>Activities and Attractions:</h6>Asia offers a plethora of activities and attractions catering to every interest. Marvel at the architectural wonders of Angkor Wat, trek through the scenic landscapes of Nepal, or relax on the pristine beaches of the Maldives. Experience the spiritual ambiance of Varanasi, witness the futuristic skyline of Singapore, or go wildlife spotting in the jungles of Borneo.
       <h6>Transportation:</h6>Efficient transportation networks make exploring Asia seamless. Navigate bustling metropolises using modern public transit systems, embark on scenic train journeys through picturesque landscapes, or opt for budget-friendly regional flights to hop between countries. Asia's well-connected transportation options ensure a smooth and memorable journey.
       <h6>Accommodations:</h6>Discover a diverse range of accommodations across Asia. From opulent luxury resorts overlooking the skyline of Dubai to traditional ryokans in Kyoto and beachfront villas in Phuket, Asia offers a spectrum of options to suit every traveler's preferences. Choose your ideal stay and immerse yourself in the unique charm of each destination.
       <h6>Safety and Travel Tips:</h6>Ensure a safe and enjoyable journey with our travel tips. Stay informed about visa requirements, health precautions, and cultural sensitivities. Pack accordingly for varying climates, and embrace the local customs to enhance your travel experience. Travel insurance is recommended for added peace of mind.
       Embark on a journey of discovery as you traverse the wonders of Asia. Let our travel guide be your compass, guiding you through a continent that promises cultural richness, natural beauty, and unforgettable adventures. Begin your Asian odyssey today, and let the magic unfold.
       Book your Asian getaway now and unlock exclusive deals on flights, accommodations, and activities. Your extraordinary adventure awaits – seize the opportunity to create memories that will last a lifetime!
       `,
    },
    weather: {
      winter: {
        celsius: "-10°C to 10°C",
        fahrenheit: "14°F to 50°F"
      },
      spring: {
        celsius: "10°C to 25°C",
        fahrenheit: "50°F to 77°F"
      },
      summer: {
        celsius: "25°C to 40°C",
        fahrenheit: "77°F to 104°F"
      },
      autumn: {
        celsius: "10°C to 20°C",
        fahrenheit: "50°F to 68°F"
      },
    },
    info: {
      timezone: {
        range: 'UTC+4 to UTC+10',
        note: 'Multiple time zones',
      },
      tourists: {
        range: '348.5 million',
        note: 'International Tourists, 2019',
      },
      demographics: {
        countries: '49',
        population: '4.64 billion',
      },
      heritage: {
        range: '705',
        note: 'UNESCO World Heritage Sites',
      },
    },
    cities: {
      iconic: {
        title: 'Iconic Metropolises',
        desc: 'Explore vibrant cities with iconic landmarks for an unforgettable urban adventure',
        list: ["Tokyo, Japan", "Beijing, China", "Seoul, South Korea", "Shanghai, China", "Bangkok, Thailand", "Mumbai, India", "Singapore", "Hong Kong", "Dubai, UAE", "Osaka, Japan"],
      },
      coastal: {
        title: 'Coastal Gems and Beach Retreats',
        desc: 'Plan your perfect beach escape in cities with sun-soaked vibes and charming coastal retreats',
        list: ["Phuket, Thailand", "Bali, Indonesia", "Goa, India", "Busan, South Korea", "Maldives", "Sanya, China", "Colombo, Sri Lanka", "Langkawi, Malaysia", "Hua Hin, Thailand", "Okinawa, Japan"],
      },
      cultural: {
        title: 'Cultural Hubs and Heritage Cities',
        desc: 'Immerse in history and culture in cities rich in heritage and artistic expression',
        list: ["Kyoto, Japan", "Varanasi, India", "Jerusalem, Israel", "Xi'an, China", "Siem Reap, Cambodia", "Kathmandu, Nepal", "Istanbul, Turkey", "Luang Prabang, Laos", "Jaipur, India", "Samarkand, Uzbekistan"],
      },
      nature: {
        title: 'Nature and Adventure Destinations',
        desc: 'Embark on outdoor adventures in cities surrounded by breathtaking landscapes',
        list: ["Hokkaido, Japan", "Nepal Himalayas", "Borneo, Malaysia", "Yunnan, China", "Chiang Mai, Thailand", "Sapa, Vietnam", "Jeju Island, South Korea", "Rishikesh, India", "Almaty, Kazakhstan", "Naltar Valley, Pakistan"],
      },
      foodie: {
        title: 'Foodie Favorites and Culinary Delights',
        desc: 'Indulge in diverse flavors as you explore cities known for culinary delights',
        list: ["Osaka, Japan", "Bangkok, Thailand", "Seoul, South Korea", "Taipei, Taiwan", "Ho Chi Minh City, Vietnam", "Singapore", "Shanghai, China", "Mumbai, India", "Istanbul, Turkey", "Penang, Malaysia"],
      },
    },

    tag: "-25% today",
    slideImg: ["/img/destinations/continents/6.png"],
    img: "/img/destinations/continents/asia.jpg",
    title: "",
    location: "",
    ratings: "",
    numberOfReviews: "",
    price: "",
    delayAnimation: "",
    city: "",
    category: "",
  },

  //      Australia and Oceania
  {
    slug: 'australia-and-oceania',
    name: 'Australia and Oceania',
    intro: {
      title: 'Explore the Beauty of Australia and Oceania: A Comprehensive Travel Guide',
      text: `Embark on an extraordinary journey to Australia and Oceania, where a tapestry of stunning landscapes, rich cultures, and unparalleled adventures awaits. In this comprehensive travel guide, we'll unveil the treasures of this diverse region, guiding you through iconic landmarks, vibrant cities, and pristine natural wonders.
       <h6>Geography:</h6>Australia and Oceania, a realm of breathtaking beauty, encompass a vast array of landscapes. From the iconic Australian Outback to the lush rainforests of Papua New Guinea, and from the volcanic wonders of New Zealand to the tropical paradises of Fiji and Samoa, the region is a showcase of nature's wonders.
       <!--DIVIDER-->
       <h6>Countries:</h6>Delve into the unique charms of the countries that make up Australia and Oceania. Australia, with its cosmopolitan cities like Sydney and Melbourne, the Great Barrier Reef, and the rugged beauty of the Outback. New Zealand invites exploration of its majestic fjords, vibrant Maori culture, and outdoor adventures. Discover the diverse islands of Oceania, each with its own distinct identity, from Fiji's coral reefs to the ancient cultures of Tonga.
       <h6>Climate:</h6>Navigate the varied climates of Australia and Oceania to plan your ideal escape. Enjoy the sun-drenched beaches of Australia, where summers are warm and winters mild. In New Zealand, experience four distinct seasons, each offering its own allure. The tropical islands of Oceania boast warm temperatures year-round, creating a perfect backdrop for relaxation.
       <h6>Major Cities:</h6>Immerse yourself in the unique vibes of major cities across the region. Sydney's iconic Opera House and Harbour Bridge, Auckland's blend of urban sophistication and natural beauty, and the vibrant markets of Suva in Fiji – each city offers a distinct blend of culture, history, and modern living.
       <h6>Culture and Language:</h6>Experience the rich tapestry of cultures that define Australia and Oceania. From the indigenous traditions of the Aboriginal people in Australia to the Polynesian heritage in Samoa, immerse yourself in the stories, art, and customs that have shaped these diverse societies. English is widely spoken, along with indigenous languages and various Pacific Island languages.
       <h6>Cuisine:</h6>Savor the flavors of the Pacific with a culinary journey through Australia and Oceania. Taste the iconic meat pies and seafood delights in Australia, indulge in the hangi feasts of New Zealand, and experience the unique fusion of flavors in Polynesian and Melanesian cuisines.
       <h6>Activities and Attractions:</h6>Embark on thrilling adventures and explore natural wonders. Dive the Great Barrier Reef, hike the Milford Track in New Zealand, or witness the mesmerizing landscapes of the Bora Bora lagoon. Experience cultural festivals, traditional dances, and water-based activities that showcase the diversity of this region.
       <h6>Transportation:</h6>Efficient transportation networks make exploring Australia and Oceania seamless. From well-connected airports to scenic road trips, navigating between cities and islands is convenient. Consider domestic flights, rental cars, and ferry services to make the most of your journey.
       <h6>Accommodations:</h6>Discover a range of accommodations catering to every traveler's preference. Luxurious resorts overlooking the Whitsunday Islands, charming bed and breakfasts in Rotorua, or overwater bungalows in Tahiti – find the perfect stay to complement your unique adventure.
       <h6>Safety and Travel Tips:</h6>Stay informed about safety and travel tips for a worry-free journey. Understand visa requirements, health precautions, and local customs. Pack accordingly for varied climates and be aware of outdoor safety guidelines. Travel insurance is recommended for added peace of mind.
       Embark on an unforgettable journey through Australia and Oceania, where diverse landscapes and vibrant cultures converge. Let this comprehensive guide be your companion, unlocking the secrets of this enchanting region. Start planning your getaway today and immerse yourself in the wonders of Australia and Oceania.
       Secure exclusive deals on flights, accommodations, and activities by booking your Australian and Oceania adventure now. Your dream escape is just a click away – create memories that will last a lifetime!
       `,
    },
    weather: {
      winter: {
        celsius: '5°C to 20°C',
        fahrenheit: '41°F to 68°F',
      },
      spring: {
        celsius: '15°C to 25°C',
        fahrenheit: '59°F to 77°F',
      },
      summer: {
        celsius: '25°C to 35°C',
        fahrenheit: '77°F to 95°F',
      },
      autumn: {
        celsius: '15°C to 25°C',
        fahrenheit: '59°F to 77°F',
      },
    },
    info: {
      timezone: {
        range: 'UTC+8 to UTC+10',
        note: 'Multiple time zones',
      },
      tourists: {
        range: 'Varies by country',
        note: 'Australia - 9.3 million',
      },
      demographics: {
        countries: '14',
        population: '41 million',
      },
      heritage: {
        range: '35',
        note: 'UNESCO World Heritage Sites',
      },
    },
    cities: {
      iconic: {
        title: 'Iconic Metropolises',
        desc: 'Discover vibrant cities with iconic landmarks for an unforgettable urban adventure',
        list: ["Sydney, Australia", "Auckland, New Zealand", "Melbourne, Australia", "Brisbane, Australia", "Wellington, New Zealand", "Honolulu, USA", "Fiji, Fiji", "Queenstown, New Zealand", "Rarotonga, Cook Islands", "Suva, Fiji"],
      },
      coastal: {
        title: 'Coastal Gems and Beach Retreats',
        desc: 'Plan your perfect beach escape in cities with sun-soaked vibes and charming coastal retreats',
        list: ["Sydney, Australia", "Gold Coast, Australia", "Auckland, New Zealand", "Brisbane, Australia", "Honolulu, USA", "Fiji, Fiji", "Queenstown, New Zealand", "Port Vila, Vanuatu", "Nouméa, New Caledonia", "Apia, Samoa"],
      },
      cultural: {
        title: 'Cultural Hubs and Heritage Cities',
        desc: 'Immerse in history and culture in cities rich in heritage and artistic expression',
        list: ["Auckland, New Zealand", "Wellington, New Zealand", "Apia, Samoa", "Suva, Fiji", "Papeete, French Polynesia", "Nuku'alofa, Tonga", "Honiara, Solomon Islands", "Port Moresby, Papua New Guinea", "Hobart, Australia", "Rotorua, New Zealand"],
      },
      nature: {
        title: 'Nature and Adventure Destinations',
        desc: 'Embark on outdoor adventures in cities surrounded by breathtaking landscapes',
        list: ["Queenstown, New Zealand", "Cairns, Australia", "Rotorua, New Zealand", "Nadi, Fiji", "Bora Bora, French Polynesia", "Tahiti, French Polynesia", "Adelaide, Australia", "Dunedin, New Zealand", "Christchurch, New Zealand", "Papeete, French Polynesia"],
      },
      foodie: {
        title: 'Foodie Favorites and Culinary Delights',
        desc: 'Indulge in diverse flavors as you explore cities known for culinary delights',
        list: ["Melbourne, Australia", "Auckland, New Zealand", "Sydney, Australia", "Wellington, New Zealand", "Brisbane, Australia", "Queenstown, New Zealand", "Suva, Fiji", "Napier, New Zealand", "Hobart, Australia", "Adelaide, Australia"],
      },
    },

    tag: "best seller",
    slideImg: ["/img/destinations/continents/sydney.jpg"],
    img: "/img/destinations/continents/sydney.jpg",
    title: "",
    location: "",
    ratings: "",
    numberOfReviews: "",
    price: "",
    delayAnimation: "",
    city: "",
    category: "",
  },
];
