const mongoose =require('mongoose')
const app=require('./app.js')



const url='mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.ezlc5is.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseUser='amitvisean23';
const databasePassword='Amit1234';
const databaseName='Image-generator';

let dbLink=url.replace("$_USERNAME_$",databaseUser);
dbLink=dbLink.replace("$_PASSWORD_$",databasePassword);
dbLink=dbLink.replace("$_DB_NAME_$",databaseName);

mongoose.connect(dbLink)
.then(() => console.log('Database Connected!'));

app.listen(8000,()=> {
    console.log('----------- App Started -----------')
});