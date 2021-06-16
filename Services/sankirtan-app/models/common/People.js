const Sq = require("sequelize");
const sequelize = require("../../dbconfig");
const People = sequelize.define(
  "people",
  {
    id: { type: Sq.INTEGER, autoIncrement: true, primaryKey: true },
    external_id: Sq.STRING,
    category_id: Sq.STRING,
    firstname: Sq.STRING,
    preferred_name: Sq.STRING,
    middle_name: Sq.STRING,
    lastname: Sq.STRING,
    email: Sq.STRING,
    phone: Sq.STRING,
    mobile: Sq.STRING,
    admin: Sq.INTEGER,
    archived: Sq.INTEGER,
    contact: Sq.INTEGER,
    volunteer: Sq.INTEGER,
    status: Sq.STRING,
    country: Sq.STRING,
    timezone: Sq.STRING,
    picture_url: Sq.STRING,
    picture: Sq.BLOB,
    family_id: Sq.INTEGER,
    family_relationship: Sq.STRING,
    gender: Sq.STRING,
    mailing_address: Sq.STRING,
    mailing_address2: Sq.STRING,
    mailing_city: Sq.STRING,
    mailing_state: Sq.STRING,
    mailing_postcode: Sq.STRING,
    mailing_country: Sq.STRING,
    home_address: Sq.STRING,
    home_address2: Sq.STRING,
    home_city: Sq.STRING,
    home_state: Sq.STRING,
    home_postcode: Sq.STRING,
    home_country: Sq.STRING,
    access_permissions: Sq.STRING,
    departments: Sq.STRING,
    service_types: Sq.STRING,
    demographics: Sq.STRING,
    locations: Sq.STRING,
    family: Sq.STRING,
    reports_to: Sq.STRING,
    custom_id: Sq.STRING,
    initiated_name_full: Sq.STRING,
    initiation_level: Sq.STRING,
    organization_id: Sq.INTEGER,
    marital_status: Sq.STRING,
    sankirtan_group: Sq.INTEGER,
    created_by_id: Sq.INTEGER,
    last_modified_by_id: Sq.INTEGER,
    default_group: Sq.INTEGER,
    role: Sq.STRING,
    notes: Sq.STRING,
    harinama_initiation_spiritual_master_name : Sq.STRING
  },
  {
    freezeTableName: true,
    schema: "common",
    createdAt: "created_date",
    updatedAt: "last_modified_date",
  }
);
module.exports = People;
