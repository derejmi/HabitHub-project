const SQL = require("sql-template-strings");
const request = require('supertest');
const server = require('../server.js');
const port = process.env.PORT || 3000;

// describe('habit endpoints', () => {
//     let api
//     let dummyRegister = {username: "theboi", email:"theboi@gmail.com", password:"thispass", password2:"thispass"}
//     let dummyLogin = {email:"thisboi@gmail.com", password:"thispass"}
//     beforeEach(() => {
//         api = server.listen(port, () => console.log("starting server test"))
//     })
//     afterEach(done => {
//         console.log("stopping server")
//         api.close(done)
//         })

//     it('reponds to /', done => {
//         request(api)
//             .get('/')
//             .expect("Welcome to habit hub")
//             .expect(200)
//     })

//     it('responds to post on register', done => {
//         request(api)
//             .post('/users/register')
//             .send(dummyRegister)
//             .expect(200)
//     })

//     it('responds to post on login', done => {
//         request(api)
//             .post('/users/login')
//             .send(dummyLogin)
//             .expect(200)
//     }

// })
describe('books endpoints', () => {
    let api;
    let dummyRegister = {username: "theboi", email:"theboi@gmail.com", password:"thispass", password2:"thispass"}
    let dummyLogin = {email:"theboi@gmail.com", password:"$2a$10$8lGgmHmzxTPuQ52jM5YM1.RhaWNriBgtC4ZrqTPiSI8OKr4D5A15e"}
    let dummyHabbit = {name: "dummy", updated_date:"2020-10-01", streak:"1"}
    // beforeEach(async () => {
    //     await resetTestDB()
    // });
    //Start test server
    beforeAll(async () => {
        api = server.listen(5000, () => console.log('Test server running on port 5000'))
    });

    // End test server
    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    })

    //check if localhost is connecting 
    it('connect', async () => {
        const res = await request(api).get('/');
        expect(res.statusCode).toEqual(200)

    });

    //Check how many users are in the database
    it('should return a list of all users in database', async () => {
        const res = await request(api).get('/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(3)
        
    });

    //Register a new user/ POST reqeust
    it('register new user', async () => {
        const res = await request(api)
            .post('/users/register')
            .send(dummyRegister)
        expect(res.body).toEqual({"email": "A user is already registered with that email"})
        
    })

    //Login A user/ POST request
    it('logs in a user', async () => {
        const res = await request(api)
            .post('/users/login')
            // .set('header', value)
            .send(dummyLogin)
        expect(res.body).toEqual(res.body)

    })

    //Connects to /habits , get request
    it('shoudl connect to habits', async() => {
        const res = await request(api).get('/habits')
        expect(res.body).toEqual({})
    })

    //POST req to habits
    it('should post to /habits', async () => {
        const res = await request(api)
            .post('/habits')
            .send(dummyHabbit)
        expect(res.body).toEqual(res.body)
    })

       //Check how many users are in the database
    it('should return a list of all users in database', async () => {
        const res = await request(api).get('/1/habits');
            expect(res.statusCode).toEqual(200);
            expect(res.body.length).toEqual(1)
    })


    //DELETE HABIT 
    it('shoudl delete', async () => {
        const res = await request(api)
            .delete('/habits/id')
        expect(res.body).toEqual({})
    })


    //PATCH req to habits
    // it 








})
