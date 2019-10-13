
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
        try {
            const res = await fetch('http://10.0.2.2:8080/user/events')
        
            if (res.status != 200) {
                throw new Error()
            }

            return await res.json()
        } catch(e) {
            return [
                {
                    id: 0,
                    name: "My first event",
                    location: "Somewhere"
                },
                {
                    id: 1,
                    name: "My second event",
                    location: "Somewhere else"
                }
            ]
        }
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
    },
    leave: async (id, eta) => {

        const res = await fetch(`http://10.0.2.2:8080/event/${id}/leaving`, {
            method: 'PUT',
            body: JSON.stringify({ eta })
        })

        if (res.status !== 200) {
            throw new Error()
        }
    },
    poll: async (id) => {

        let interval
        let finishWithJson
        let finishedJson = new Promise((resolve, _reject) => {
            finishWithJson = resolve
        })

        interval = setInterval(() => {
            const username = "George"
            fetch(`http://10.0.2.2:8080/event/${id}/expired?username=${username}`)
                .then(res => res.json())
                .then(json => {
                    if (json.length > 0) {
                        clearInterval(interval)
                        finishWithJson(json)
                    } 
                })        
        }, 10000)

        return finishedJson
    }
}
