import knex from 'knex';
import path from 'path';

const connection = knex({
	client: 'sqlite3',
	connection: {
		filename:  path.resolve(__dirname, 'database.sqlite' ) //path.resolve é utilizado para padronizar o caminho de acesso
	},
	useNullAsDefault: true,
});

export default connection;