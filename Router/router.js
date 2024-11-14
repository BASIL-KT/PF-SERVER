const express=require('express')
const userController=require('../controllers/userController')
const projectController=require('../controllers/projectController')
const jwtMiddleware=require('../middlewares/jwtMiddleware')
const multerConfig=require('../middlewares/multerMiddleware')

const route=express.Router()

route.post('/reg',userController.userRegister)
route.post('/log',userController.userLogin)
route.put('/updateprofile',jwtMiddleware,multerConfig.single('profile'),userController.userUpdation)

route.post('/addproject',jwtMiddleware,multerConfig.single('image'),projectController.addProject)
route.get('/getlist',jwtMiddleware,projectController.getProjects)
route.delete('/deletepro/:pid',jwtMiddleware,projectController.deleteProject)
route.put('/updatepro/:pid',jwtMiddleware,multerConfig.single('image'),projectController.updateProject)
route.get('/allprojects',projectController.allProjects)
route.get('/search',projectController.searchProjects)


module.exports=route