import { sqlConfig } from "../configuration/sqlconfig";
import sql from 'mssql';


export async function dbService(){
            try {
                 let pool = await new sql.ConnectionPool(sqlConfig);
                  return pool; 
            } catch (error) {
                  console.log(error)
            }

}