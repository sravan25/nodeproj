var emitter = require('events').EventEmitter;
var e = new emitter();

e.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});
e.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});

function LoopProcessor(num) {

    for (var i = 1; i <= num; i++) {
        e.emit('BeforeProcess', i);
        console.log('Processing number:' + i);
        e.emit('AfterProcess', i);
    }

}
LoopProcessor(3);


