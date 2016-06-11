var Buffer = require('../Buffer');
var Type = require('../Type');
var util = require('../util');

module.exports = function (dataView, font) {
  var table = new Buffer(dataView);

  var version = table.read(Type.USHORT);
  var data = {};

  data.gaspRange = table.readArray(util.struct({
    rangeMaxPPEM: Type.USHORT,
    rangeGaspBehavior: Type.USHORT
  }), table.read(Type.USHORT));

  return data;
};
