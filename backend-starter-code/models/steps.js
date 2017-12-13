
module.exports = (sequelize, DataTypes) => {
	const Steps = sequelize.define('Steps', {
		postID: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
      		allowNull: false
		},
		content: DataTypes.TEXT,
		gifLocation: DataTypes.STRING,
		title: DataTypes.STRING('80'),
		stepNumber: DataTypes.STRING,
	});	

	return Steps;
}