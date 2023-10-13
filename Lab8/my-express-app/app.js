import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 8086;


// Endpoint to fetch and display IP address
app.get('/ip', async (req, res) => {
    try {
        const response = await axios.get('https://httpbin.org/ip');
        const address = response.data.origin || 'IP not available';
        res.send({ "ip": address });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching the IP');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
