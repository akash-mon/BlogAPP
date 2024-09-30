const express = require("express");


const app = express();
var PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const blogModel=require('../CodingChallenge_Blog/model');
require('./connection');

// const router=express.Router();
// app.use('/blog',router);


//Write missing code here and all the CRUD operations on the database




app.get('/',async (req,res)=>{
        try {
          const data=await blogModel.find();
          res.status(200).send(data);
        } catch (error) {
          res.status(404).send('data no found');
        }
});

app.post('/add',async (req,res)=>{
      try {
        var item=req.body;
        const data=new blogModel(item);
        const saveddata=await data.save();
        res.status(200).send('Post sccessful');
      } catch (error) {
        res.status(404).send('Post unsccessful');
      }
});


// PUT to update a blog post by ID
app.put('/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await blogModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!data) {
      res.status(404).send('Update unsuccessful, blog not found');
    } else {
      res.status(200).send('Update successful');
    }
  } catch (error) {
    res.status(404).send('Update unsuccessful');
  }
});

// DELETE a blog post by ID
app.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await blogModel.findByIdAndDelete(id);
    if (!data) {
      res.status(404).send('Delete unsuccessful, blog not found');
    } else {
      res.status(200).send('Delete successful');
    }
  } catch (error) {
    res.status(404).send('Delete unsuccessful');
  }
});





app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
