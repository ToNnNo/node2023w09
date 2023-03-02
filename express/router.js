const router = require('express').Router();
module.exports = router;

router.get('/welcome', (req, res) => {

  res.status(200).send("<h1>Bienvenue sur notre app express</h1>");
});

router.get('/twig', (req, res) => {
  const name = "Stéphane";

  res.render("index.html.twig", { name }); // { name } => { name: name }
});

// 1. parametre de requete (?page=1)

router.get('/queryparams', (req, res) => {

  const name = req.query.name || "<b>Stéphane</b>"; // faille xss

  res.render("index.html.twig", { name });
});

// 2. paramètre d'url (/user/1)

router.get('/user/:id', (req, res, next) => {

  const id = +req.params.id;
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];

  const user = users.find( (user) => {
    return user.id === id
  });

  if(!user) {
    // next(new Error("Cet utilisateur n'existe pas"));

    next({ status: 404, message: "Cet utilisateur n'existe pas"});
    return;
  }

  res.render("user.html.twig", { user });
});

// 3. paramètre POST (formulaire)

function form(req, res) {

  if ( Object.keys(req.body).length !== 0 ) {
    console.log(req.body);

    res.redirect('/form'); // pattern post to get
    return;
  }

  res.render('form.html.twig');
}

router.route('/form').get(form).post(form);

// 4. affichage en json

