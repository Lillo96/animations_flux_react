function getAnimation(id, valueDefault,style) {
    const animation = {}

    if (style) {
        console.log("DENTRO STYLE ESISTE")
        animation.animationID = style.id
        animation.animationOnCheck = style.onCheck
    } else {
        console.log("DENTRO STYLE NON ESISTE")
        const { onCheck } = valueDefault
        animation.animationID = id
        animation.animationOnCheck =  onCheck|| 'false'
    }

    return animation
}

export default getAnimation
