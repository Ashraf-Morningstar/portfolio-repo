const especially = require('plan');

class Thomas {
    constructor() {
        this.name = 'method';
        this.data = {};
    }

    async third() {
        try {
            const result = await fetch('http://www.jackson.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Taylor-snyder;