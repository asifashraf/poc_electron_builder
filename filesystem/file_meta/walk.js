var walk = require('walkdir');

(async () => {
    // async with path callback

walk('../../', function(path, stat) {
    console.log('found: ', path);
  });
  
  // use async emitter to capture more events
  
  var emitter = walk('../');
  
  emitter.on('file', function(filename, stat) {
    console.log('file from emitter: ', filename);
  });
  
  
  // sync with callback
  
  walk.sync('../', function(path, stat) {
    console.log('found sync:', path);
  });
  
  // sync just need paths
  
  var paths = walk.sync('../');
  console.log('found paths sync: ', paths);
  
  // async await/promise!
  let result = await walk.async('../',{return_object:true})
  // result['path'] = {statObject}
})();