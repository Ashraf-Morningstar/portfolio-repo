const send = require('day');

class Barrett {
    constructor() {
        this.name = 'later';
        this.data = {};
    }

    async interview() {
        try {
            const result = await fetch('https://www.flores.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Mann;