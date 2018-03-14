import dotenv from 'dotenv';
import express from 'express';
import greeting from './greeting';
import contactsRouter from './api/contacts';
import hackernewsRouter from './api/hackernews';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use('/api/contacts', contactsRouter);
app.use('/api/hackernews', hackernewsRouter);
app.use(express.static('public'));

// add route for /greeting
app.get('/greeting', (req, res)=>{
  let lang = req.headers['accept-language'];
  const defaultLang='en';
  if (!greeting[lang]) lang=defaultLang;
  const response={
    lang: lang,
    message: greeting[lang],
  };

  res.writeHead(200, {'Content-Type': 'text/plain',
                      'Content-Language': response.lang});
  res.end(response.message);
});


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
