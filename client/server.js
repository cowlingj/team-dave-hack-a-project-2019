export default {
    ping: async () => {
        const res = await fetch('http://10.0.2.2:8080/ping')
        return res.text()
    },
    myEvents: async () => {
        return [
            {
                name: "my first event",
                location: "somewhere",
                eta: new Date().setHours(20)
            },
            {
                name: "my second event",
                location: "somewhere else",
                eta: new Date().setHours(21)
            }
        ]
    }
}
