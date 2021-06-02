const { readFile, writeFile } = require('./file.repository.js')

exports.listUser = () => {
    return readFile();
}

exports.getById = (id) => {
    return readFile().find(r=> r.id == id);
}

exports.save = ({name, email, password}) => {
    const currentContent = readFile()
    const id = Math.random().toString(32).substr(2, 9);
    currentContent.push({ id, name, email, password })
    writeFile(currentContent);

    return id; 
}

exports.put = ({id, name, email, password}) => {
    const currentContent = readFile()
    const selectedItem = currentContent.findIndex((item) => item.id === id)
    
    const { id: cId, name: cName, email: cEmail, password: cPassword } = currentContent[selectedItem]
    
    const newObject = {
        id: cId,
        name: name ? name: cName,
        email: email ? email: cEmail,
        password: password ? password: cPassword,
    }
    
    currentContent[selectedItem] = newObject
    writeFile(currentContent)
    return newObject;
}

exports.delete = (id) => {
    const currentContent = readFile()
    const selectedItem = currentContent.findIndex((item) => item.id === id)
    currentContent.splice(selectedItem, 1)
    writeFile(currentContent);
    return true;
}