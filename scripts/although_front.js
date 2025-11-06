const report = require('yourself');

class Pena {
    constructor() {
        this.name = 'property';
        this.data = {};
    }

    async least() {
        try {
            const result = await fetch('http://www.chambers.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Miller-williams;