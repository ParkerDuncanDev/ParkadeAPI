const CronJob = requires('node-cron')

exports.sudokuUpdateJob = () => {
    const sudokuUpdateJobFunction = CronJob.schedule('0 0 * * *', () => {
        console.log('updating Sudoku!')
    })

    sudokuUpdateJobFunction.start()
}