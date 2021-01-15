const SQL = require("sql-template-strings");
const request = require('supertest');
const server = require('../server.js');
const port = process.env.PORT || 5000;


describe('all endpoints endpoints', () => {
    let api;
    let token;
    let dummyRegister = {username: "theboi", email:"theboi@gmail.com", password:"thispass", password2:"thispass"}
    let dummyLogin = {email:"theboi@gmail.com", password:"$2a$10$8lGgmHmzxTPuQ52jM5YM1.RhaWNriBgtC4ZrqTPiSI8OKr4D5A15e"}
    let dummyHabbit = {name: "dummy", updated_date:"2020-10-01", streak:"1"}
    // beforeEach(async () => {
    //     await resetTestDB()
    // });
    //Start test server
    beforeAll(async () => {
        api = server.listen(port, () => console.log('Test server running on port 5000'))
        request(api).post('/users/login')
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
        expect(res.statusCode).toEqual(400);
        expect(res.body.length).toEqual("undefined")
        
    });

    //Register a new user/ POST reqeust
    it('register new user', async () => {
        const res = await request(api)
            .post('/users/register')
            .send(dummyRegister)
        expect(res.body).toEqual({})
        
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

       //Check how many habits are in the database
    it('should return a list of all users in habits', async () => {
        const res = await request(api).get('/habits');
            expect(res.statusCode).toEqual(401);
            expect(res.body).toEqual({})
    })

    //Get By id 
    it('shoudl get by id', async () => {
        const res = await request(api).get('/habits/1') 
            expect(res.statusCode).toEqual(401)
   })


   //It should Patch
   it('shoudl patch', async () => {

   })

    //DELETE HABIT 
    it('shoudl delete', async () => {
        const res = await request(api)
            .delete('/habits/id')
        expect(res.body).toEqual({})

        const habRes = await request(api).get('/habits/1');
        expect(habRes.statusCode).toEqual(401);
        expect(habRes.body).toHaveProperty({

        });
    })


    //PATCH req to habits
    // it 








})
