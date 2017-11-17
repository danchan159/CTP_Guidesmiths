
module.exports = (sequelize, DataTypes) => {
	const Steps = sequelize.define('Steps', {
		post_ID: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
      		allowNull: false
		},
		content: DataTypes.STRING('180'),
		gif_location: DataTypes.STRING,
		title: DataTypes.STRING('80'),
	});	

	return Steps;
}