export default {
    ping: async () => {
        const res = await fetch('http://10.0.2.2:8080/ping')
        return res.text()
    }
}
