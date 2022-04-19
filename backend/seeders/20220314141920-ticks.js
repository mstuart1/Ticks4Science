'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ticks', [
      {
        "scientific": "Ixodes scapularis",
        "common": "Blacklegged Tick, Deer Tick",
        "colors": "Reddish and black or brown",
        "shape": "Oval or sesame seed-like",
        "hosts": "Primary hosts include mice, chipmunks, white-tailed deer, and people.",
        "habitat": "Leaf litter or dead and fallen plant material, including shrubby and wooded areas.",
        "njLocations": "Common locations are in rural and suburban areas. The first report of Ixodes scapularis in New Jersey was in Mercer County. It's understood that this tick is distributed statewide and is very common to come across.",
        "larvaeActive": "Active between April to November",
        "larvaeFeed": "larvae primarily feed on small mammals, such as mice and birds.",
        "nymphActive": "Active between April to July, October, November",
        "nymphFeed": "nymphs primarily feed on small to large mammals ranging from deer to people.",
        "adultActive": "Active between October to June months while above freezing temperatures",
        "adultFeed": 'adults primarily feed on large mammals, including people.',
        "intro": "The Blacklegged ticks are known for potentially carrying Lyme Disease, an inflammatory disease caused by a bacterial infection from an infected tick bite. Black-legged tick nymphs and adults tick can bite people, so it's essential to recognize if a tick is on you.",
      },
      {
        scientific: 'Amblyomma americanum',
        common: 'Lone Star Tick',
        njLocations: 'Primarily in southern parts of the state but may be expanding north',
        habitat: 'Very dry, forested areas, scrubby areas, or along the Atlantic coast',
        intro: 'Lone star ticks are three-host ticks, where the larval, nymphal, and adult stages can feed on people, domesticated animals, ground-dwelling birds, small and large wild mammals.',
        larvaeActive: 'Jul to Sep',
            larvaeFeed: 'birds and mammals excluding small rodents, and people',
        
            nymphActive: 'Mar to Oct',
            nymphFeed: 'birds and mammals excluding small rodents, and people',
        adultActive: 'Apr to Aug',
            adultFeed: 'large/medium-sized mammals, but can be found on small rodents, wild turkeys, and people.',
        shape: 'rounder in shape than other tick species',
        

    },
    {
      scientific: 'Amblyomma maculatum', 
    common: "Gulf Coast Tick",
    intro: `Formerly distributed in Southeastern U.S. but new populations are being reported in Delaware and Maryland.  The closest distribution was in Delaware's Bombay Hook National Wildlife Refuge which is less than 13 miles from the Delware Bay in New Jersey.  Salem, Cumberland, and Cape May Counties border the Delaware Bay.`,
    habitat: 'open grassy areas and pastures',
    },
    {
      scientific: 'Carios kelleyi', 
      habitat: 'Where bats roost, which may be places like older homes, barns or cabins.  Other environments include grasslands or vegetation along forest edges.',
    },
    {
      scientific: 'Dermacenter albipictus',
common: 'Moose Tick',
habitat: 'forested areas',
    },
    {
        
      scientific: 'Dermacenter variabilis',
              common: 'American Dog Tick, Wood Tick', njLocations: 'Rural and suburban areas, and was known to be found in vacant lots and rights-of-ways', 
               habitat: 'Tree-line edges with barely any tree coverage, grassy fields, or where vegetation is not maintained', 
               intro: 'The American Dog Tick, also known as the Wood Tick is commonly found in overgrown fields rather than in wooded, forestry areas. Pasteurizing cattle and horses are found to host these ticks, along with other types of mammals that roam fields including white-footed mice, meadow voles, and rats.', 
               larvaeActive: 'May to Sep', larvaeFeed: 'small wild mammals',
              nymphActive: 'Apr to Jul', nymphFeed: 'small wild mammals',
              adultActive: 'Mar to Aug', adultFeed: 'large mammals such as wild mammals, cattle, pets, and people' ,
              
              shape: 'oblong', 
              
          },
          {    scientific: 'Haemaphysalis leporispalustris', 
          common: 'Rabbit Tick',
          
          njLocations: 'Understood to be widely distributed across the eastern United States',
          habitat: 'forests with pines, shrubs, or mixed vegetation',},
          { 
            scientific: 'Haemaphysalis longicornis',
                common: 'Asian Longhorned Tick, Bush Tick', 
               
                njLocations: 'Hunterdon, Union, Middlesex, Mercer, Bergen, Somerset, Passaic, Camden, and Monmouth', 
                     
                habitat: 'Tall grasses, meadows, and pastures. Commonly found on farms.', 
                     
                intro: 'The Asian longhorned tick parasitizes and spreads quickly, commonly found among cattle and other farm animals in large numbers, but can feed on birds, pets, and humans. In 2017, the Longhorned Tick was first reported in the U.S. in New Jersey.', 
                     
               
                    adultFeed: 'animals dependent on temperature, humidity, and host availability' ,
                    
                    shape: 'tear-drop/sesame seed-like shape', 
                    
                },
                {
                  scientific: 'Ixodes brunneus', 
                  habitat: 'grasslands, woodlands, scrubs. Due to the migratory patterns of passerines, can be found in diverse environments',
                },
                {
                  scientific: 'Ixodes cookei',
                  habitat: 'fields, forests, hedgerows, and pastures',
                  
                },{ scientific: 'Ixodes dentatus', 
                intro: 'In later years, was identified in Bergen and Union counties.  This tick is usually distributed along the Atlantic Coast',
                habitat: 'grasslands, bushy woodlands, and croplands',},
                {
                     scientific: 'Ixodes texanus', habitat: 'moist woodland areas, farmlands, suburban, and urban areas', 
                },
                {
                  scientific: 'Rhipicephalus sanguineus', habitat: 'Outdoor environments near walls or gardens, adapted to homes in rural and urban areas'
                },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ticks', null, {});
  }
};
