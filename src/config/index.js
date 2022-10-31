require('dotenv').config()

const config = {
    HOST: process.env.PM2_APP_HOST || '127.0.0.1',
    PORT: process.env.PM2_APP_PORT || 4343,
    APP_DIR: process.cwd(),
    APP_SESSION_SECRET: process.env.PM2_APP_SESSION_SECRET || null,
    APP_USERNAME: process.env.PM2_APP_USERNAME || null,
    APP_PASSWORD: process.env.PM2_APP_PASSWORD || null,
    SHOW_GIT_INFO: process.env.SHOW_GIT_INFO || false,
    SHOW_ENV_FILE: process.env.SHOW_ENV_FILE || false,
    DEFAULTS: {
        LINES_PER_REQUEST: 50,
        BCRYPT_HASH_ROUNDS: 10,
    }
}

module.exports = config;