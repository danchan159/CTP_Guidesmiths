
module.exports = (sequelize, DataTypes) => {
	const Steps = sequelize.define('Steps', {
		post_ID: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
      		allowNull: false
		},
		content: DataTypes.TEXT,
		gif_location: DataTypes.STRING,
		guide_ID: DataTypes.STRING,
	});	

	return Steps;
}