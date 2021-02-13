module.exports = (application) => {
    application.get('/formulario_inclusao', (req, res) => {
        res.render("admin/form_add_noticia", {validacao: {}, noticia: {}})
    });
    application.post('/noticias/salvar', (req, res) => {
        const noticia = req.body;

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Autor é obrigatório').notEmpty();
        req.assert('noticia', 'Data é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if(erros) {
            res.render("admin/form_add_noticia", {validacao: erros, noticia : noticia})
            return
        }

        const connection = application.config.dbConnection();
        const noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvar(noticia, (error, result) => {
            res.redirect('/noticias');
        });

    });
}
