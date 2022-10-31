const config = require('../config')

const validateAdminUser = async (username, password) => {
    if(username !== config.APP_USERNAME){
        throw new Error('User does not exist')
    }
    
    if(! password === config.APP_PASSWORD){
        throw new Error('Password is incorrect')
    }
    return true
}

module.exports = {
    validateAdminUser
}