
module.exports = (sequelize, DataTypes) => {
	const Guide = sequelize.define('Guide', {
		guideID: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
      		allowNull: false
		},
		coverImageLocation: DataTypes.STRING,
		title: DataTypes.STRING('80'),
		subtitle: DataTypes.STRING('120'),
		summary: DataTypes.STRING,
	});

	Guide.associate = (models) => {
		models.Guide.belongsTo(models.Users);
		models.Guide.hasMany(models.Steps);
		models.Guide.hasMany(models.Categories);
		models.Guide.hasMany(models.Comments);
	}

	return Guide;

}