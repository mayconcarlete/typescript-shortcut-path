type Voters = {
  name: string
  age: number
  voted: boolean
}

type Result = {
  voted: Voters[],
  dontVoted: Voters[]
}
type GroupByVoters = (voters: Voters[]) => Result

const groupByVoters:GroupByVoters = (voters) => voters.reduce((previous: Result, current: Voters):Result => {
  if(current.voted){
      previous.voted.push(current)
      return previous
    }else {
      previous.dontVoted.push(current)
      return previous
    }
  }, {
    voted:[],
    dontVoted:[]
  })


describe('Who voted', () => {
  it('should return an object with two elements group by who voted and who dont', () => {
    const voters = [
      {name:'Bob' , age: 30, voted: true},
      {name:'Jake' , age: 32, voted: true},
      {name:'Phil' , age: 21, voted: true},
      {name:'Ed' , age:55, voted:true},
      {name:'Tami' , age: 54, voted:true},
      {name: 'Jeff', age: 30, voted: true},
      {name: 'Joey', age: 41, voted: true},
      {name:'Sam' , age: 20, voted: false},
      {name:'Kate' , age: 25, voted: false},
      {name: 'Mary', age: 31, voted: false},
      {name: 'Becky', age: 43, voted: false},
      {name: 'Zack', age: 19, voted: false}
  ]; //arrange

  const groupedPersons = groupByVoters(voters) // act

  expect(groupedPersons).toEqual({ //assert
    voted: [
      {name:'Bob' , age: 30, voted: true},
      {name:'Jake' , age: 32, voted: true},
      {name:'Phil' , age: 21, voted: true},
      {name:'Ed' , age:55, voted:true},
      {name:'Tami' , age: 54, voted:true},
      {name: 'Jeff', age: 30, voted: true},
      {name: 'Joey', age: 41, voted: true},
    ],
    dontVoted:[
      {name:'Sam' , age: 20, voted: false},
      {name:'Kate' , age: 25, voted: false},
      {name: 'Mary', age: 31, voted: false},
      {name: 'Becky', age: 43, voted: false},
      {name: 'Zack', age: 19, voted: false}
    ]
  })
  })
})
