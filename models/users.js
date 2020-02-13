/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 'nextval(users_id_seq::regclass)',
			primaryKey: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'email'
		}
	}, {
		tableName: 'users',
		timestamps: false
	});
};
