'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('shop_details', {
      shop_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, shop_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      shop_email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      shop_address1: {
        type: Sequelize.STRING,
      },
      shop_address2: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      pincode: {
        type: Sequelize.STRING,
      },
      owner_mobile_no: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      submitted_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },

      payment_status: {
        type: Sequelize.STRING,
      },
      last_payment_amount: {
        type: Sequelize.STRING,
      },

      remarks: {
        type: Sequelize.STRING,
      },
      shop_image: {
        type: Sequelize.STRING,
      },
      activated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      activated_by: {
        type: Sequelize.STRING,
      },
       last_payment_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('shop_details');
  }
};
