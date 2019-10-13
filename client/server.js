export default {
    ping: async () => {
        const res = await fetch('http://10.0.2.2:8080/ping')
        return res.text()
    },
    getEvents: async () => {
        
        const eta1 = new Date()
        const eta2 = new Date()

        eta1.setHours(20)
        eta2.setHours(21)
        
        return [
            {
                name: "my first event",
                location: "somewhere",
                eta: eta1
            },
            {
                name: "my second event",
                location: "somewhere else",
                eta: eta2
            }
        ]
    },
    getFriends: async () => {
        const eta1 = new Date()

        eta1.setHours(20)

        return [
            {
                name: "my friends name",
                home: "somewhere",
                eta: eta1
            }
        ]
    }
}
