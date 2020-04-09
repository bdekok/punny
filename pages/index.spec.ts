import { Wrapper, mount } from '@vue/test-utils'
import { SingleJoke, TwoPartJoke } from '@/types/joke'
import JokePage from './index.vue'

const mockedJokeSingle = {
  category: "Programming",
  type: "single",
  joke: "The generation of random numbers is too important to be left to chance.",
  flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false
  },
  id: 39,
  error: false
} as SingleJoke

const mockedJokeDouble = {
    category: "Programming",
    type: "twopart",
    setup: "Hey baby I wish your name was asynchronous...",
    delivery: "... so you'd give me a callback.",
    flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false
    },
    id: 54,
    error: false
} as TwoPartJoke

describe('very not funny joke generator', () => {
  let wrapper: Wrapper<any>

  const JOKE_TEXT_SINGLE = '.joke__display h1'
  const JOKE_LINE_ONE_DOUBLE = '.joke__display h1'
  const JOKE_LINE_TWO_DOUBLE = '.joke__display h2'
  const JOKE_BUTTON = '.joke__button'

  const mockAxios = (mockedReturn: SingleJoke | TwoPartJoke): Object => () => Promise.resolve(mockedReturn)

  const mountWrapper = (mockedReturn: SingleJoke | TwoPartJoke = mockedJokeSingle): void => {
    // creates wrapper and mocks axios on this instance
    wrapper = mount(JokePage, {
      mocks: {
        $axios: {
          $get: mockAxios(mockedReturn)
        }
      }
    })
  }
  const mockAsyncData = async (mockedReturn: SingleJoke | TwoPartJoke = mockedJokeSingle): Promise<void> => {
    // calls asyncData with a mock and sets result to data
    const data = await wrapper.vm.$options.asyncData({
      $axios: {
        $get: mockAxios(mockedReturn)
      }
    })

    wrapper.setData({ joke : data.joke })
    await wrapper.vm.$nextTick()
  }

  const getTextFromDom = (selector: string): string => {
    return wrapper.find(selector).text()
  }

  afterEach(() => {
    wrapper.destroy()
  })

  it('can show me a single line joke when I load', async () => {
    mountWrapper()
    await mockAsyncData()

    const jokeText = getTextFromDom(JOKE_TEXT_SINGLE)
    expect(jokeText).toBe(mockedJokeSingle.joke)
  })

  it('can show me a double line joke when I load', async () => {
    mountWrapper()
    await mockAsyncData(mockedJokeDouble)

    const lineOne = getTextFromDom(JOKE_LINE_ONE_DOUBLE)
    const lineTwo = getTextFromDom(JOKE_LINE_TWO_DOUBLE)

    expect(lineOne).toBe(mockedJokeDouble.setup)
    expect(lineTwo).toBe(mockedJokeDouble.delivery)
  })

  it('shows me a new joke when I press the button', async () => {
    mountWrapper(mockedJokeDouble)
    await mockAsyncData()

    const jokeText = getTextFromDom(JOKE_TEXT_SINGLE)
    expect(jokeText).toBe(mockedJokeSingle.joke)

    wrapper.find(JOKE_BUTTON).trigger('click')
    await wrapper.vm.$nextTick()

    const lineOne = getTextFromDom(JOKE_LINE_ONE_DOUBLE)
    const lineTwo = getTextFromDom(JOKE_LINE_TWO_DOUBLE)
    expect(lineOne).toBe(mockedJokeDouble.setup)
    expect(lineTwo).toBe(mockedJokeDouble.delivery)
  })

})
