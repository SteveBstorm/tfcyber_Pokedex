export interface Pokemon {
  name : string
  weight : number
  height : number
  sprites : Sprite
}

export interface Sprite {
  front_default : string
  back_default : string
  other : Other
}

export interface Other {
  "official-artwork" : artwork
}

export interface artwork {
  front_default : string
}
