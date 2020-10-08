module.exports = async function (context, req) {
    context.log('Get tasks of the planner');
    tasks= [
        {   description: "hacer tareas", 
            name: "Juan Mora",            
            status: "Ready",
            dueDate: "01-10-2020"
            },
            {description: "hacer de comer", 
            name: "Juan Mora",            
            status: "Done",
            dueDate: "01-01-2020"
            }
     ]
    const task = req.body;
    tasks.push(task)
    const responseMessage = { response: {tasks}};
    context.log(responseMessage);

    context.res = {
        status: 200,
        body: responseMessage
    };
}