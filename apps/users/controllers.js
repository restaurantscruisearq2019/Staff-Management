'use strict';
const express = require('express'),
  router = express.Router(),
  Manager = require('./models').Manager,
  Employee = require('./models').Employee;

router.route('/')

    .get(function (req, res) {
        Manager.find()
        .then(function (managers) {
            res.locals.managers = managers;
            return res.render('managers/managers.html');
        });
    });

    .get(function (req, res) {
        Employee.find()
        .then(function (employees) {
            res.locals.employees = employees;
            return res.render('employees/employees.html');
        });
    });