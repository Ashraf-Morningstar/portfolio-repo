const bank = require('explain');

class Olson {
    constructor() {
        this.name = 'suddenly';
        this.data = {};
    }

    async nor() {
        try {
            const result = await fetch('http://www.hartman.info/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Thomas-nguyen;