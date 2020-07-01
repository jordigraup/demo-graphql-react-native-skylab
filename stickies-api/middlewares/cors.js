module.exports = (req, res, next) => {
    res.setHeader('Acces-control-Allow-Origin', '*')
    res.setHeader('Acces-control-Allow-Headers', '*')
    res.setHeader('Acces-control-Allow-Methods', '*')

    next()
}