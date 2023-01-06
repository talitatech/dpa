module.exports = (plop) => {
    // create your generators here
    plop.setGenerator('component', {
        description: 'create the component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: "What is your component name?",
        }
        ], // array of inquirer prompts
        actions: [{
            type: 'add',
            path: '../src/components/{{pascalCase name}}/index.js',
            templateFile: 'templates/Component.js.hbs'
        },
        {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/styles.js',
            templateFile: 'templates/styles.js.hbs'
        },
        {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/stories.js',
            templateFile: 'templates/stories.js.hbs'
        }]
    });
};