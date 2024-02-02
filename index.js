import express from "express";
import cors from 'cors';
import path from 'path';
import url from 'url';

const expressApp = express();
expressApp.use(cors());
const port = 7000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

expressApp.use('/assets', express.static(path.resolve(__dirname, 'views', 'assets')));

expressApp.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

expressApp.get('/manga', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'manga.html'));
});

expressApp.listen(port, () => console.log(`http://localhost:${port}`));