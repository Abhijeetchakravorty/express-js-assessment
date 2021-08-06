var config = {}
config.bodyParserLimit = 10000
config.STUDENT_DB_HOST = process.env.STUDENT_DB_HOST
config.STUDENT_DB_SCHEMA = process.env.STUDENT_DB_SCHEMA
config.STUDENT_DB_USERNAME = process.env.STUDENT_DB_USERNAME
config.STUDENT_DB_PASSWORD = process.env.STUDENT_DB_PASSWORD
config.BCRYPT_SALT_ROUNDS = 10
config.JWT_SIGNING_KEY = process.env.JWT_SIGNING_KEY
config.SERVER_HOST = process.env.SERVER_HOST
config.SERVER_PROTOCOL = process.env.SERVER_PROTOCOL
config.SERVER_PORT = process.env.SERVER_PORT
config.CLIENT_PORT = process.env.CLIENT_PORT
config.STUDENT_CLIENT_HOST = process.env.STUDENT_CLIENT_HOST
config.NODE_ENV = process.env.NODE_ENV
config.STUDENT_ADMIN_HOST = process.env.STUDENT_ADMIN_HOST

var missingKeys = []
Object.keys(config).forEach((key) => {
  if (!config[key]) {
    missingKeys.push(key)
  }
})

if (missingKeys.length > 0) {
  console.log('***** IMPORTANT - The following environment variables must be set before running the server: ')
  console.log(missingKeys)
  console.log('      Exiting process')
  process.exit(1)
}

module.exports = config
