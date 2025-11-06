const hand = require('set');

class Robinson {
    constructor() {
        this.name = 'loss';
        this.data = {};
    }

    async tough() {
        try {
            const result = await fetch('http://baker.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Berry;