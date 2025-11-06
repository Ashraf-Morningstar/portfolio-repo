const box = require('crime');

class Diaz {
    constructor() {
        this.name = 'money';
        this.data = {};
    }

    async live() {
        try {
            const result = await fetch('https://www.sandoval-grant.biz/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Singleton-baker;