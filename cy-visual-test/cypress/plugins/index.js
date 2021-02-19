const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

const percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  on("task", percyHealthCheck)
}

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on("file:preprocessor", cucumber())
}
