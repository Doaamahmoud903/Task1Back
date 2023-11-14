
const fs = require("fs");

// loadData read file and convert it from buffer to JSON then convert it to OBJ.
const loadData =()=>{
    try{
        dataJson = fs.readFileSync("dataUsed.json").toString();
        return JSON.parse(dataJson);
    }
    catch{
        return [];
    }  
}

// To save data first convert it to JSON
const saveAllData = (allData) => {
    const dataToJson = JSON.stringify(allData);
    fs.writeFileSync("dataUsed.json" , dataToJson);

}
/////////////////////////////////////////////////////////////////////////
// check unigue id then Add User.


const addUser = (id,fname, lname, age, city) => {
    const allData = loadData();
    const dataUnique = allData.filter((user) => {
        return user.id == id;
    })
    
if (dataUnique.length == 0){
    allData.push({
        id,
        fname,
        lname,
        age,
        city
    })
    saveAllData(allData)

}else{
    console.log("Error Duplicated User ID")
}}

////////////////////////////////////
//Read User Data
const readUser =(id) => {
    const allData = loadData();
    const userNeeded = allData.find((user) => {
        return id == user.id;

    })

   if (userNeeded){
    console.log("User Found" , userNeeded.id ,userNeeded.fname)
   }else{
    console.log("User not Found")
   }}
   // List all User Data

const listUser = () =>{
    const allData = loadData() 
    allData.forEach(element => {
        console.log(element.fname , element.lname , element.city);
        
    })
}
/////////////////////////////
// Delete Users
const delUser = (id) => {
const allData = loadData();
const dataToKeep = allData.filter((user) =>{
    return user.id !== id;
}
)
saveAllData(dataToKeep)
}


module.exports={
    addUser,
    delUser,
    readUser,
    listUser
}