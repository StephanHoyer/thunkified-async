var async = require('async');
var thunk = require('thunkify');

var methods = [
  'each',
  'eachSeries',
  'eachLimit',
  'map',
  'mapSeries',
  'mapLimit',
  'filter',
  'filterSeries',
  'reject',
  'rejectSeries',
  'reduce',
  'reduceRight',
  'detect',
  'detectSeries',
  'sortBy',
  'some',
  'every',
  'concat',
  'concatSeries',
  'series',
  'parallel',
  'parallelLimit',
  'whilst',
  'doWhilst',
  'until',
  'doUntil',
  'forever',
  'waterfall',
  'applyEach',
  'applyEachSeries',
  'auto',
  'retry',
  'times',
  'timesSeries'
];

// wrap
methods.forEach(function(name){
  if (!async[name]) return;
  exports[name] = thunk(async[name]);
});
