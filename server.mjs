import express from 'express';
import router from './routes/router.mjs';


const app = express();
const PORT = process.env.PORT ||  3000;


// Routes
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});