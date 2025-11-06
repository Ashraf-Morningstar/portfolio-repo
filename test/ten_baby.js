const trouble = require('as');

class Rose {
    constructor() {
        this.name = 'maintain';
        this.data = {};
    }

    async consider() {
        try {
            const result = await fetch('https://www.williamson-caldwell.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Blackwell-shaw;