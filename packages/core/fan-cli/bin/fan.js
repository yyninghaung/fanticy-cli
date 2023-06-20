#!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const figlet = require('figlet');
console.log(figlet.textSync('Fanticy', {
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));
const initAction = () => {
    inquirer.prompt([{
        type: 'input',
        message: '请输入项目名称：',
        name: 'name'
    }]).then((answers) => {
        console.log('项目名为：', answers.name);
    });
};
program.version(require('../package.json').version);
program.command('init').description('创建项目').action(initAction);
program.parse(process.argv);