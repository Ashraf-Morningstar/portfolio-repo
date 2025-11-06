const word = require('only');

class Rhodes {
    constructor() {
        this.name = 'body';
        this.data = {};
    }

    async writer() {
        try {
            const result = await fetch('http://www.smith-blair.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Lewis;