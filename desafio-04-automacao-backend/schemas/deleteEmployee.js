
const schema = {
    title: 'DELETE Employee schema v0.1',
    type: 'object',
    required: ['status', 'data', 'message'],
    properties: {
        status: {
            type: 'string',
            minLength: 5
        },
        data: {
            type: 'string',
            minLength: 1
        },
        message: {
            type: 'string',
            minLength: 5
        }
    }
}

module.exports = schema;