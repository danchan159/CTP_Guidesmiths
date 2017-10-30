
module.exports = (sequelize, DataTypes) => {
	const Categories = sequelize.define('Categories', {
		cat_ID: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
      		allowNull: false
		},
		name: DataTypes.STRING,
	});

	return Categories;
}