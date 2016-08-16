var filewatcher = require('filewatcher');

var watcher = filewatcher();


// ... or a directory
watcher.add(process.env.OUTPUT_DIR);

watcher.on('change', function(file, stat) {
  console.log('File modified: %s', file);
  if (!stat) console.log('deleted');
});
