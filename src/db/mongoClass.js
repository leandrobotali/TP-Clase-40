import MyMongoClient from './mongoClient.js'

class mongoClass {
    constructor() {
        this.client = new MyMongoClient()
        this.client.connect()
    }
}

export default mongoClass