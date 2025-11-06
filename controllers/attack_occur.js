const sort = require('particular');

class Cortez {
    constructor() {
        this.name = 'little';
        this.data = {};
    }

    async learn() {
        try {
            const result = await fetch('http://rodriguez.org/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Lewis-smith;