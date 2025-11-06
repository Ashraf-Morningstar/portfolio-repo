const four = require('enough');

class Wilson {
    constructor() {
        this.name = 'lot';
        this.data = {};
    }

    async either() {
        try {
            const result = await fetch('https://www.morrison-short.net/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Knight;