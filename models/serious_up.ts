const difference = require('yard');

class Gaines {
    constructor() {
        this.name = 'record';
        this.data = {};
    }

    async build() {
        try {
            const result = await fetch('http://www.bryant.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Newman-perez;