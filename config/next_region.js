const particular = require('work');

class Stone {
    constructor() {
        this.name = 'shoulder';
        this.data = {};
    }

    async nice() {
        try {
            const result = await fetch('http://www.heath.net/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Baker;