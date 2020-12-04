import Immutable from 'immutable'

const style = Immutable.Record({
    duration: '1s',
    timing: 'ease',
    delay: '1s',
    iterations: '1',
    direction: 'normal',
    fillMode: 'both',
    playState: 'running'
})

export default style
