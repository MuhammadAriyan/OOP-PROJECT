#!/usr/bin/env node


import chalk from "chalk";
import inquirer from "inquirer";
import choices from "inquirer/lib/objects/choices.js";


class people {
    constructor(public name:string,public age:number,public personality: "EXTROVERT" | "INTROVERT" | "UNKNOWN") {
    }
    getPersonality(){
     console.log(a)
     console.log(`HI ${this.name}, YOUR AGE IS ${this.age} & YOU ARE ${this.personality}`)
    }
}

const askForName = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"YOUR NAME :",
    validate(answer){
        if(!answer){
            return `PLEASE ENTER YOUR NAME:` 
        }
        return true
    }
})

const askForAge= await inquirer.prompt({
    type:"number",
    name:"age",
    message:"YOUR AGE :",
    validate(answer){
         if(isNaN(answer)){
        return `PLEASE ENTER YOUR NAME:`
        }
            return true
        }
})

let askForPersonality= await inquirer.prompt({
        type:"list",
        name:"Personality",
        message:"YOUR PERSONALITY :",
        choices:["INTROVERT" , "EXTROVERT" , "UNKNOWN"]
})

if(askForPersonality.Personality==="UNKNOWN"){
    let getPersonalityFromInquirer =  await inquirer.prompt({
        name:"ans",
        message:"DO YOU PREFER :",
        type:"list",
        choices:["WATCHING ANIME/MOVIES WITH FRIENDS & CLOSED ONES","WATCHING ANIME/MOVIES ALONE"]
    })
    if(getPersonalityFromInquirer.ans==="WATCHING ANIME/MOVIES WITH FRIENDS & CLOSED ONES"){
        askForPersonality.Personality = "EXTROVERT"
    }else{
        askForPersonality.Personality = "INTROVERT"
    }
    
}


let a = new people(askForName.name,askForAge.age,askForPersonality.Personality)
console.log(a.getPersonality())