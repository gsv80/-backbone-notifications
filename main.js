'use strict';

let app = {};

let templates = [
    {title : "sender 3", notify: "text 2"},
    {title : "sender 1", notify: "text 1"},
    {title : "sender 3", notify: "text 3"},
    {title : "sender 3", notify: "text 4"},
    {title : "sender 2", notify: "text 5"},
    {title : "sender 2", notify: "text 6"},
    {title : "sender 1", notify: "text 7"},
    {title : "sender 1", notify: "text 8"},
    {title : "sender 4", notify: "text 9"},
    {title : "sender 5", notify: "text 10"},
];
  
notifies.create(templates[Math.floor(Math.random()*10)]);
notifies.create(templates[Math.floor(Math.random()*10)]);
for(let i=3000; i<=10000; i+=1000){
    setTimeout(() => { 
        notifies.add(templates[Math.floor(Math.random()*10)]);
        console.log("#### notify was added ", notifies.at(notifies.length-1), "#### notifies length: ", notifies.length)
    }, i);
    
}