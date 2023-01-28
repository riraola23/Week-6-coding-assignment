var expect = chai.expect;

describe('wargame', function() {
    describe('#shuffle', function(){
        it('should suffle the array and give the length of array', function(){
            const x = shuffle([1,3,5,7,9,11]);
            expect(x.length).to.equal(6)
        })
    })
})




