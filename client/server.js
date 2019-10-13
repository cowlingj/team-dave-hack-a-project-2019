export default {
    ping: async () => {
        const res = await fetch('http://10.0.2.2:8080/ping')

        if (res.status !== 200) {
            throw new Error()
        }

        return res.text()
    },
    createEvent: async (name, location) => {

        const res = await fetch('http://10.0.2.2:8080/event', {
            method: 'POST',
            body: JSON.stringify({ name, location })
        })

        if (res.status !== 200) {
            throw new Error()
        }
    },
    getEvents: async () => {      
        return [
            {
                name: "My first event",
                location: "Somewhere"
            },
            {
                name: "My second event",
                location: "Somewhere else"
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
