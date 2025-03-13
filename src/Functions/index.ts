// If typoe is not mentioned sometimes it can return unefinded so chage some settigs in the tsconfig to show that error.


// function showAge(age:number,deathAge?:number):number {
//     return deathAge - age;
// }

function showAge(age:number,deathAge=99):number {
    return deathAge - age;
}

showAge(21);

// In this case the thing is that when we dont pass 100 it will be undefined cauing isues and wont compile, instead simply we can give a default value

//Key take away are always annoatate function return types
//play withe the tscoinfig setttings  =>> noUnusedLocals ,noUnusedParameters and noImplicitReturns