
module.exports = (sequelize, DataTypes) => {
	const Guide = sequelize.define('Guide', {
		guide_ID: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
      		allowNull: false
		},
		user_ID: DataTypes.STRING,
		cat_ID: DataTypes.STRING,
		steps_ID: DataTypes.STRING,
	});

	Guide.associate = (models) => {
		models.Guide.belongsTo(models.Users);
		models.Guide.hasMany(models.Steps);
		models.Guide.hasMany(models.Categories);
	}

	return Guide;

}