module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const cardTask = req.body;
    // Implement the response
    const responseMessage = { response: {description: cardTask.description, name: cardTask.name, status: cardTask.status, dueDate: cardTask.dueDate}};

    context.res = {
        status: 201,
        body: responseMessage
    };
}