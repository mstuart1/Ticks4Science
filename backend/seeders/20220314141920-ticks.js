'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ticks', [
      {
        "id": 1,
        "scientific": "Ixodes scapularis",
        "common": "Blacklegged Tick, Deer Tick",
        "intro": "The Blacklegged ticks are known for potentially carrying Lyme Disease, an inflammatory disease caused by a bacterial infection from an infected tick bite. Black-legged tick nymphs and adults tick can bite people, so it's essential to recognize if a tick is on you.",
        "humanHosts": 1,
        "hosts": "Primary hosts include mice, chipmunks, white-tailed deer, and people.",
        "habitat": "Leaf litter or dead and fallen plant material, including shrubby and wooded areas.",
        "njLocations": "Common locations are in rural and suburban areas. The first report of Ixodes scapularis in New Jersey was in Mercer County. It's understood that this tick is distributed statewide and is very common to come across.",
        "activeMonths": "",
        "buttonImgUrl": "https://digitalcommons.georgiasouthern.edu/usntc_key/1089/thumbnail.jpg",
        "featureImgUrl": "https://cdn.britannica.com/60/147860-050-9DCF7EFF/Black-legged-deer-tick.jpg?w=690&h=388",
        "mapImgUrl": "https://www.cdc.gov/ticks/images/gallery/Ixodesscapularis_hires-small.jpg?_=38404?noicon",
        "refImgArray": "[{\"source\": \"https://digitalcommons.georgiasouthern.edu/usntc_key/1089/thumbnail.jpg\", \"caption\": \"Author: Say; Male Ixodes scapularis from Georgia Southern University RML Number 119928\"}, {\"source\": \"http://localhost:3003/public/siteImages/scapularis.jpg\", \"caption\": \"Provided by Jim Occi; Female Ixodes scapularis\"}, {\"source\": \"http://localhost:3003/public/siteImages/scapularis_quest.jpg\", \"caption\": \"Provided by Jim Occi; The female Blacklegged tick questing\"}]",
        "createdAt": "2022-04-20 13:17:24",
        "updatedAt": "2022-04-20 13:17:24"
      },
      {
        "id": 2,
        "scientific": "Amblyomma americanum",
        "common": "Lone Star Tick",
        "intro": "Lone star ticks are three-host ticks, where the larval, nymphal, and adult stages can feed on people, domesticated animals, ground-dwelling birds, small and large wild mammals.",
        "humanHosts": 1,
        "hosts": "Each life stage has a range of hosts. Amblyomma americanum has been known to feed on people, domestic pets, cattle, ground-dwelling birds, small mammals like squirrels and hares, and large mammals like white-tailed deer.",
        "habitat": "Arid environments, forested areas, scrubby areas, wooded areas, or ecotones.\nAn ecotone is a transition between two ecological areas, such as forest and grassland or river and its streams.",
        "njLocations": "Primarily distributed in the southern parts of New Jersey.\nThe first reports of Amblyomma americanum in New Jersey were in Burlington County.\nIt’s understood that this tick is distributed statewide.",
        "activeMonths": "",
        "featureImgUrl": "https://digitalcommons.georgiasouthern.edu/usntc_key/1003/thumbnail.jpg",
        "buttonImgUrl": "https://digitalcommons.georgiasouthern.edu/usntc_key/1003/thumbnail.jpg",
        "mapImgUrl": "https://www.cdc.gov/ticks/images/geo/lgmap-lone_star_tick.jpg",
        "refImgArray": "[{\"source\": \"https://digitalcommons.georgiasouthern.edu/usntc_key/1003/thumbnail.jpg\", \"caption\": \"Author: Linneaus Female Amblyomma americanum from Georgia Southern University RML Number 120495\"}, {\"source\": \"https://digitalcommons.georgiasouthern.edu/usntc_key/1005/thumbnail.jpg\", \"caption\": \"Author: Linneaus Male Amblyomma americanum from Georgia Southern University RML Number 120495\"}, {\"source\": \"http://localhost:3003/public/siteImages/americanum.jpg\", \"caption\": \"Provided by Jim Occi; Lone Star ticks on finger\"}, {\"source\": \"http://localhost:3003/public/siteImages/americanum_1.jpg\", \"caption\": \"Provided by Jim Occi; Many life stages presented in this photo, and whether the Lone Star tick has fed or not. The bottom three ticks are of engorged ticks.\"}]",
        "createdAt": "2022-04-20 13:17:24",
        "updatedAt": "2022-04-20 13:17:24"
      },
      {
        "id": 3,
        "scientific": "Amblyomma maculatum",
        "common": "Gulf Coast Tick",
        "intro": "Formerly distributed in Southeastern U.S. but new populations are being reported in Delaware and Maryland.  The closest distribution was in Delaware's Bombay Hook National Wildlife Refuge which is less than 13 miles from the Delware Bay in New Jersey.  Salem, Cumberland, and Cape May Counties border the Delaware Bay.",
        
        "humanHosts": 0,
        "buttonImgUrl": "",
        "hosts": null,
        "habitat": "open grassy areas and pastures",
        "njLocations": null,
        
        "featureImgUrl": "https://digitalcommons.georgiasouthern.edu/usntc_key/1011/thumbnail.jpg",
        "mapImgUrl": null,
        "refImgArray": null,
        "createdAt": "2022-04-20 13:17:24",
        "updatedAt": "2022-04-20 13:17:24"
      },
      {
        "id": 4,
        "scientific": "Carios kelleyi",
        "common": "Bat tick",
        "intro": "The Bat tick, better known as Carios kelleyi, is the newest edition to the New Jersey tick list! This tick primarily feeds on bats and dwells where bats are, making them a nuisance and potential threat to people and pets residing in older houses and buildings. Bat ticks usually won’t be present where bats are not. Eliminating bats from any structure is the precise control and prevention method to avoid lingering ticks.",
        
        "humanHosts": 0,
        "buttonImgUrl": "",
        "hosts": null,
        "habitat": "Where bats roost, which may be places like older homes, barns or cabins.  Other environments include grasslands or vegetation along forest edges.",
        "njLocations": null,
        
        "featureImgUrl": "https://web.uri.edu/tickencounter/files/Screen-Shot-2021-02-09-at-11.06.23-PM.jpg",
        "mapImgUrl": null,
        "refImgArray": null,
        "createdAt": "2022-04-20 13:17:24",
        "updatedAt": "2022-04-20 13:17:24"
      },
      {
        "id": 5,
        "scientific": "Dermacentor albipictus",
        "common": "Moose Tick",
        "intro": "This tick is a one-host tick, meaning they will try to spend their whole life cycle on the first host they latch onto. Their primary hosts are moose, distributed in the U.S. between Maine, Washington, and Alaska. New Jersey’s relationship with Dermacentor albipictus is with the host white-tailed deer. White-tailed deer are more common than moose in New Jersey.",
        
        "humanHosts": 0,
        "buttonImgUrl": "",
        "hosts": null,
        "habitat": "forested areas",
        "njLocations": null,
        
        "featureImgUrl": "https://digitalcommons.georgiasouthern.edu/usntc_key/1023/preview.jpg",
        "mapImgUrl": null,
        "refImgArray": null,
        "createdAt": "2022-04-20 13:17:24",
        "updatedAt": "2022-04-20 13:17:24"
      },
      {
        "id": 6,
        "scientific": "Dermacentor variabilis",
        "common": "American Dog Tick, Wood Tick",
        "intro": "The American Dog Tick, also known as the Wood Tick is commonly found in overgrown fields rather than in wooded, forestry areas. Pasteurizing cattle and horses are found to host these ticks, along with other types of mammals that roam fields including white-footed mice, meadow voles, and rats.",
        
        "humanHosts": 0,
        "buttonImgUrl": "",
        "hosts": null,
        "habitat": "Tree-line edges with barely any tree coverage, grassy fields, or where vegetation is not maintained",
        "njLocations": "Rural and suburban areas, and was known to be found in vacant lots and rights-of-ways",
        
        "featureImgUrl": "https://digitalcommons.georgiasouthern.edu/usntc_key/1031/thumbnail.jpg",
        "mapImgUrl": null,
        "refImgArray": null,
        "createdAt": "2022-04-20 13:17:24",
        "updatedAt": "2022-04-20 13:17:24"
      },
      {
        "id": 7,
        "scientific": "Haemaphysalis leporispalustris",
        "common": "Rabbit Tick",
        "intro": null,
        
        "humanHosts": 0,
        "buttonImgUrl": "",
        "hosts": null,
        "habitat": "forests with pines, shrubs, or mixed vegetation",
        "njLocations": "Understood to be widely distributed across the eastern United States",
        
        "featureImgUrl": "https://digitalcommons.georgiasouthern.edu/usntc_key/1041/preview.jpg",
        "mapImgUrl": null,
        "refImgArray": null,
        "createdAt": "2022-04-20 13:17:24",
        "updatedAt": "2022-04-20 13:17:24"
      },
      {
        "id": 8,
        "scientific": "Haemaphysalis longicornis",
        "common": "Asian Longhorned Tick, Bush Tick",
        "intro": "The Asian longhorned tick parasitizes and spreads quickly, commonly found among cattle and other farm animals in large numbers, but can feed on birds, pets, and humans. In 2017, the Longhorned Tick was first reported in the U.S. in New Jersey.",
        
        "humanHosts": 0,
        "buttonImgUrl": "",
        "hosts": null,
        "habitat": "Tall grasses, meadows, and pastures. Commonly found on farms.",
        "njLocations": "Hunterdon, Union, Middlesex, Mercer, Bergen, Somerset, Passaic, Camden, and Monmouth",
        
        "featureImgUrl": "https://media.npr.org/assets/img/2018/02/23/longhorned-ticks_wide-cb558bd04f51bf253cf572ad76b5f330b3a903b9-s800-c85.webp",
        "mapImgUrl": null,
        "refImgArray": null,
        "createdAt": "2022-04-20 13:17:24",
        "updatedAt": "2022-04-20 13:17:24"
      },
      {
        "id": 9,
        "scientific": "Ixodes brunneus",
        "common": "Bird tick",
        "intro": null,
        
        "humanHosts": 0,
        "buttonImgUrl": "",
        "hosts": null,
        "habitat": "grasslands, woodlands, scrubs. Due to the migratory patterns of passerines, can be found in diverse environments",
        "njLocations": null,
        
        "featureImgUrl": "https://digitalcommons.georgiasouthern.edu/usntc_key/1061/preview.jpg",
        "mapImgUrl": null,
        "refImgArray": null,
        "createdAt": "2022-04-20 13:17:24",
        "updatedAt": "2022-04-20 13:17:24"
      },
      {
        "id": 10,
        "scientific": "Ixodes cookei",
        "common": "Groundhog Tick, Woodchuck Tick",
        "intro": null,
        
        "humanHosts": 0,
        "buttonImgUrl": "",
        "hosts": null,
        "habitat": "fields, forests, hedgerows, and pastures",
        "njLocations": null,
        
        "featureImgUrl": "https://digitalcommons.georgiasouthern.edu/usntc_key/1063/preview.jpg",
        "mapImgUrl": null,
        "refImgArray": null,
        "createdAt": "2022-04-20 13:17:24",
        "updatedAt": "2022-04-20 13:17:24"
      },
      {
        "id": 11,
        "scientific": "Ixodes dentatus",
        "common": "Rabbit tick",
        "intro": "In later years, was identified in Bergen and Union counties.  This tick is usually distributed along the Atlantic Coast",
        
        "humanHosts": 0,
        "buttonImgUrl": "",
        "hosts": null,
        "habitat": "grasslands, bushy woodlands, and croplands",
        "njLocations": null,
        
        "featureImgUrl": "https://digitalcommons.georgiasouthern.edu/usntc_key/1069/preview.jpg",
        "mapImgUrl": null,
        "refImgArray": null,
        "createdAt": "2022-04-20 13:17:24",
        "updatedAt": "2022-04-20 13:17:24"
      },
      {
        "id": 12,
        "scientific": "Ixodes texanus",
        "common": "Raccoon Tick",
        "intro": null,
        
        "humanHosts": 0,
        "buttonImgUrl": "",
        "hosts": null,
        "habitat": "moist woodland areas, farmlands, suburban, and urban areas",
        "njLocations": null,
        
        "featureImgUrl": "https://digitalcommons.georgiasouthern.edu/usntc_key/1097/preview.jpg",
        "mapImgUrl": null,
        "refImgArray": null,
        "createdAt": "2022-04-20 13:17:24",
        "updatedAt": "2022-04-20 13:17:24"
      },
      {
        "id": 13,
        "scientific": "Rhipicephalus sanguineus",
        "common": "Brown Dog Tick",
        "intro": null,
        
        "humanHosts": 0,
        "buttonImgUrl": "",
        "hosts": null,
        "habitat": "Outdoor environments near walls or gardens, adapted to homes in rural and urban areas",
        "njLocations": null,
        
        "featureImgUrl": "https://bugguide.net/images/cache/YHP/HHR/YHPHHR2HCHXLEZRLEZRL9ZML9Z7LYHXLRR8LRRPHVH0L8Z7H8Z8HOHIHAH2HAZ4LAZ0LVHPHWZUH9ZMLBZNH9ZML1Z4L.jpg",
        "mapImgUrl": null,
        "refImgArray": null,
        "createdAt": "2022-04-20 13:17:24",
        "updatedAt": "2022-04-20 13:17:24"
      },
      {
        "id": 14,
        "scientific": "Ixodes marxi",
        "common": "Squirrel Tick",
        "intro": null,
        
        "humanHosts": 0,
        "buttonImgUrl": "",
        "hosts": null,
        "habitat": null,
        "njLocations": null,
        
        "featureImgUrl": "https://digitalcommons.georgiasouthern.edu/usntc_key/1075/preview.jpg",
        "mapImgUrl": null,
        "refImgArray": null,
        "createdAt": "2022-04-28 18:54:20",
        "updatedAt": "2022-04-28 18:54:20"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ticks', null, {});
  }
};
