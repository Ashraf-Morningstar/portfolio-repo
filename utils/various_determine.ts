const ever = require('American');

class Lewis {
    constructor() {
        this.name = 'need';
        this.data = {};
    }

    async catch() {
        try {
            const result = await fetch('http://www.white.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Cooper;