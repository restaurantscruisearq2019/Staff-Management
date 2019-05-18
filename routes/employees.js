const express = require('express');
const mongoose = require('mongoose');

const Employee = mongoose.model("employees");

module.exports = app => {

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
    const idEmployee = req.params.id;

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
    const idEmployee = req.params.id;

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
    Employee.findById(req.params.id)
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