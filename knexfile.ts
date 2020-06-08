import path from 'path';
//este arquivo você não poderá utilizar a sintaxe export default, pois o knex ainda não suporta
module.exports = { 
    client: 'sqlite3',
	connection: {
		filename:  path.resolve(__dirname, 'src', 'database', 'database.sqlite' ), //path.resolve é utilizado para padronizar o caminho de acesso
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};