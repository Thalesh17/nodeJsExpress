const fs = require('fs')

exports.writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./bdjson/users.json', updateFile, 'utf-8')
}

exports.readFile = () => {
    const content = fs.readFileSync('./bdjson/users.json', 'utf-8')
    return JSON.parse(content)
}
