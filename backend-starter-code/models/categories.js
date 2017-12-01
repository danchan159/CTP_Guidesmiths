
module.exports = (sequelize, DataTypes) => {
	const Categories = sequelize.define('Categories', {
		categoryID: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
      		allowNull: false
		},
		name: DataTypes.STRING,
	});

	return Categories;
}