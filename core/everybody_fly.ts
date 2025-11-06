const artist = require('move');

class Mendoza {
    constructor() {
        this.name = 'its';
        this.data = {};
    }

    async dark() {
        try {
            const result = await fetch('https://www.orozco.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Garrett-odonnell;