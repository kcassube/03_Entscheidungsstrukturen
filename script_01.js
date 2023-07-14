"use strict";
/** Anfang **/
/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment
// const ageJohn = 20;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/************ IF ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if(false) // Fake it, 'till you make it!
// if(isJohnOlder)
// if(ageJohn > ageMark)
// {
//     console.log("John ist älter."); 
// }

/************ IF - ELSE ************/
// mit Alternative
// entweder ja oder nein

// if(true)
// if (false) 
// if(isJohnOlder)
// if(ageJohn > ageMark)
// {
//     console.log("John ist älter."); 
// } 
// else 
// {
//     console.log("John ist jünger."); 
// }

/************ Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, gleich alt, jünger )

// 1. Test
// if(isJohnOlder)
// {
//     console.log("John ist älter."); 
// } 
// // 1....n Alternative
// else if(isJohnEqual)
// {
//     console.log("John ist gleich alt."); 
// }
// // wenn alle vorherigen Tests fehlschlagen ...
// else 
// {
//     console.log("John ist jünger."); 
// }

/****** Fallunterscheidung / SWITCH|CASE 1 ******/

// const firstName = "Jane";
// let job;

// job = prompt("welchen Beruf hast Du?")

// job = "driver";         // .. fährt TAXI! / UBER
// job = "diver";          // .. taucht im Rhein!
// job = "artist";         // .. malt ein Bild!
// job = "pilot";          // .. macht etwas anderes! --> default
// job = "teacher";        // .. unterrichtet!
// job = "instructor";     // .. unterrichtet!

// switch (job) 
// {
//     case "driver":
//         console.log("Jane fährt Taxi!");
//         break;
    
//     case "diver":
//         console.log("Jane taucht im Rhein");
//         break;

//         case "artist":
//             console.log("Jane malt ein Bild!");
//         break;




//     default:
//         console.log("Du hast keine Eingabe getätigt")
//         break;
// }