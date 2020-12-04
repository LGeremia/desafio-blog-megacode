import express from 'express';
import postModel from '../models/post.js'
import moment from 'moment-timezone';

const app = express();

app.get('/posts', async (req, res) => {
  const posts = await postModel.find({});

  try {
    res.send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/post/:id',async(req,res)=>{
  try {
    const post = await postModel.findById({id: req.params.id});
    res.send(post);
  } catch (err) {
    res.status(500).send(err)
  }
});

app.post('/post', async(req, res) => {
    const dateBrazil = moment.tz(Date.now(), 'America/Sao_Paulo');
    const data = {
      title: req.body.title,
      contend: req.body.contend,
      created_date: dateBrazil
    };
    const post = new postModel(data);
    try {
      await post.save();
      res.send(post);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.delete('/post/:id', async(req,res)=>{
  try {
    const post = await postModel.findByIdAndDelete(req.params.id);
    console.log(req);
    if(!post) res.status(404).send("Nenhum post encontrado!");
    res.status(200).send({
      "message": "Post excluido com sucesso!",
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch('/post/:id', async(req,res)=>{
  try {
    await postModel.findByIdAndUpdate(req.params.id, req.body);
    await postModel.save();
    res.status(200).send({
      "message": "Post atualizado com sucesso!"
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

export default app;