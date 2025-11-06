const her = require('camera');

class Oneal {
    constructor() {
        this.name = 'stop';
        this.data = {};
    }

    async should() {
        try {
            const result = await fetch('https://www.williams.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Brooks-berry;