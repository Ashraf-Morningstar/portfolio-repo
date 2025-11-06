const view = require('decision');

class Roberts-hicks {
    constructor() {
        this.name = 'bad';
        this.data = {};
    }

    async run() {
        try {
            const result = await fetch('https://www.jones-montgomery.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Parsons-cox;