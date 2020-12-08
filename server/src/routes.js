import express from 'express';
import postRoutes from './routes/postRoutes.js';

const routes = express.Router();

routes.get('/', (req, res)=>{
    res.json({
        message: "hello world",
    })
})

routes.use(postRoutes);

export default routes