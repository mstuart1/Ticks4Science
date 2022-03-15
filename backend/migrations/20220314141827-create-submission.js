'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('submission', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tick_id: { type: Sequelize.INTEGER },
      submission_date: { type: Sequelize.DATE },
      municipality_of_nj_resident: { type: Sequelize.STRING },
      zipcode_: { type: Sequelize.DOUBLE },
      date_tick_was_found: { type: Sequelize.DATE },
      indicate_whowhat_the_tick_was_f: { type: Sequelize.STRING },
      indicate_whowhat_the_tick_was_f_other: { type: Sequelize.STRING },
      was_the_tick_attached: { type: Sequelize.STRING },
      specify_animal: { type: Sequelize.STRING },
      date_removed: { type: Sequelize.DATE },
      tickLocation: { type: Sequelize.GEOMETRY },
      select_a_descriptor_for_the_loc: { type: Sequelize.STRING },
      select_a_descriptor_for_the_loc_other: { type: Sequelize.STRING },
      city_where_tick_found: { type: Sequelize.STRING },
      county_where_tick_found: { type: Sequelize.STRING },
      zipcode_where_tick_found: { type: Sequelize.STRING },
      describe_activityactivities_whe: { type: Sequelize.STRING(1000) },
      was_someone_bitten_by_the_tick: { type: Sequelize.STRING },
      was_the_submitter_the_person_bi: { type: Sequelize.STRING },
      municipality_of_nj_resident_bit: { type: Sequelize.STRING },
      zipcode: { type: Sequelize.DOUBLE },
      has_the_bitten_person_traveled_: { type: Sequelize.STRING },
      field_28: { type: Sequelize.STRING },
      provide_relevant_zipcodes_or_co: { type: Sequelize.STRING(1000) },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('submission');
  }
};