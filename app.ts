#!/usr/bin/env node

import inquirer from "inquirer";

async function bmicalc (){
const weightandHeight = await inquirer.prompt([   
    {
        type: "number",
        name: "weight",
        message: "Please enter your weight in KG?"
    },
    {
        type: "number",
        name: "height",
        message: "Please enter your height in feet?",
    }
]);
const{weight,height} = weightandHeight;
let heightInMeter = height * 0.3048;
let bmi = weight/(heightInMeter*heightInMeter);
console.log(`Your BMI is ${bmi}.`);

if(bmi < 18.5){
    console.log(`You are week!`)
}else if(bmi >= 18.5 && bmi < 25){
    console.log(`You are healthy!`)
}else if(bmi >= 25.0 && bmi < 30){
    console.log(`You are overweight!`)
}else if(bmi >= 30.0 && bmi < 35){
    console.log(`You are obese class 01!`)
}else if(bmi >= 35 && bmi < 40){
    console.log(`You are obese class 02!`)
}else if(bmi >= 40){
    console.log(`You are obese class 03 "severe" obesity!`)
}
}

async function startAgain() {
    do {
        await bmicalc();
        var restart = await inquirer
            .prompt({
                type: "list",
                name: "recoco",
                message: "Do you want to continue? Select 'Yes' to restart , 'No' to close:",
                choices: ['Yes', 'No']
            })
    }while(restart.recoco === 'Yes')
}
startAgain();