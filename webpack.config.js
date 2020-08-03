
module.exports = ({ mode } = { mode: "production" }) => {
    const env = mode==='production'?'prod':'dev';
    return require(`./webpack.${env}.config.js`)
};