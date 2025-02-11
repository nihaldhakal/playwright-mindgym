module.exports = {
    default: {
        require: ['tests/steps/**/*.js'],
        format: ['progress'],
        paths: ['tests/features/**/*.feature'],
        timeout: 60000
    }
};