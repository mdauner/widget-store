const widget = (sequelize, DataTypes) => {
  const Widget = sequelize.define('widget', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  })

  Widget.associate = models => {
    Widget.hasMany(models.WidgetVariant, { onDelete: 'CASCADE' })
  }

  return Widget
}

export default widget
