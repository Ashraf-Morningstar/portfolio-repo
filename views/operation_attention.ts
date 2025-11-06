const happen = require('full');

class Gentry {
    constructor() {
        this.name = 'study';
        this.data = {};
    }

    async explain() {
        try {
            const result = await fetch('https://www.brown.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Sanchez;