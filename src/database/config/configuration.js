require("dotenv/config")

module.exports = {
  port: process.env.PORT,
  host: "localhost",
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  dialect: "postgres",
  database: "ProvaDesafio",
  define: {
    timestamps: true,
    underscored: true,
  }
}