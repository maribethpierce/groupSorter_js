/*
This is a group sorter/pair generator. It takes individuals, adds them to a group, and assigns pairs randomly. Depending on how you want to use it, you can add an email for a 'Person' and then send out an email letting each person know who they've been assigned to. I built a version of this a couple of years ago in Ruby/Rails and had it send out the emails. It was my family's version of drawing names for holiday gift-giving (thus the pair assignments - gifter/recipient). I decided to build it again in JS for this code sample. This version isn't hooked up to the rest of an app, so you'd just be able to use this one to assign pairs for a classroom activity or the like.

There is a ready-made set of people and a group included in this so that it's easy to see it run in the console.

Run shuffle(g); to shuffle the group and set up the pairs.

Run report(g); (after setting up the pairs) to see how the groups have been assigned.
*/

// create a Person object
function Person(name) {
    this.name = name;
}

// create a Group object
function Group(name) {
  this.name = name;
  this.members = [];
  this.pairs = [];
  this.names = [];
  this.add_member = function(person) {
    this.members.push(person);
  }
}

// create a Pair object
function Pair() {
  this.gifter = undefined,
  this.recipient = undefined
}

// mix the group up and assign pairs ()
function shuffle(group, bool = false) {
  let set = [];
  if (group.members.length < 2) {
    return
  } else {
    set = group.members.sort(function(a,b) {
      return 0.5 - Math.random();
    })
  }
  if(bool = true) {
    group.pairs = pair(group, set);
  }
}

function pair(group, set) {
  let pairs = [];

  for (var i = 0; i < set.length; i++) {
    let pair = new Pair();
    if (i < set.length-1){
      pair.gifter = set[i];
      pair.recipient = set[1+i];
    } else {
      pair.gifter = set[i];
      pair.recipient = set[0];
    }
    pairs.push(pair);
  }
  return pairs;
}

function report(group) {
  let pairs = group.pairs;
  for (i=0;i<pairs.length;i++) {
    let gif = pairs[i].gifter.name;
    let rec = pairs[i].recipient.name;
    console.log("Pair"+(i+1)+"-  gifter: " + gif + ", and recipient: " + rec + ".");
  }
}

let p = new Person("mb");
let r = new Person("Remi");
let f = new Person("Finn");
let c = new Person("Crusoe");
let m = new Person("Marian");
let g = new Group("we");

g.add_member(p);
g.add_member(r);
g.add_member(f);
g.add_member(c);
g.add_member(m);

// shuffle(g);
// report(g);
