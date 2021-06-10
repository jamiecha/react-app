const core = require('@actions/core')
const github = require('@actions/github')

try {
    // throw new Error("some error message")

    core.debug('Debug message')
    core.warning('Warning message')  // yellow
    core.error('Error message')  // red

    const name = core.getInput('who-to-greet')
    core.setSecret(name)  // name will be hidden

    console.log(`Hello ${name}`)

    const time = new Date()
    core.setOutput("time", time.toTimeString())

    core.startGroup('Logging github object')
    console.log(JSON.stringify(github, null, '\t'))
    core.endGroup()

    core.exportVariable('HELLO', 'hello')

} catch(error) {
    core.setFailed(error.message)
}