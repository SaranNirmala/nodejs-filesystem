import express from 'express';
import fs from 'fs';

const app = express();

// Port
const port =6003;

app.get('/', (req, res) => {
    const date= new Date();
    const year= date.getFullYear();
    const month= date.getMonth()+1;
    const day= date.getDate();
    const hour= date.getHours();
    const minute= date.getMinutes();
    const second= date.getSeconds();
    const content=date.valueOf().toString();

const filename=`Date_${year}-${month}-${day}-Time_${hour}-${minute}-${second}.txt`;


//create a file in the directory
  fs.writeFile(`./TextFolder/${filename}`, content, (err) =>{
    if(err) throw err;
    console.log('File written successfull');
  });
  
  res.send(`file has been created successfully for ${filename}`);
});


// display all the files in the directory
app.get('/allfiles', (req, res) =>{
    fs.readdir('./TextFolder', (err,files) => {
        res.send(files);
    });
});

// Server 
app.listen(port, () => console.log('listening on port ',port));
