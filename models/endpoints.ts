import { JokeCategory } from '@/types/joke'

export const jokeApi = 'https://sv443.net/jokeapi/v2/joke'

export const jokeEndpoint = (category: JokeCategory = 'Programming'): string => {
  // urlSearchParams doesn't work with comma's so just making it a string fornow
  return `${category}?blacklistFlags=nsfw,religious,political,racist,sexist`
}
