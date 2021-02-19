const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

const percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  on("task", percyHealthCheck)
}
