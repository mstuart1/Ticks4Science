import { TickName } from "./TickPage.styled";

export const ticks = [
    // lone star tick
    {
        id: 1, title: 'Amblyomma americanum',
        path: `/ticks/1`,
        common: 'Lone Star Tick',
        first: 'Burlington County',
        comment: 'Understood to be statewide',
        loc: 'Primarily in southern parts of the state but may be expanding north',
        habitat: 'Very dry, forested areas, scrubby areas, or along the Atlantic coast',
        info: 'Lone star ticks are three-host ticks, where the larval, nymphal, and adult stages can feed on people, domesticated animals, ground-dwelling birds, small and large wild mammals.',
        larvae:
        {
            photos: [],
            active: 'Jul to Sep',
            feed: 'birds and mammals excluding small rodents, and people'
        },
        nymphs:
        {
            photos: [],
            active: 'Mar to Oct',
            feed: 'birds and mammals excluding small rodents, and people'
        },
        adults:
        {
            photos: [],
            active: 'Apr to Aug',
            feed: 'large/medium-sized mammals, but can be found on small rodents, wild turkeys, and people.'
        },
        sexPhotos: [],
        female: 'large white dot on the back',
        male: 'no white dot, but has varied white streaks on the back',
        nymph: 'light brown',
        shape: 'rounder in shape than other tick species',
        engorged: {
            photos: [],
            desc: 'Blood meals increase size drastically'
        }

    },
    { id: 2, title: 'Amblyomma maculatum', path: `/ticks/2`, 
    common: "Gulf Coast Tick",
    comment: `Formerly distributed in Southeastern U.S. but new populations are being reported in Delaware and Maryland.  The closest distribution was in Delaware's Bombay Hook National Wildlife Refuge which is less than 13 miles from the Delware Bay in New Jersey.  Salem, Cumberland, and Cape May Counties border the Delaware Bay.`,
    habitat: 'open grassy areas and pastures',
    engorged: {photos: [], desc: 'Prefers large wild and domestic mammals such as deer, cattle, and pets.  Commonly found embedded to ears.'}
},
    { id: 3, title: 'Carios kelleyi', path: `/ticks/3`, 
    common: 'Bat Tick',
    first: 'Mercer and Sussex Counties',
    habitat: 'Where bats roost, which may be places like older homes, barns or cabins.  Other environments include grasslands or vegetation along forest edges.',
    engorged: {photos: [], desc: 'Prefers bats however these ticks are opportunistic and can feed on people, pets, and other mammals if bats are not present'}
},
    { id: 4, title: 'Dermacentor albipictus', path: `/ticks/4`, 
common: 'Moose Tick',
first: 'Monmouth County',
habitat: 'forested areas',
engorged: {photos: [], desc: 'Prefers moose or other ungulates such as deer, elk, and caribou'}
},
    {
        id: 5,
        title: 'Dermacentor variabilis',
        path: `/ticks/5`,
        common: 'American Dog Tick, Wood Tick', first: 'Ocean County',
         second: 'Burlington County',
         comment: 'Understood to be statewide', loc: 'Rural and suburban areas, and was known to be found in vacant lots and rights-of-ways', 
         habitat: 'Tree-line edges with barely any tree coverage, grassy fields, or where vegetation is not maintained', 
         info: 'The American Dog Tick, also known as the Wood Tick is commonly found in overgrown fields rather than in wooded, forestry areas. Pasteurizing cattle and horses are found to host these ticks, along with other types of mammals that roam fields including white-footed mice, meadow voles, and rats.', 
         larvae:
            { photos: [], active: 'May to Sep', feed: 'small wild mammals' },
        nymphs:
            { photos: [], active: 'Apr to Jul', feed: 'small wild mammals' },
        adults:
            { photos: [], active: 'Mar to Aug', feed: 'large mammals such as wild mammals, cattle, pets, and people' },
        sexPhotos: [],
            female: 'white markings on the back',
        male: 'white markings on entire body',
        nymph: 'dark brown',
        shape: 'oblong', 
        engorged: {photos: []}
    },
    { id: 6, title: 'Haemaphysalis leporispalustris', path: `/ticks/6`,
common: 'Rabbit Tick',
first: 'Bergen County',
comment: 'Understood to be widely distributed across the eastern United States',
habitat: 'forests with pines, shrubs, or mixed vegetation',
engorged: {photos: [], desc: 'Prefers ground-dwelling birds and rabbits'}
 },
    { id: 7, 
        title: 'Haemaphysalis longicornis', 
        path: `/ticks/7`, 
    common: 'Asian Longhorned Tick, Bush Tick', 
    first: 'Hunterdon County',
         
    second: 'Bergen County, Mercer County, Middlesex County, Somerset County & Union County',
         
    comment: 'Understood to be invasive and a threat to the state', 
    loc: 'Hunterdon, Union, Middlesex, Mercer, Bergen, Somerset, Passaic, Camden, and Monmouth', 
         
    habitat: 'Tall grasses, meadows, and pastures. Commonly found on farms.', 
         
    info: 'The Asian longhorned tick parasitizes and spreads quickly, commonly found among cattle and other farm animals in large numbers, but can feed on birds, pets, and humans. In 2017, the Longhorned Tick was first reported in the U.S. in New Jersey.', 
         
    larvae:
            { photos: [],  },
        nymphs:
            { photos: [], },
        adults:
            { photos: [],  feed: 'animals dependent on temperature, humidity, and host availability' },
        sexPhotos: [],
            female: 'reddish-yellow',
        male: 'reddish-yellow',
        nymph: 'dark brown',
        shape: 'tear-drop/sesame seed-like shape', 
        engorged: {photos: [], desc: 'Blood meals increase size drastically'}
    },
    { id: 8, title: 'Ixodes brunneus', path: `/ticks/8`,
    common: 'Bird Tick',
    first: 'Cumberland County',
    comment: 'Understood to be widely distributed across the U.S.A.',
    habitat: 'grasslands, woodlands, scrubs. Due to the migratory patterns of passerines, can be found in diverse environments',
    engorged: {photos: [], desc: 'A passerine, known as perching birds, which is any bird in the order Passeriformes. Specifically, birds known as sparrows, finches, warbles, thrushes, tanagers, orioles, jays, chickadees, wrens, and more! There are roughly 5,000 unique species classified as passerines.'}
 },
    { id: 9, title: 'Ixodes cookei', path: `/ticks/9`,
    common: 'Woodchuck or Groundhog Tick',
    first: 'Bergen County',
    comment: 'In later years, was identified in Burlington County, possibly indicating a wider state scope',
    habitat: 'fields, forests, hedgerows, and pastures',
    engorged: {photos: [], desc: 'Preferred hosts are woodchucks but can be found on other small to medium sized mammals'}

 },
    { id: 10, title: 'Ixodes dentatus', path: `/ticks/10`,
    common: 'Rabbit Tick',
    first: 'Ocean County',
    comment: 'In later years, was identified in Bergen and Union counties.  This tick is usually distributed along the Atlantic Coast',
    habitat: 'grasslands, bushy woodlands, and croplands',
    engorged: {photos: [], desc: 'Prefers small animals such as eastern cottontail rabbits and birds'}
 },
 // deer tick, blacklegged tick
    { id: 11, title: 'Ixodes scapularis', path: `/ticks/11`, 
    common: 'Blacklegged Deer Tick, Deer Tick', first: 'Mercer County', comment: 'Understood to be statewide', loc: 'Rural and suburban areas.', habitat: 'Wooded, bushy areas', info: `The Blacklegged Ticks are known for potentially carrying Lyme Disease, an inflammatory disease caused by a bacterial infection from an infected tick bite. Black-legged Tick nymphs and adults can bite people, so it's important to be able to recognize if a tick is on you.`, larvae: {photos: [], active: 'Apr to Nov', feed: 'small animals such as mice and birds'}, nymphs: {photos: [], active: 'Apr to Jul, Oct, Nov', feed: 'small to large mammals including deer and people'}, adults: {photos: [], active: 'Oct to Jun', feed: 'large mammals including people'},  sexPhotos: [], female: 'orange and black', male: 'black/brown', nymph: 'black/brown', shape: 'oval or sesame seed-like', engorged: {photos: [], desc: 'Blood meals increase size drastically, however nymphs may become engorged and go unnoticed because of their size'}
},
    { id: 12, title: 'Ixodes texanus', path: `/ticks/12`, 
    common: 'Racoon Tick', first: 'Burlington County', 
    comment: 'In later years, was identified in Union County, possibly indicating a wider state scope', habitat: 'moist woodland areas, farmlands, suburban, and urban areas', engorged: {photos: [], 
        desc: 'Preferred hosts are racoons but can be found on other medium-sized mammals'} },
    { id: 13, title: 'Rhipicephalus sanguineus', path: `/ticks/13`, common: 'Brown Dog Tick', first: 'Atlantic County', comment: 'Understood to be an invasive species that affects the whole state', habitat: 'Outdoor environments near walls or gardens, adapted to homes in rural and urban areas'},
]

