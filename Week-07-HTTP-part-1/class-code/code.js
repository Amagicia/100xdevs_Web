const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
const path = require("path");

const secretOrPrivateKey = "secretOrPrivateKeysecretOrPrivateKey";
function auth(req, res, next) {
    const token = req.headers.token;
    console.log("token = > ", token);

    if (!token) {
        return res.redirect("/");
    }
    try {
        const decode = jwt.verify(token, secretOrPrivateKey);
        console.log(decode, "decode auth");

        req.user = decode;
        next();
    } catch (err) {
        return res.status(403).send("Invalid token");
    }
}

let todos = [];
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/dash", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "dash.html"));
});
app.post("/signup", (req, res) => {
    console.log("BODY:", req.body);
    const { username, password } = req.body;
    console.log(username, password, "Signup Api");

    // validate
    if (!username || !password) {
        return res.status(400).send("Missing fields");
    }

    let exist = false;
    for (let index = 0; index < todos.length; index++) {
        let element = todos[index];
        if (element.username === username) {
            exist = true;
        }
    }
    if (exist) {
        return res.status(400).send("User already exist!!");
    }
    let data = {
        username: username,
        password: password,
        todo: [],
    };
    console.log(data, "saved signup data");

    todos.push(data);

    return res.status(200).send({
        data,
        message: "user created",
    });
});
app.get("/signin", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "signin.html"));
});
app.post("/signin", (req, res) => {
    console.log("Signin Api");
    console.log("BODY:", req.body);
    const { username, password } = req.body;
    console.log(username, password, "Signup Api");

    // validate
    if (!username || !password) {
        return res.status(400).send("Missing fields");
    }

    let exist = false;
    for (let index = 0; index < todos.length; index++) {
        let element = todos[index];
        if (element.username === username && element.password === password) {
            exist = true;
        }
    }
    if (!exist) {
        return res.status(400).send("User already exist!!");
    }
    const token = jwt.sign({ username }, secretOrPrivateKey);

    return res.status(200).send({
        token,
        message: "user logined",
    });
});
app.post("/data", auth, (req, res) => {
    const data = req.body.todo;
    let username = req.user.username;
    for (let index = 0; index < todos.length; index++) {
        let element = todos[index];
        if (element.username === username) {
            todos[index].todo.push(data);
        }
    }
    res.status(200).send({ message: "Done Data Saved ", todo: data });
});

app.get("/data", auth, (req, res) => {
    let username = req.user.username;

    for (let index = 0; index < todos.length; index++) {
        let element = todos[index];
        if (element.username === username) {
            res.status(200).send({
                message: "Done send  ",
                todo: todos[index].todo,
            });
        }
    }
    res.status(200).send({ message: "  ", todo: [] });
});
app.get("/todos", (req, res) => {
    res.status(200).send(todos);
});

app.listen(3000, () => {
    console.log("Hey");
});
