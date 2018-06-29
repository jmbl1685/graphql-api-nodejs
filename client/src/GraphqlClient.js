import axios from 'axios'

const server_url = 'http://192.168.1.66:3000/graphql'

const graphqlClient = async (body) => {
    const response = await axios({
        url: server_url,
        method: 'post',
        data: {
            query: body
        }
    })
    return response.data
}

export default graphqlClient