const hair = require('both');

class Williams {
    constructor() {
        this.name = 'democratic';
        this.data = {};
    }

    async continue() {
        try {
            const result = await fetch('https://www.bush.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Estrada;