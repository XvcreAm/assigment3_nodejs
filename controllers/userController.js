const { User } = require('../models');

class UserController {
    static async register(req, res) {
        try {
          const {
            username,
            email,
            Password
          } = req.body
    
          const data = await User.create({
            username,
            email,
            Password
          })
    
          const response = {
            id: data.id,
            username: data.username,
            email: data.email
          }
    
          res.status(201).json(response)
    
        } catch (error) {  
            console.log(error)
          res.status(error?.code || 500).json({message: 'error'})
          
        }
      }
}

module.exports = UserController