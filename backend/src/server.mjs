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

class DigitalScreen {
    constructor(id, name, content) {
        this.id = id;
        this.name = name;
        this.content = content;
    }
}

class StaticScreen {
    constructor(id, name, content) {
        this.id = id;
        this.name = name;
        this.content = content;
    }
}

class ScreenGroup {
    constructor(id, name,screens) {
        this.id = id;
        this.name = name;
        this.screenIds = screens
    }
}

app.get('/screens', (req, res) => {
    const digitalScreens = [
        new DigitalScreen(1234, 'Big player', 'https://www.youtube.com/embed/dQw4w9WgXcQ'),
        new DigitalScreen(2231, 'Buss stop #2131', 'https://www.youtube.com/embed/dQw4w9WgXcQ'),
    ]
    const staticScreens = [
        new StaticScreen(2739, 'Big BillBoard', 'https://picsum.photos/id/1003/300/300'),
        new StaticScreen(1510, 'Highway Billboard #9001', 'https://picsum.photos/id/1025/300/300')
    ]
    const groups = [
        new ScreenGroup(9213, "Rue Digital screens",[digitalScreens[0].id, digitalScreens[1].id]),
        new ScreenGroup(6753, "20 Highway",[staticScreens[0].id, staticScreens[1].id])
    ]
    res.send({
        digitalScreens,
        staticScreens,
        groups

    })
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
