// CODED IN A HURRY, DO NOT USE AS REFERENCE TO GOOD BACKEND PRACTICES.

import express, { json } from 'express';
import cors from 'cors';
import { body, validationResult } from 'express-validator';
import { v4 } from 'uuid';
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

class ResponseHandler {
    constructor(data = null, error = null) {
        this.data = data;
        this.error = error;
    }
}

const app = express();

app.use(cors());
app.use(json());

app.use((req, res, next) => {
    try {
        const token = req.headers.authorization;
        // verify(token, 'SUPERRAREPOKEMON');

        next();
    } catch (e) { 
        next({ statusCode: 401, message: 'not a valid poke-person' })
    }
})


const types = [{
    id: 1,
    name: 'Water'
}, {
    id: 2,
    name: 'Fire'
}, {
    id: 3,
    name: 'Leaf'
}, {
    id: 4,
    name: 'Steel'
}]
const pokemons = [];
const users = [{
    name: 'Prof. Oak',
    role: 'ADMIN',
    email: 'professor.oak@pokedex.com',
    password: 'pikapi'
}];

const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return next({ statusCode: 403, errors });
    }

    next();
}

const CreatePokemonValidator = [
    body('name').isString().notEmpty().withMessage('name is required'),
    body('level').isNumeric().withMessage('level is required'),
    body('isSelected').isBoolean().withMessage('isSelected is required and must be a boolean'),
    body('type').isString().notEmpty().withMessage('type is required'),
    validate
];

const UpdatePokemonValidator = [
    body('id').isString().notEmpty().withMessage('id is must for updating'),
    body('name').isString().notEmpty().withMessage('name is required'),
    body('level').isNumeric().withMessage('level is required'),
    body('isSelected').isBoolean().withMessage('isSelected is required and must be a boolean'),
    body('type').isString().notEmpty().withMessage('type is required'),
    validate
];

const getType = (id) => {
    const type = types.find(t => t.id === id);

    return type;
}

// CREATE
app.post('/pokemon', CreatePokemonValidator, (req, res, next) => {
    const time = new Date();
    const type = getType(req.body.type);

    if(!type) {
        return res.status(403).send(new ResponseHandler(null, { message: 'Invalid Type' }));
    }
    const pokemon = { ...req.body, createdOn: time, updatedOn: time, id: v4() };
    pokemons.push(pokemon);

    res.status(201).send(new ResponseHandler(pokemon));
});

//READ
app.get('/pokemon', (req, res, next) => {
    res.send(new ResponseHandler(pokemons));
});

//UPDATE
app.put('/pokemon', UpdatePokemonValidator, (req, res, next) => {
    const { id } = req.body;
    const pokemonIndex = pokemons.findIndex(p => p.id === id);

    if (pokemonIndex === -1) {
        return next({ statusCode: 404, message: 'professor oak says: no such pokemon' });
    }

    pokemons[pokemonIndex] = { ...pokemons[pokemonIndex], ...req.body, updatedOn: new Date() };

    res.send(new ResponseHandler({ message: 'pokemon updated' }))
});

app.delete('/pokemon/:id', (req, res, next) => {
    const { id } = req.params;
    const pokemonIndex = pokemons.findIndex(p => p.id === id);

    if (pokemonIndex === -1) {
        return next({ statusCode: 404, message: 'professor oak says: no such pokemon' });
    }

    pokemons.splice(pokemonIndex, 1);

    res.send(new ResponseHandler({ message: 'pokemon deleted' }))
});

// USER MODULE ---
const LoginValidator = [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isString().isLength({ min: 4 }),
    validate
]

app.post('/auth/login', LoginValidator, (req, res, next) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return next({ statusCode: 404, message: 'no such trainer found' })
    }

    const token = sign(user, 'SUPERRAREPOKEMON');

    res.send(new ResponseHandler({ token, role: user.role }));
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(
        new ResponseHandler(null, err)
    );
});



app.listen(
    3000,
    () => console.log('SERVER STARTED ON PORT 3000')
)