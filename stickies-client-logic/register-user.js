const call = require ('./call.js')

module.exports = function registerUser(name, surname, email, password) {

 //TODO validations

 return call('POST', 'http://localhost:8080/graphql', `mutation{registerUser(name: ${name}, surname: ${surname}, email: ${email}, password: ${password})}` )
    .then()
    .catch((error)=> {
        throw new Error(error)
    })
 
}