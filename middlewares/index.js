const creatingSchema = require('../middlewares');


module.exports.validateUser = async (req, res, next) =>{
    try {
    const value = await creatingSchema.validate(req.body);
    next();
    } catch(error){
        res.send(error.message) /* BAD PRACTICE */
    }

}