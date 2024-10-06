
const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient();

const connectToMongo = async () => {
  try{
    await prisma.$connect();
    console.log("Connected To Mongo Successfully");
  }
  catch(err){
    console.log('Failed Connecting To Mongo !', err);
    
  }
}

module.exports = connectToMongo;