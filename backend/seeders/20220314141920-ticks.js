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
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ticks', null, {});
  }
};
