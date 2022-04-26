const catchError = (err, req, res, next) => {
  const finalError = err

  if (err.name === 'ValidationError') {
    const errors = err.errors
    const keys = Object.keys(errors)
    const errorObj = {}
    keys.map((key) => {
      errorObj[key] = errors[key].message
    })
    finalError.message = errorObj
    finalError.statusCode = 400
  }

  if (err.kind === 'ObjectId') {
    finalError.message = 'Invalid Id'
    finalError.statusCode = 400
  }

  res.status(finalError.statusCode || 500).json({
    success: false,
    message: finalError.message || 'Internal Error'
  })
}

module.exports = catchError