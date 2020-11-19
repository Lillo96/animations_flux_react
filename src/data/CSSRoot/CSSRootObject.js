import Immutable from 'immutable'

const CSSRootObject = Immutable.Record({
    sheet: null,
    rules: Immutable.OrderedMap()
})

const rule = Immutable.Record({
    index: -1,
    rule: ''
})

export { CSSRootObject, rule }
