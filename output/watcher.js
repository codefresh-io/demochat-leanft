var filewatcher = require('filewatcher');

var watcher = filewatcher();


// ... or a directory

console.log(`watching on folder ${process.env.OUTPUT_DIR}`);

watcher.add(process.env.OUTPUT_DIR);

watcher.on('change', function(file, stat) {
  console.log('File modified: %s %j', file, stat);
  if (!stat) console.log('deleted');
});
