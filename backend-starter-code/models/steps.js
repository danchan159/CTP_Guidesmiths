
module.exports = (sequelize, DataTypes) => {
	const Step = sequelize.define('Step', {
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

	return Step;
}