const power = require('bank');

class Wells {
    constructor() {
        this.name = 'music';
        this.data = {};
    }

    async mention() {
        try {
            const result = await fetch('http://www.baker-holland.org/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Kennedy;