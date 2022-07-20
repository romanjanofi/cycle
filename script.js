var now = new Date();
hour = now.getHours();
minute = now.getMinutes();

var names = ['Adam', 'Huane', 'Sebastian', 'Peter', 'Mike', 'Richard', 'Xavier', 'Victor', 'Elijah', 'Tyler']
var lastNames = ['Mota', "O'Neal", 'Vendeling', 'Kim', 'Chazali', 'Shaw', 'Daulerio', 'Ramos', 'Chang']
var randomName = names[Math.floor(Math.random() * 9)];
var randomLastName = lastNames[Math.floor(Math.random() * 8)];
var myName = "randomNames";
var myLastName = "randomLastNames";
var message = "";

if (hour >= 6) {
   message = 'Good morning,'
}
else if (hour >= 12) {
   message = 'Good afternoon,'
}
else if (hour >= 18) {
   message = 'Good evening,'
};

var greeting = [message, randomName, randomLastName + '!'].join(" ");

alert(greeting);
