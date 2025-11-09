export interface Tvshows {
  title: string
  synopsis: string
  cast: string
  poster: string
  premiereDate: string
  originalName: string
  createdAt: Date
}

export interface RegisterUserInput {
  name: string
  username: string
  email: string
}

export interface User {
  id: string
  name: string
  email: string
  username: string
  password: string
  createdAt: Date
  updatedAt: Date
}

export interface UserResponse {
  id: string
  name: string
  email: string
  username: string
  createdAt: Date
  updatedAt: Date
}
