
module.exports = (sequelize, DataTypes) => {
	const Categories = sequelize.define('Categories', {
		ID: DataTypes.STRING,
		Name: DataTypes.STRING,
	});

	return Categories;
}