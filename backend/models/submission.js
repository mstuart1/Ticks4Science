'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class submission extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    submission.init({
        tick_id: DataTypes.INTEGER,
        submission_date: DataTypes.DATE,
        municipality_of_nj_resident: DataTypes.STRING,
        zipcode_: DataTypes.DOUBLE,
        date_tick_was_found: DataTypes.DATE,
        indicate_whowhat_the_tick_was_f: DataTypes.STRING,
        indicate_whowhat_the_tick_was_f_other: DataTypes.STRING,
        was_the_tick_attached: DataTypes.STRING,
        specify_animal: DataTypes.STRING,
        date_removed: DataTypes.DATE,
        tickLocation: DataTypes.GEOMETRY,
        select_a_descriptor_for_the_loc: DataTypes.STRING,
        select_a_descriptor_for_the_loc_other: DataTypes.STRING,
        city_where_tick_found: DataTypes.STRING,
        county_where_tick_found: DataTypes.STRING,
        zipcode_where_tick_found: DataTypes.STRING,
        describe_activityactivities_whe: DataTypes.STRING(1000),
        was_someone_bitten_by_the_tick: DataTypes.STRING,
        was_the_submitter_the_person_bi: DataTypes.STRING,
        municipality_of_nj_resident_bit: DataTypes.STRING,
        zipcode: DataTypes.DOUBLE,
        has_the_bitten_person_traveled_: DataTypes.STRING,
        field_28: DataTypes.STRING,
        provide_relevant_zipcodes_or_co: DataTypes.STRING(1000),
        // TODO how to handle photos

    }, {
        sequelize,
        modelName: 'submission',
    });
    return submission;
};