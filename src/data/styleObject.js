import Immutable from 'immutable'

const style = Immutable.Record({
    duration: '5s',
    timing: 'ease',
    delay: '1s',
    iterations: '1',
    direction: 'normal',
    fillMode: 'both',
    playState: 'running'
})

export default style

