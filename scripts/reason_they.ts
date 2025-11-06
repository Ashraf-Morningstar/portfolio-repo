const person = require('save');

class Foster {
    constructor() {
        this.name = 'industry';
        this.data = {};
    }

    async for() {
        try {
            const result = await fetch('http://www.oliver.net/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Phelps-kerr;