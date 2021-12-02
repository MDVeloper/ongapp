const { Router } = require('express');
const usersRoute = require('./users.js');
const articlesRoute = require('./articles.js');

const router = Router();

// Middleware para mostrar la sesión actual en cada request
router.use((req, res, next) => {
    console.log(req.session);
    //console.log(req.user);
    next();
});

// Configurar los routers
router.use("/users", usersRoute);
router.use("/articles", articlesRoute);

// Main path
router.get('/', (req, res) => {
    res.send("index");
})

module.exports = router;
