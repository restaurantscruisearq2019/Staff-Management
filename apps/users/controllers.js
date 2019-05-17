'use strict';
const express = require('express');
const mongoose = require('mongoose');

const Manager = mongoose.model("managers");
const Employee = mongoose.model("employees");

module.exports = app => {
  app.get("/managers", (req, res) => {
    const query = req.query;
    Manager.find(query)
      .then(managers => {
        res.json({
          confirmation: "success",
          data: managers
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

  app.get("/managers/add", (req, res) => {
    const data = req.query;
    new Manager(data)
      .save()
      .then(manager => {
        res.json({
          confirmation: "success",
          data: manager
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

  app.get("/managers/update/:id", (req, res) => {
    const updateDetails = req.query;
    const idManager = req.params.idManager;

    Manager.findByIdAndUpdate(idManager, updateDetails, { new: true })
      .then(manager => {
        res.json({
          confirmation: "success",
          data: manager
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

  app.get("/managers/delete/:id", (req, res) => {
    const idManager = req.params.idManager;

    Manager.findByIdAndDelete(idManager)
      .then(manager => {
        res.json({
          confirmation: "success",
          data: manager
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

  app.get("/managers/:id", (req, res) => {
    Manager.findById(req.params.idManager)
      .then(manager => {
        res.json({
          confirmation: "success",
          data: manager
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

  app.get("/employees", (req, res) => {
    const query = req.query;
    Employee.find(query)
      .then(employees => {
        res.json({
          confirmation: "success",
          data: employees
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

  app.get("/employees/add", (req, res) => {
    const data = req.query;
    new Employee(data)
      .save()
      .then(employee => {
        res.json({
          confirmation: "success",
          data: employee
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

  app.get("/employees/update/:id", (req, res) => {
    const updateDetails = req.query;
    const idEmployee = req.params.idEmployee;

    Employee.findByIdAndUpdate(idEmployee, updateDetails, { new: true })
      .then(employee => {
        res.json({
          confirmation: "success",
          data: employee
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

  app.get("/employees/delete/:id", (req, res) => {
    const idEmployee = req.params.idEmployee;

    Employee.findByIdAndDelete(idEmployee)
      .then(employee => {
        res.json({
          confirmation: "success",
          data: employee
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

  app.get("/employees/:id", (req, res) => {
    Employee.findById(req.params.idEmployee)
      .then(employee => {
        res.json({
          confirmation: "success",
          data: manager
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

};
