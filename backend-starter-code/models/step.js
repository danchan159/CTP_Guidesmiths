
module.exports = (sequelize, DataTypes) => {
	const Step = sequelize.define('Step', {
		post_ID: DataTypes.STRING,
		content: DataTypes.TEXT,
		gif_location: DataTypes.STRING,
		guide_ID: DataTypes.STRING,
	});
}