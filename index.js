var readlineSync=require('readline-sync');
var score=0;
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    console.log("You are correct");
    score++;
    
  }
  else{
    console.log("You are wrong");
  }
  console.log("Score: "+score);
}

var question1={
  question:"What is the name of Ninja Hattori's Dog? a.Shero b. Shishimanu ",
  answer:"b"
}
var question2={
  question:"Which of the following is not a friend of Nobita. a.Suniyo b.Shizuka c.Amara ",
  answer:"c"
}
var question3={
  question:"Who is the villian in Powerpuff girls? a.MojoJojo b.Dr.Claw ",
  answer:"a"
}
var question4={
  question:"Which one of the following was the first pokemon of Ash? a.Bulbasaur b. Charmander c.Pikachu ",
  answer:"c"
}
var question5={
  question:"Which Pokemon was the first capture of Ash Ketchum? a.Krabby b.Pikachu c.Caterpie d.Squirtle ",
  answer:"c"
}
var question6={
  question:"What was the color of Cassie from Dragon Tales? a. Blue b. Pink c. Yellow ",
  answer:"b"
}

var qa=[question1,question2,question3,question4,question5,question6];

for(var i=0; i<qa.length; i++){
  var currentQuestion=qa[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("Woohooo!! Your Total score is: "+score);