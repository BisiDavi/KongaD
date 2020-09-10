/* @make connection to the database */

const mongoose = require('mongoose')
const dbURI =
  "mongodb+srv://olubisi:OLUBISI5256@gad.nfeb6.mongodb.net/kongaDemo?retryWrites=true&w=majority";

  getConnection = async () => {
      try{
          await  mongoose.connect(dbURI, {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useFindAndModify:false,
                    useUnifiedTopology:true
                })
      console.log('Connection to DB successful!')

      } catch(err){
          console.log(err)
      }
}

getConnection();

module.exports = mongoose.connection