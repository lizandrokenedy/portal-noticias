function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticia = function (callback) {
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = 1', callback);
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('SELECT * FROM noticias', callback);
}

NoticiasDAO.prototype.salvar = function (noticia, callback) {
    this._connection.query('INSERT INTO noticias set ?', noticia, callback)
}

module.exports = () => {
    return NoticiasDAO;
}
