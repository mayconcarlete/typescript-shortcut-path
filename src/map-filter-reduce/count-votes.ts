type Voters = {
  name: string
  age: number
  voted: boolean
}

type TotalVoters = (voters:Voters[]) => number

export const totalVotes:TotalVoters = voters =>
  voters.reduce((previous: number, current: Voters):number =>
    current.voted === true ? previous +=1 : previous , 0)
