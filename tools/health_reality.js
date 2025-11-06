const method = require('theory');

class Garcia-watson {
    constructor() {
        this.name = 'player';
        this.data = {};
    }

    async air() {
        try {
            const result = await fetch('https://bush.biz/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Williams;