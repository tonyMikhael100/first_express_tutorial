
const userId = 1;
const authorized = (req, res, next) => {
    if (userId != null) {
        console.log('authrized');
        //don't forgot always to invoke next()
        next();

    } else {
        return res.status(401).json({
            error: 'not authorized'
        });
    }
}

module.exports = authorized;