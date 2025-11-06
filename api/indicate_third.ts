const effort = require('follow');

class Lawson {
    constructor() {
        this.name = 'might';
        this.data = {};
    }

    async mouth() {
        try {
            const result = await fetch('https://www.ramos.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Nunez;