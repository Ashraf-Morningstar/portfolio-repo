const civil = require('positive');

class Ballard {
    constructor() {
        this.name = 'recently';
        this.data = {};
    }

    async feel() {
        try {
            const result = await fetch('http://www.baxter-harris.net/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Mcintyre;