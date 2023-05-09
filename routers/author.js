function commentAuthorization (req, res, next) {
    const id = req.params.id
    Comment.findOne({
        where: {
            id: id
        }
    })
    .then(data => {
        if(!data){
            return res.status(404).json({
                message: 'Comment not found',
                devMessage: `Comment with id ${id} not found`
            })
        }
        if(data.UserId !== res.locals.user.id){
            return res.status(401).json({
                message: 'User not authorized',
                devMessage: `User with id ${res.locals.user.id} not authorized to id ${id}`
            })
        }
        return next();
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Internal Server Error',
            devMessage: err
        })
    })
}