import jwt from 'jsonwebtoken'

const tokenGenerate = async (id) => {
    try {
        const token = jwt.sign({ id: id }, process.env.secretKey)
        const varify = jwt.verify(token, process.env.secretKey)

        return { token, varify }


    } catch (error) {
        console.log(error)
    }
}

export default tokenGenerate

