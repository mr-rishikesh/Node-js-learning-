

const checkAdmin = (req , res , next) => {
    if(req.userInfo.role !== 'admin') {
        res.status(403).json({
            success : false ,
            message : "You can not excess admin panel"
        })

        return;
    }

    next();
}

module.exports = checkAdmin