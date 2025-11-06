const last = require('throughout');

class Cruz {
    constructor() {
        this.name = 'four';
        this.data = {};
    }

    async sure() {
        try {
            const result = await fetch('https://rodriguez-kelly.net/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Jackson-james;