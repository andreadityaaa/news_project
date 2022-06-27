'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("News", {
      fields: ['tagsId'],
      type: 'foreign key',
      name: 'fkey_tagsId',
      references: {
        table: 'Tags',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("News", "fkey_tagsId")
  }
};
