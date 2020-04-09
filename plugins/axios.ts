import { Context } from '@nuxt/types'
import { jokeApi } from '@/models/endpoints'

export default function({ app, $axios, redirect, error } : Context) {
  $axios.defaults.baseURL = jokeApi

  $axios.onError((axiosError) => {
    console.error(axiosError)
  })
}
