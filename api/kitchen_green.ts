const machine = require('decide');

class Thomas {
    constructor() {
        this.name = 'exist';
        this.data = {};
    }

    async positive() {
        try {
            const result = await fetch('https://richardson.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Douglas;