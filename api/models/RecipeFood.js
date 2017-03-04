module.exports = {

    attributes: {
        food: {
            model: 'food'
        },

        recipe: {
            model: 'recipe'
        },

        amount:{
            type: 'int'
        }
    },
    associations: [{
        alias: 'food'
    }]
};