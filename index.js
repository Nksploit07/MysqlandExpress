exports.rdsfun=(q)=>{
    const mysql=require('mysql2');
     var values = [1]; 
    let sql=q;
    console.log("Doing createConnection");
    const connection = mysql.createConnection({
        /* my connection data */
        host: "containers-us-west-33.railway.app",
    user: "root",
    password:"9LsOx7FzR4yh1LXPboHN",
    port:'6248', 
    insecureAuth : false,
    database:"railway"
      });
    
    console.log("Doing query");

    const promise = new Promise( (resolve, reject) => {
        connection.query(sql, values, (err, result, values) => {
        console.log("Inside query callback");
        if(!err) {
            console.log("Query ok!");
            resolve(result);
            connection.end()
        } else {
            console.log("Error executing query: " + err.message);
            reject(err);
        }       
        });
    });

    console.log ("Returning...");
    return promise
}