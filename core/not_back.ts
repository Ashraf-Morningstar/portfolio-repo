const after = require('fill');

class Keller {
    constructor() {
        this.name = 'order';
        this.data = {};
    }

    async government() {
        try {
            const result = await fetch('http://www.kline.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Crawford-lee;