var remote = new PouchDB('http://localhost:5984/blah');
var db  = new PouchDB('can-events');

function doSync() {
  console.log('syncing now... ');
  db.sync(remote, {live: true})
  .on('error', function(err) {
    console.log(err);
    // Retry connection every 5 seconds
    setTimeout(doSync, 5000);
  });
}

doSync();

export default EmberPouch.Adapter.extend({
  db: db
});
