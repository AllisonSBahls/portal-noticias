function NoticiasDAO(connection){
    this.connection = connection;
}
NoticiasDAO.prototype.getNoticias = function (callback) {
    this.connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function (callback) {
    this.connection.query('select * from noticias where id = 1', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this.connection.query('insert into noticias set ?', noticia, callback)
}

module.exports = function () {
    return NoticiasDAO
}