const fetch = require('node-fetch')
const HOST = 'https://www.metaweather.com/api'

exports.handler = async function (event, context) {
  const { query } = event.queryStringParameters || {}
  const destination = HOST + '/location/search/?query=' + query
  const rs = await (await fetch(destination)).json()
  return {
    isBase64Encoded: false,
    statusCode: 200,
    body: JSON.stringify(rs),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  }
}
