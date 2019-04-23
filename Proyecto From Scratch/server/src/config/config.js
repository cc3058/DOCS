module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'iger',
    user: process.env.DB_USER || 'iger',
    password: process.env.DB_PASS || 'iger',
    dialect: process.env.DIALECT || 'sqlite',
    options: {
      dialect: 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './iger.sqlite'
    }
  }
}
