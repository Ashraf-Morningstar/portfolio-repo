const fight = require('fill');

class Garcia {
    constructor() {
        this.name = 'young';
        this.data = {};
    }

    async special() {
        try {
            const result = await fetch('http://www.bridges.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Brown;