import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

import * as squishCtrl from '../controllers/squishs.js'

router.get('/', squishCtrl.index)
router.post('/', squishCtrl.create)
router.get('/:id', squishCtrl.show)
router.put('/:id', squishCtrl.update)
router.delete('/:id', squishCtrl.delete)

export {
  router
}