import express from 'express';
import axios from 'axios';

let test = express();
const port = 8084;

test.get('/ip', async (req, res) => {
    try {
      const Response = await axios.get('https://httpbin.org/ip');
      const Address = Response.data.origin || 'Ip not avalible';
      res.send({ "ip": Address });
    } catch (error) {
      console.error(error);
      res.status(500).send('An error ' ); 
    }
  });

  test.listen(port, function() {
    console.log("server is running  port " + port);
  });