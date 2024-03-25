const { Pool } = require("pg");

const DBConfig = {
  connectionString:"postgres://rymsn:ItonN1z4yDKKyU8FRPscfsgh7TM0DLPJ@dpg-co018bq1hbls73bqe15g-a.oregon-postgres.render.com/dbhireme",
  ssl:{
    rejectUnauthorized: false, 
  },
}; 

const pool = new Pool(DBConfig);

module.exports = pool;