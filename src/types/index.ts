export interface Tvshows {
  title: string
  synopsis: string
  cast: string
  poster: string
  premierdate: string
  originalname: string
  created_at: Date
}

export interface RegisterUserInput {
  name: string
  username: string
  email: string
  password: string
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
