const CronJob = require('cron').CronJob;

module.exports = function (io) {
	const job = new CronJob(
		'0 * * * * *',
		function() {
			io.emit('server-action', { value: Date() })
			console.log('You will see this message every minutes', Date());
		},
		null,
		false,
		'Asia/Ho_Chi_Minh'
	);

    job.start();
}

