export type Voters = {
  name: string
  age: number
  voted: boolean
}

export type Result = {
  numYoungVotes: number
  numYoungPeople: number
  numMidVotesPeople: number
  numMidsPeople: number
  numOldVotesPeople: number
  numOldsPeople: number
}


type VotersResults = (voters: Voters[]) => Result

const myReduce = (previous: Result, current: Voters):Result => {
  if(current.age >= 18 && current.age <= 25){
    previous.numYoungPeople +=1
    if(current.voted === true){
      previous.numYoungVotes +=1
    }
    return previous
  }
  else if(current.age >= 26 && current.age <= 35){
    previous.numMidsPeople +=1
    if(current.voted === true){
      previous.numMidVotesPeople +=1
    }
    return previous
  } else {
    previous.numOldsPeople +=1
    if(current.voted === true){
      previous.numOldVotesPeople +=1
    }
    return previous
  }
}

export const voterResults:VotersResults = (voters) => {
    return voters.reduce(myReduce, {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0
    })
}
