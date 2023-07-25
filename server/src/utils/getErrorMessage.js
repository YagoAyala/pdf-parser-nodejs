const getErrorMessage = (error) => {
    return error.message || JSON.stringify(error)
}

module.exports = getErrorMessage