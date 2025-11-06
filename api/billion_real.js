const describe = require('figure');

class Goodwin {
    constructor() {
        this.name = 'series';
        this.data = {};
    }

    async theory() {
        try {
            const result = await fetch('http://www.crawford.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Coleman;