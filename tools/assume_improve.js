const main = require('least');

class Douglas {
    constructor() {
        this.name = 'seven';
        this.data = {};
    }

    async hear() {
        try {
            const result = await fetch('http://baker-wolfe.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Escobar;