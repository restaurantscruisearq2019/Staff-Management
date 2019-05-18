const express = require('express');
const mongoose = require('mongoose');

const Manager = mongoose.model("managers");


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
    const idManager = req.params.id;

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
    const idManager = req.params.id;

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
    Manager.findById(req.params.id)
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
};
