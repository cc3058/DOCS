module.exports = (app, passport) => {

    //index route
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.post('/', (req,res) => {
        

    });
};

