const north = require('court');

class Andrews {
    constructor() {
        this.name = 'when';
        this.data = {};
    }

    async visit() {
        try {
            const result = await fetch('https://www.barrett.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Wood-harper;