#! /usr/local/bin/node
var quote = require('./extract-name')
var transformer = require('console-in-transformer')

transformer(quote, '\n')