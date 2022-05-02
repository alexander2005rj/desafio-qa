
const schema = {
    title: 'POST Create Employee schema v0.1',
    type: 'object',
    required: ['status', 'data', 'message'],
    properties: {
        status: {
            type: 'string',
            minLength: 5
        },
        data: {
            type: 'object',
            required: ['name', 'salary', 'age', 'id'],
            properties: {
                name: {
                    type: 'string',
                    minLength: 5
                },
                salary: {
                    type: 'integer',
                    minimum: 4
                },
                age: {
                    type: 'integer',
                    minimum: 2
                },
                id: {
                    type: 'integer',
                    minimum: 1
                } 
            }
        },
        message: {
            type: 'string',
            minLength: 5
        }
    }
}

module.exports = schema;