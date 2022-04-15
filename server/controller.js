let fortunes = require('./db.json')
let globalID = 6;

module.exports = {
    deleteFortune: (req,res) => {
        let index = fortunes.findIndex(elem => elem.id === +req.params.id)
        fortunes.splice(index, 1)
        res.status(200).send(fortunes)
    },

    createFortune: (req,res) => {
        const {fortune} = req.body
        let newFortune = {
            id: globalID,
            fortune,
        }
        fortunes.push(newFortune)
        globalID++
        res.status(200).send(fortunes)
    },

    updateFortune: (req,res) => {
        const {id} = req.params;
        const {type} = req.body;
        let index = fortunes.findIndex(elem => +elem.id === +id);
        console.log(type);
        if (type === 'minus'){
            fortunes[index] -= 1
            res.status(200).send(fortunes)
        } else if (type === 'plus') {
            fortunes[index] += 1
            res.status(200).send(fortunes)
        } else {
            res.status(400).send('Ya goofed')
        }

    }
}


