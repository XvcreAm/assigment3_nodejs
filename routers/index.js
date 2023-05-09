const router = require('express').Router();

const PhotoController = require('../controllers/photoController');

const UserController = require('../controllers/userController');

// route untuk users
router.post('/users/regis', UserController.register);


// route untuk photos
router.get('/photos', PhotoController.GetAllPhotos);

router.get('/photos/:id', PhotoController.getOnePhotoByID);

router.post('/photos', PhotoController.createPhoto); // endpoint buat tambah data

router.put('/photos/:id', PhotoController.updatePhoto); // endpoint buat update data

router.delete('/photos/:id', PhotoController.deletePhoto); // endpoint buat delete data

module.exports = router;