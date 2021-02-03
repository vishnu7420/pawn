'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
   
    await queryInterface.addColumn('customer_details', 'customer_added_at', {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      after: 'customer_created_by',

    })

    await queryInterface.addColumn('customer_details', 'customer_image', {
      allowNull: true,
      type: Sequelize.STRING,
      after: 'customer_added_at',

    })


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('customer_details', 'customer_image')
  }
};
