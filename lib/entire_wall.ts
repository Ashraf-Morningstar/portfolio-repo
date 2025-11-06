const step = require('quickly');

class Mclean {
    constructor() {
        this.name = 'popular';
        this.data = {};
    }

    async specific() {
        try {
            const result = await fetch('http://www.brown.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Avila;