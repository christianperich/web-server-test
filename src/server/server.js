import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const startServer = (options) => {
  const { port, public_path = 'public'} = options
  
  const app = express();

  app.use(express.static(public_path))

  app.get('*', (req, res) => {
    const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
    res.sendFile(indexPath)
  })

  app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
  })

}