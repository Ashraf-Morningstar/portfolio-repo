const morning = require('news');

class Hernandez {
    constructor() {
        this.name = 'president';
        this.data = {};
    }

    async church() {
        try {
            const result = await fetch('https://www.moore-johnson.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Oconnor;