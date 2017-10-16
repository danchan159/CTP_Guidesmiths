
module.exports = (sequelize, DataTypes) => {
	const Guide = sequelize.define('Guide', {
		guide_ID: DataTypes.STRING,
		user_ID: DataTypes.STRING,
		cat_ID: DataTypes.STRING,
		steps_ID: DataTypes.STRING,
	});

	return Guide;

}