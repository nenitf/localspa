import { createServer, Model } from 'miragejs'

export function init() {
  createServer({
    models: {
      reminder: Model
    },

    seeds(server) {
      server.db.loadData({
        reminders: [
          { id: 1, text: "Walk the dog", done: false },
          { id: 2, text: "Take out the trash", done: true },
          { id: 3, text: "Work out", done: false },
        ]
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/reminders', () => {
        return this.schema.all('reminder')
      })

      /*
      this.post('/reminders', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        return schema.create('reminder', data)
      })
      */

      this.put('/reminders/:id', (schema, request) => {
        const id = request.params.id
        const attReminder = JSON.parse(request.requestBody)
        return schema.reminders.findBy({ id }).update(attReminder)
      })
    }
  })
}
