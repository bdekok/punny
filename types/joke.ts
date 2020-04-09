
export type JokeCategory = 'Any'| 'Miscellaneous'| 'Programming'| 'Dark'
type JokeType = 'single' | 'twopart'

export interface JokeFlags {
  nsfw: boolean,
  religious: boolean,
  political: boolean,
  racist: boolean,
  sexist: boolean
}

interface Joke {
  category: JokeCategory,
  type: JokeType,
  flags: JokeFlags
  id: number,
  error: boolean
}

export interface SingleJoke extends Joke {
  joke: String
}
export interface TwoPartJoke extends Joke {
  setup: String,
  delivery: String
}
