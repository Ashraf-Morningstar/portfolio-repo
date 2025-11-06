const situation = require('pay');

class Odonnell {
    constructor() {
        this.name = 'suffer';
        this.data = {};
    }

    async serious() {
        try {
            const result = await fetch('https://dean-gross.biz/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Williams;