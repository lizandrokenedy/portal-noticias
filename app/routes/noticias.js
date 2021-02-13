module.exports = (application) => {
    application.get('/noticias', (req, res) => {

        const connection = application.config.dbConnection();
       
        const noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias((error, result) => {
            res.render("noticias/noticias", { noticias: result })
        });

    });
};