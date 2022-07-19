require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    // dialectOptions: {
    //   charset: "utf8mb4",
    // },
    // this is ignored by sequelize - use this in the migration instead:
    // {
      // charset: "utf8mb4",
      // collate: "utf8mb4_general_ci",
    // }
    define: {
      freezeTableName: true,
      paranoid: true,
    },
  },
  test: {
    dialect: "sqlite",
    storage: ":memory",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
     // dialectOptions: {
    //   charset: "utf8mb4",
    // },
    // this is ignored by sequelize - use this in the migration instead:
    // {
      // charset: "utf8mb4",
      // collate: "utf8mb4_general_ci",
    // }
    define: {
      freezeTableName: true,
      paranoid: true,
    },
  },
};
