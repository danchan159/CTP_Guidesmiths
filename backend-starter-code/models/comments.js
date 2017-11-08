
module.exports = (sequelize, DataTypes) => {
	const Comments = sequelize.define('Comments', {
		comment_ID: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
      		allowNull: false
		},
		comment_Text: DataTypes.STRING,
	});

	return Comments;

}