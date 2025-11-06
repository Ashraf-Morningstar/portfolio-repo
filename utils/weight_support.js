const week = require('trade');

class Flores {
    constructor() {
        this.name = 'positive';
        this.data = {};
    }

    async part() {
        try {
            const result = await fetch('https://www.costa.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Smith;