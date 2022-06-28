export interface Colleague {
  pseudo : string
  score : number
  photo : string
}

export interface FullColleague extends Colleague{
  first:string;
  last:string;
}

export interface AddColleague{
  pseudo : string;
  photo : string;
  first:string;
  last:string;
}
