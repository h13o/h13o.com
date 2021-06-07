const timeIconString = (min) => {
    const twelve = "🍱"
    const six = "☕"
    if (min >= 30) {
        return twelve.repeat((min - 1) / 12 + 1)
    }
    else {
        return six.repeat((min - 1) / 6 + 1)
    }


}

export default timeIconString