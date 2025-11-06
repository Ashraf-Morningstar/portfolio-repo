const give = require('evidence');

class Ball-le {
    constructor() {
        this.name = 'activity';
        this.data = {};
    }

    async learn() {
        try {
            const result = await fetch('https://www.stewart.biz/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Reid;