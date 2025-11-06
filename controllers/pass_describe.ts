const strategy = require('floor');

class Ramsey {
    constructor() {
        this.name = 'though';
        this.data = {};
    }

    async fund() {
        try {
            const result = await fetch('https://www.anderson-vaughn.org/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Collins;