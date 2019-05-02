const orderItem = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('item', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  })

  OrderItem.associate = models => {
    OrderItem.belongsTo(models.Order)
    OrderItem.belongsTo(models.WidgetVariant)
  }

  return OrderItem
}

export default orderItem
