"use strict";

var AWS = require('aws-sdk');

var _require = require('uuid'),
    uuidv4 = _require.v4;

var BUCKET_NAME = 'give-for-child';
var IAM_USER_KEY = 'AKIAJROEPUJ26JSNWGBQ';
var IAM_USER_SECRET = '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';
var url = 'https://' + BUCKET_NAME + '.s3.amazonaws.com/';

exports.uploadToS3 = function _callee(file) {
  var file_name, s3bucket, params;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          file_name = uuidv4() + '.jpg';
          s3bucket = new AWS.S3({
            accessKeyId: IAM_USER_KEY,
            secretAccessKey: IAM_USER_SECRET,
            Bucket: BUCKET_NAME
          });
          params = {
            Bucket: BUCKET_NAME,
            Key: file_name,
            Body: file.data,
            ACL: 'public-read'
          };
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            s3bucket.upload(params, function (err, data) {
              if (err) {
                throw err;
              } else {
                resolve(data.Location);
              }
            });
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};