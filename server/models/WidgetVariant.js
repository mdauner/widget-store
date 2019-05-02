const widgetVariant = (sequelize, DataTypes) => {
  const WidgetVariant = sequelize.define('variant', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.ENUM('XS', 'SM', 'MD', 'LG', 'XL'),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  })

  WidgetVariant.associate = models => {
    WidgetVariant.belongsTo(models.Widget)
  }

  return WidgetVariant
}

export default widgetVariant
