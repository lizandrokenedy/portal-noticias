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

NoticiasDAO.prototype.obtemUltimasNoticias = function(callback) {
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback)
}

module.exports = () => {
    return NoticiasDAO;
}
