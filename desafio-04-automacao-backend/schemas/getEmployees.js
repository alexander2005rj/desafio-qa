
const schema = {
    title: 'GET All Employees schema v0.1',
    type: 'object',
    required: ['status', 'data', 'message'],
    properties: {
        status: {
            type: 'string',
            minLength: 5
        },
        data: {
            type: 'array',
            minItems: 1,
            uniqueItems: true,
            items: {
                type: 'object',
                required: ['id', 'employee_name', 'employee_salary', 'employee_age', 'profile_image'],
                properties: {
                    id: {
                        type: 'integer',
                        minimum: 1
                    },
                    employee_name: {
                        type: 'string',
                        minLength: 5
                    },
                    employee_salary: {
                        type: 'integer',
                        minimum: 1
                    },
                    employee_age: {
                        type: 'integer',
                        minimum: 1
                    },
                    profile_image: {
                        type: 'string',
                        minLength: 0
                    }
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