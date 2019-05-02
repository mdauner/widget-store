const order = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    }
  })

  Order.associate = models => {
    Order.hasMany(models.OrderItem, { onDelete: 'CASCADE' })
  }

  return Order
}

export default order
