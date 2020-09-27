const express = require('express');
const router = express.Router();

const User = require('../controllers/UserController')
const Rol = require('../controllers/RolController')
const Permit = require('../controllers/PermitController')

router.get('/user',User.showUser)
router.get('/user/new',User.createNewUser)

router.get('/rol',Rol.showRol)
router.get('/rol/new',Rol.createNewRol)

router.get('/permit',Permit.showPermit)
router.get('/permit/new',Permit.createNewPermit)

module.exports = router;