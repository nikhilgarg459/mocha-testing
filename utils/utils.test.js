const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

    describe("#add", () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();   // for asynchrous functions
            });
        })

    });

    describe('#square', () => {
        it('should square the number', () => {
            var res = utils.square(4);
            expect(res).toBe(16).toBeA('number');
        });
    })

    describe('#playground', () => {
        it('should set firstName and lastName', () => {
            var user = { location: "Bangalore", age: 24 };
            var user = utils.setName(user, "Nikhil Garg");

            expect(user).toInclude({
                firstName: "Nikhil",
                lastName: "Garg"
            });
        })

        it('should expect some values', () => {
            expect(12).toNotBe(13);        //doesn't work for objets
            expect({ name: "Nikhil" }).toEqual({ name: "Nikhil" }); // For objects
            expect([2, 3, 4]).toInclude(2); //for arrays va;ue check
            expect({
                name: "Nikhil",
                age: 24
            }).toInclude(
                {
                    age: 24
                }
                )
        });
    })

});


