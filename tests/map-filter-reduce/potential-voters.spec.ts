import {Result, Voters, voterResults} from '../../src/map-filter-reduce/potential-voters'
describe('PotentialVoters', () => {
  it('should return an object with potential voters group by range age', () => {
    const voters:Voters[] = [
      {name:'Bob' , age: 30, voted: true},
      {name:'Jake' , age: 32, voted: true},
      {name:'Kate' , age: 25, voted: false},
      {name:'Sam' , age: 20, voted: false},
      {name:'Phil' , age: 21, voted: true},
      {name:'Ed' , age:55, voted:true},
      {name:'Tami' , age: 54, voted:true},
      {name: 'Mary', age: 31, voted: false},
      {name: 'Becky', age: 43, voted: false},
      {name: 'Joey', age: 41, voted: true},
      {name: 'Jeff', age: 30, voted: true},
      {name: 'Zack', age: 19, voted: false}
    ] //arrange

    const result = voterResults(voters) //act

    expect(result).toEqual({
      numYoungVotes: 1,
      numYoungPeople: 4,
      numMidVotesPeople: 3,
      numMidsPeople: 4,
      numOldVotesPeople: 3,
      numOldsPeople: 4
    }) //assert
  })
})
