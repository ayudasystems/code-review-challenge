import express from 'express';

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/screens', (req, res) => {
    const screens = [
        {
            id: 1,
            name: 'Screen 1'
        },
        {
            id: 2,
            name: 'Screen 2'
        },
        {
            id: 3,
            name: 'Screen 3'
        }
    ]
    res.send({
        screens
    })
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
