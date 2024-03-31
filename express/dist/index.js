var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// index.ts
var import_express = __toESM(require("express"));
var import_express2 = __toESM(require("@openpanel/express"));
var PORT = Number(process.env.PORT || 3e3);
var app = (0, import_express.default)();
app.use(
  (0, import_express2.default)({
    clientId: "ef38d50e-7d8e-4041-9c62-46d4c3b3bb01",
    clientSecret: "f0607566-791a-4b20-b42e-cadafcced4e0",
    trackRequest: (url) => {
      return true;
    }
  })
);
app.get("/", (req, res) => {
  res.json({
    message: "Home"
  });
});
app.get("/foo", (req, res) => {
  req.op.event("foo");
  res.json({
    message: "Foo"
  });
});
app.get("/bar/:id", (req, res) => {
  req.op.event("bar", {
    params: req.params
  });
  res.json({
    message: "Foo",
    params: req.params
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
