/*********************************************************************************************
  Extracts words out of a string and puts them into a url query string with the
  following structure (limited to 3 words max):  'keyword1=foo&keyword2=bar&keyword3=foobar'
  and also encodes the user input with encodeURIComponent()
**********************************************************************************************/
export function stringToKeywords(str) {
    // Extract words into an array and limit to 3 words max. Result:  ['foo', 'bar, 'foobar']
    let wordsArray = str.split(' ').filter(word => word !== '')
    if (wordsArray.length > 3) { wordsArray.length = 3 }
    // Put words into an array of key=value pairs. Result:  ['keyword1=foo', 'keyword2=bar', 'keyword3=foobar' ]
    let queryArray = []
    wordsArray.forEach((value, index) => { queryArray.push(`keyword${index + 1}=${encodeURIComponent(value)}`) })
    // Join the keywords into a string with '&' as the separator. Result:  'keyword1=foo&keyword2=bar&keyword3=foobar'
    let queryString = ''
    if (queryArray.length) { queryString = queryArray.join('&') }
    return queryString
}

function getFirstNumWords(str, num) {
    return str.split(' ').filter(word => word !== '').slice(0, num).join(' ')
}

export function jsonToSearchInfo(json) {
    let searchInfo = ''
    if (json.year) { searchInfo += (json.year + ' ') }
    if (json.make) { searchInfo += (json.make + ' ') }
    if (json.model) { searchInfo += (json.model + ' ') }
    if (json.engine) { searchInfo += (json.engine + ' ') }
    if (json.condition) { searchInfo += (json.condition + ' ') }
    if (json.comments) { searchInfo += getFirstNumWords(json.comments, 3) }
    return searchInfo
}