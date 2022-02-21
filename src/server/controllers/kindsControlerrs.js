const Kind = require("../../database/model/kinds");

const listKinds = async (req, res, next) => {
  try {
    const kinds = await Kind.find();
    res.status(200).json(kinds);
  } catch (error) {
    next(new Error("uwun't on list"));
  }
};

const getKind = async (req, res, next) => {
  try {
    const { id } = req.params;
    const kind = await Kind.findById(id);
    res.status(200).json(kind);
  } catch (error) {
    next(new Error("uwun't on list by id"));
  }
};

const createKind = async (req, res, next) => {
  try {
    const kind = req.body;
    const newKind = await Kind.create(kind);
    res.status(201).json(newKind);
  } catch (error) {
    next(new Error("uwun't on create"));
  }
};

const updateKind = async (req, res, next) => {
  try {
    const { id } = req.params;
    const kindToUpdate = req.body;
    const kindUpdated = await Kind.findByIdAndUpdate(id, kindToUpdate);
    res.status(201).json(kindUpdated);
  } catch (error) {
    next(new Error("uwun't on update"));
  }
};

const deleteKind = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Kind.findByIdAndDelete(id);
    res.status(200).json(deleted);
  } catch (error) {
    next(new Error("uwun't on delete"));
  }
};

module.exports = {
  listKinds,
  getKind,
  createKind,
  updateKind,
  deleteKind,
};
