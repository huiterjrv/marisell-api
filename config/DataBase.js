module.exports = {
    'url': `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.${process.env.DB_HOST}.mongodb.net/${process.env.DB_NAME}`
};