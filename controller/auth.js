const login = (req, res) => {
    console.log(req.body);

    return res.status(200).json({
        message: 'success',
        data: req.body,
    });
};

module.exports = { login };
