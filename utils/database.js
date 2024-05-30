const Sequalize=require("sequelize");

const sequelize=new Sequalize("booking","root","Prateek@my2000", {
    dialect: 'mysql',
    host:'localhost'
  });
  
  module.exports = sequelize;