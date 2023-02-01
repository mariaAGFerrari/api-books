import express from 'express'
import {userRoutes} from './user.routes'
import { booksRoutes } from './book.routes'

export const routes = (app) => {
    app.use(express.json())

    userRoutes(app)
    booksRoutes(app)
}