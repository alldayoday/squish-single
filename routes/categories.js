import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

import * as categCtrl from '../controllers/categories.js'


export {
  router
}