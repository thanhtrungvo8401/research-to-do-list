const CronJob = require('cron').CronJob;

const job = new CronJob(
	'0 * * * * *',
	function() {
		console.log('You will see this message every minutes', Date());
	},
	null,
	false,
	'Asia/Ho_Chi_Minh'
);

module.exports = function () {
    job.start();
}

