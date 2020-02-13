/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('User', {
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
