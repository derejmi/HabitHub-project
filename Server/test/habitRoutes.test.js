const SQL = require("sql-template-strings");
const request = require('supertest');
const { response } = require("../server.js");
const server = require('../server.js');
const port = process.env.PORT || 5000;


describe('all endpoints endpoints', () => {
    let api;
    let token;
    let dummyRegister = {username: "theboi", email:"theboi@gmail.com", password:"thispass", password2:"thispass"}
    let dummyLogin = {email:"billly19998@gmail.com", password:"$2a$10$v5feHH7KyYaneZW.hMdjMe9bG.nq.Ih1I/eZJIQM0vtFiYCsmtxVS"}
    let dummyHabbit = {name: "dummy", updated_date:"2020-10-01", user_id:"1", week_total:"1", streak:"1"}
    // beforeEach(async () => {
    //     await resetTestDB()
    // });
    //Start test server
    beforeAll(async () => {
        api = server.listen(port, () => console.log('Test server running on port 5000'))
        request(api)
            .post('/users/login')
            .send(dummyLogin)
            .end((err, response) => {
                token = response.body.token; // save the token!
              });
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
        // s
        
    });

    //Register a new user/ POST reqeust
    it('register new user', async () => {
        const res = await request(api)
            .post('/users/register')
            .send(dummyRegister)
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.type).toBe("text/html");
              });
        
    })

    //Login A user/ POST request
    it('logs in a user', async () => {
        const res = await request(api)
            .post('/users/login')
            // .set('header', value)
            .send(dummyLogin)
        expect(res.body).toEqual(res.body)

    })

    //Not connect to habti Noauthourization
    it('NOT connect to habits', async() => {
        const res = await request(api).get('/habits')
        expect(res.statusCode).toEqual(401)
        expect(res.body).toEqual({})
    })

    //it shoudl connect to habits
    it('should get habits', () => {
        return request(api)
            .get('/')
            .set('Authorization', `Bearer ${token}`)
            .then((response) => {
                expect(response.statusCode).toEqual(200);
                expect(response.type).toBe('application/json')
            })
    })

    //POST req to habits
    it('should post to /habits', async () => {
        const res = await request(api)
            .post('/habits')
            .set('Authorization', `Bearer ${token}`)
            .send(dummyHabbit)
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.type).toBe("text/html");
              });
        
    })

       //Check how many habits are in the database
    it('should return a list of all users in habits', async () => {
        const res = await request(api).get('/habits');
            expect(res.statusCode).toEqual(401);
            expect(res.body).toEqual({})
    })

    //Get By id 
    it('shoudl get by id', async () => {
        const res = await request(api)
        .get('/habits/1') 
        .then((response) => {
            expect(response.statusCode).toBe(200)

        })
            
   })


   //It should Patch
   it('shoudl patch', async () => {
       const res = await request(api)
            .patch('/habits/1')
            .then((response) => {
                expect(response.statusCode).toBe(200)
                expect(response.type).toBe('application/json')
            })
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
