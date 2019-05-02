import Sequelize from 'sequelize'

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres'
})

const models = {
  Widget: sequelize.import('./Widget'),
  WidgetVariant: sequelize.import('./WidgetVariant'),
  Order: sequelize.import('./Order'),
  OrderItem: sequelize.import('./OrderItem')
}

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

export { sequelize }

export default models
