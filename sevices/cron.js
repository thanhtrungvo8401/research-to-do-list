const CronJob = require('cron').CronJob;

module.exports = function (io) {
	const job = new CronJob(
		'0 * * * * *',
		function() {
			const HH = new Date().getUTCHours() + 7;
			const mm = new Date().getMinutes();

			const key = `${HH}${mm}`

			if (TO_DOS_OBJ[key]) {
				io.emit('server-action', { value: `to-dos/${TO_DOS_OBJ[key]}` })
			}

			io.emit('time', { value: `${HH}:${mm}` })
		},
		null,
		false,
		'Asia/Ho_Chi_Minh'
	);

    job.start();
}

