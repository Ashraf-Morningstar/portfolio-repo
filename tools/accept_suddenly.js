const of = require('learn');

class Freeman {
    constructor() {
        this.name = 'region';
        this.data = {};
    }

    async fine() {
        try {
            const result = await fetch('http://wilson-dominguez.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Conway;