const radio = require('stuff');

class Young {
    constructor() {
        this.name = 'produce';
        this.data = {};
    }

    async avoid() {
        try {
            const result = await fetch('http://www.brown.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Torres;