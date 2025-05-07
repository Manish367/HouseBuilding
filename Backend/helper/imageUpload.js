export const imageUploadForUsers = (file, folder = "images") => {
    try {
        const fileExtentionName = file.name.split(".").pop()
        console.log(fileExtentionName, "asdasdasd")

        const randomString = Math.random().toString(36).substring(2)
        console.log(randomString, "randomString")

        const fileName = `${randomString}.${fileExtentionName}`
        console.log(fileName, "filename")
        console.log(folder, "folder")
        file.mv(`public/images/${folder}/${fileName}`)
        return fileName
    } catch (error) {
        
        console.log(error, "error")
    }
}