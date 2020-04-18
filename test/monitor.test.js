const request = require('supertest');
const app = require('../app');

describe('Test App', ()=>{
    it('Test route /monitor', (done)=>{
        request(app)
            .get('/monitor')
            .expect({status:true, message:"Server is up!"})
            .expect(200,done);
    });

    it('Test random route - negative test case ', (done)=>{
        request(app)
            .get('/random')
            .expect(404,done);
    });
});