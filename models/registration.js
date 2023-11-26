const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Registration = sequelize.define('Registration',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey : true,
        allowNull:false
    },
    Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    emailId:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phoneNumber:{
        type:Sequelize.BIGINT,
        allowNull: false
    },
    session:{
        type:Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Registration;