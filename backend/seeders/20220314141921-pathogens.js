'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('pathogens', [
      {
        "id": 1,
        "pathogen": "Bburg",
      },
    {'id':2,
      'pathogen':"Bmiya"},
    {'id':3,
      'pathogen':"Aphag"},
    {'id':4,
      'pathogen':"Bmicr"},
    {'id':5,
      'pathogen':"Echaff"},
    {'id':6,
      'pathogen':"Eewing"},
    {'id':7,
      'pathogen':"Rambly"},
    {'id':8,
      'pathogen':"Rrick"},
    {'id':9,
      'pathogen':"Rpark"},
    {'id':10,
      'pathogen':"Rfelis"},
    {'id':11,
      'pathogen':"POWV"},
    {'id':12,
      'pathogen':"DTV"},
    {'id':13,
      'pathogen':"HRTV"},
    {'id':14,
      'pathogen':"BRBV"},
    {'id':15,
      'pathogen':"Cfelis"},
    {'id':16,
      'pathogen':"Hamer"},
    {'id':17,
      'pathogen':"Torien"},
    {'id':18,
      'pathogen':"Ecanis"},
    {'id':19,
      'pathogen':"TBD1"},
    {'id':20,
      'pathogen':"TBD2"},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pathogens', null, {});
  }
};
