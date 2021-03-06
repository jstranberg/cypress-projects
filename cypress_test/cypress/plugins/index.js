/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
//module.exports = (on, config) => {
// `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config
//}

const wp = require('@cypress/webpack-batteries-included-preprocessor')

module.exports = (on, config) => {
  const options = wp.defaultOptions

  options.webpackOptions.module.rules.push({
    parser: { amd: false },
  })

  on('file:preprocessor', wp(options))
}

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on("file:preprocessor", cucumber())
}

const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
const percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  on("task", percyHealthCheck)
}
