// const mysql=require('mysql2');
exports.handler = async (event) => {

const message = 'Hello from Lambda!';
console.log(event.table)

console.info(`${message}`);
    let v=`CREATE TABLE salarytb (
    sid int NOT NULL PRIMARY KEY,
    name text NOT NULL,
    salary int NOT NULL,
    empid int NOT NULL,
    CONSTRAINT empid FOREIGN KEY (empid)
    REFERENCES employee(empid)
); `
    
    let sql; //= `insert into employee values(${event.empid},'${event.empname}','${event.empdes}')`;
    var values = [1];
    let fun=require('./index.js');
    let res ;//=fun.rdsfun(sql);
    
    switch(event.operation){
        case 'insert': if(event.table=='employee')
                        {
                        sql=`insert into employee values(${event.empid},'${event.empname}','${event.empdes}')`;
                        res=fun.rdsfun(sql);
                        return res;
                        }
                        else{
                            sql=`insert into salarytb values(${event.sid},'${event.name}',${event.salary},${event.empid})`;
                            res=fun.rdsfun(sql);
                            return res;
                        }
        case 'delete': if(event.table=='employee')
                        {
                            sql=`delete from employee where empid=${event.empid};`;
                            res=fun.rdsfun(sql);
                            return res;
                        }
                        else{
                            sql=`delete from salarytb where sid=${event.sid}`;
                            res=fun.rdsfun(sql);
                            return res;
                        }
        case 'get':if(event.table=='employee'){
                        sql='select * from employee';
                        res=fun.rdsfun(sql);
                        return res;   
                    }
                    else
                    {
                        sql='select * from salarytb';
                        res=fun.rdsfun(sql);
                        return res;
                    }
        case 'getbyid':if(event.table=='employee'){
                        sql=`select empname,empdes from employee where empid=${event.empid}`;
                        res=fun.rdsfun(sql);
                        return res;
                        }
                        else{
                        sql=`select empid,name,salary from salarytb where sid=${event.sid}`;
                        res=fun.rdsfun(sql);
                        return res;
                        }
        case 'update':if(event.table=='employee'){
                        sql=`update employee set empdes='${event.empdes}' where empid=${event.empid}`;
                        res=fun.rdsfun(sql);
                        return res;
                        }
                        else
                        {
                            sql=`update salarytb set salary=${event.salary} where empid=${event.empid}`;
                            res=fun.rdsfun(sql);
                            return res;
                            
                        }
        default: res="Invalid Operation choice!"
                return res;
                        
                        
    }
    
    


}