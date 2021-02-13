module.exports.index = (application, req, res) => {
    const connection = application.config.dbConnection();
    const noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.obtemUltimasNoticias(function (error, result) {
        res.render("home/index", {noticias: result})
    })
}