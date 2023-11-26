const Sequelize = require('sequelize');
const sequelize = new Sequelize('registration-details','root','Dob@1380',{
    dialect:'mysql',
    host:'localhost',
    logging:false // it wont show unnecessary data in terminal
});
module.exports = sequelize;