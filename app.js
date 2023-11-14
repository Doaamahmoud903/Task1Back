const fs = require ("fs");
const yargs = require ("yargs");
const dataUsed = require ("./dataUsed");
const { type } = require("os");
////add Command
yargs.command({
    command : "add",
    describe : "adding User Data",
    builder: {
       fname : {
          describe: "this is the first name",
          demandOption: true,
          type: "string",
       },
       lname : {
        describe: "this is the last name",
        demandOption: true,
        type: "string",
     }
    },
    handler :(x)=> {
       dataUsed.addUser(x.id,x.fname , x.lname , x.age , x.city )
    }
  })

////Read Command
yargs.command({
   command :"read",
   describe :"Read User Data",
   builder : {
      id:{
         describe :"User ID",
         demandOption: true,
           type: "string",
      },
   },
   handler: () =>{
      dataUsed.readUser()
   }
})
 
/// List all Users
yargs.command({
   command :"List",
   describe :"list all Users",
   handler: (x) =>{
      dataUsed.listUser()
   }
})


 ////Delete User
 yargs.command({
   command :"Delete",
   describe :"Delete User Data",
   handler: () =>{
      dataUsed.delUser()
   }
})

yargs.parse();
