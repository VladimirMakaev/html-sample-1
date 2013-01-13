
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express 123456' });
};

exports.test = function(req, res){
  res.render('test', {title: 'Express test', quotes: ['Quote 2343','Quote 2', 'Quote 3', 'Quote 4', 'Quote 5', 'Quote 6', 'Now on Azure']});
};
