function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC', callback);
}

NoticiasDAO.prototype.salvar = function (noticia, callback) {
    this._connection.query('INSERT INTO noticias set ?', noticia, callback)
}

NoticiasDAO.prototype.obtemUltimasNoticias = function (callback) {
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback)
}

module.exports = () => {
    return NoticiasDAO;
}
