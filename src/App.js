import React, { Component } from "react";
import logo from "./assets/clueless_black.svg";
import cher from "./assets/cher.jpg";
import "./App.css";

// blank on page load
class App extends Component {
  constructor() {
    super();
    this.state = {
      showResults: true
    };
  }

  // when you click the button generate the text

  onClickGenerate = () => {
    this.setState({ showResults: true });
  };

  // generate how many lines will be in a paragraph

  generatePageText = () => {
    const max = 4;
    const min = 2;

    let pageText = "";
    const numberLines = this.generateRandomNum(2, 4);

    for (let i = 0; i < numberLines; i++) {
      pageText += this.generateParagraph();
    }

    return pageText;
  };

  generateParagraph = () => {
    const lines = [
      "May I please remind you it does not say R.S.V.P. on the Statue of Liberty",
      "So okay, I don't want to be a traitor to my generation and all",
      "I don't get how guys dress today.",
      "It looks like they just fell out of bed and put on some baggy pants.",
      "and like, we're expected to swoon? I don't think so.",
      "Why should I listen to you, anyway?",
      "You're a virgin who can't drive.",
      "That was way harsh, Tai.",
      "It's like a painting, see? From far away, it's OK, but up close, it's a big old mess.",
      "Anything happens to my daughter, I got a .45 and a shovel,",
      "I doubt anybody would miss you.",
      "Your man Christian is a cake boy!",
      "He's a disco-dancing, Oscar Wilde-reading, Streisand ticket-holding friend of Dorothy,",
      "know what I'm saying?",
      "Uh-uh, no way, not even!",
      "Yes, even; he's gay!",
      "He does like to shop, Cher.",
      "And the boy can dress.",
      "Isn't my house classic? The columns date all the way back to 1972.",
      "If it's a concussion, you have to keep her conscious, okay? Ask her questions.",
      "What's seven times seven?",
      "Do you have any idea what you're talking about?",
      "No. Why, does it sound like I do?",
      "I could really use some sort of herbal refreshment.",
      "we don't have any tea, but we have Coke and stuff.",
      "No shit. You guys got Coke here?",
      "Well, yeah.",
      "Yeah, this is America.",
      "He does dress better than I do, what would I bring to the relationship?",
      "I think I remember Hamlet accurately.",
      "Well, I remember Mel Gibson accurately, and he didn't say that.",
      "You mean to tell me that you argued your way from a C+ to an A-?",
      "Totally based on my powers of persuasion, you proud?",
      "Honey, I couldn't be happier than if they were based on real grades.",
      "Woman, lend me fi' dollas.",
      "Murray, I have asked you repeatedly not to call me woman",
      "Excuse me, Ms. Dionne.",
      "Thank you.",
      "Okay, but, street slang is an increasingly valid form of expression.",
      "Most of the feminine pronouns do have mocking, but not necessarily in misogynistic undertones.",
      "I am totally butt crazy in love with Josh.",
      "Which reminds me, where's your report card?",
      "What do you mean, it's not ready yet?",
      "Well, some teachers are trying to low-ball me, Daddy.",
      "I know how you say, never accept a first offer, so I figure these grades are just a jumping off point to start negotiations.",
      "Look, I'm just curious",
      "How many hours a day do you spend grooming yourself?",
      "Some people are not lucky enough to be as naturally adorable as you are.",
      "Stop it, you're making me blush.",
      "Do you prefer fashion victim or ensembly challenged?",
      "He your gardener, I don't know why you no tell him.",
      "You get mad if anyone thinks you live below Sunset.",
      "I was surfing the crimson wave I had to haul ass to the ladies'.",
      "She's my friend because we both know what it's like for people to be jealous of us.",
      "You look like Pippi Longstocking.",
      "Well you look like Forrest Gump.",
      "Who's Pippi Longstocking?",
      "Someone Mel Gibson never played.",
      "Oh how fabulous.",
      "Getting Marky Mark to take time from his busy pants dropping schedule to plant trees.",
      "I have contributed many hours to helping two lonely teachers find romance.",
      "You know, If I ever saw you do anything that wasn't ninety percent selfish, I'd die of shock.",
      "I didn't even know you could get tickets without a license.",
      "You are such a brown-noser.",
      "Oh, and you are such a superficial space cadet. What makes you think you can get teachers to change your grades?",
      "If I'm too good for him, then how come I'm not with him?",
      "Duh. It's like a famous quote.",
      "Searching for a boy in high school is as useless as searching for meaning in a Pauly Shore movie.",
      "Wasn't my mom a total Betty?",
      "A freak accident during a routine liposuction.",
      "There was a major babe drought at my school.",
      "Everything I think and everything I do is wrong.",
      "and now Josh hated me.",
      "It all boiled down to one inevitable conclusion, I was just totally clueless.",
      "I mean, what was my problem?",
      "I really... Ooh, I wonder if they have that in my size.",
      "What does she want with Josh, anyway?",
      "he listens to complaint rock,",
      "he's not even cute... in a conventional way.",
      "I mean, he's just like this slug who hangs around the house all the time.",
      "I couldn't take him anywhere.",
      "Wait a second, what am I stressing about?",
      "OK, OK, so he's kind of a baldwin",
      "Then suddenly...",
      "Don't tell me those brain-dead lowlifes are calling me again.",
      "They _are_ your parents.",
      "So, what did you do in school today?",
      "Dude, what's wrong. You suffering from buyers remorse or something?",
      "Well, I broke in my purple clogs.",
      "Woman, why don't you be answerin' any of my pages?",
      "I hate when you call me woman.",
      "I felt impotent and out of control. Which I really, really hate.",
      "I had to find sanctuary in a place where I could gather my thoughts and regain my strength...",
      "What's with you, kid? You think the death of Sammy Davis left an opening in the Rat Pack?",
      "Where you been all weekend? What's up?",
      "But, speaking of vehicular sex, perhaps you can explain how this cheap K-Mart hair extension got into the backseat of your car.",
      "Well you can guess what happened next...",
      "I don't know where that came from.",
      "AS IF. I am only 16, and this is California, not Kentucky.",
      "I do not wear polyester hair, okay?",
      "Daddy, this is my friend Tai.",
      "Dee, I'm outty.",
      "Daddy, some people lost all their belongings. Don't you think that includes athletic equipment?",
      "Hey, in some parts of the universe, maybe not in contempo-casual, but in some parts, it's considered cool to know what's going on in the world.",
      "Sporadically. It means once in a while. Try to use it in a sentence.",
      "Thank you Josh. I SO need lessons from you on how to be cool. Tell me the part about Kenny G again?",
      "I'm the one who has to look at you! What am I gonna do with you now?",
      "right before the yearbook pictures? What am I gonna tell my grandchildren?",
      "Ms. Stoger. That machine is just a lawsuit waiting to happen.",
      "Cher, you're a virgin?",
      "You say that like it's a bad thing.",
      "Besides, the PC term is Hymenally challenged",
      "You wanna play games?",
      "I'm calling your mother!",
      "Wait! Don't call my mom! Don't call my mom...",
      "My birthday is in April and as someone older, can I please give you some advice?",
      "Well I'm making you as white as I can, Cher!",
      "Old people can be so sweet.",
      "Been shopping with Dr. Suess?",
      "Well at least I wouldn't skin a collie to make my back pack.",
      "Dee, when your allergies act up, take out your nose ring.",
      "Cher, I don't want to do this anymore.",
      "And my buns: they don't feel nothin' like steel.",
      "daddy's so good he gets $500 an hour to fight with people. But he fights with me for free because I'm his daughter.",
      "Looks like we're gonna have to make a cameo at the Val party.",
      "A licensed driver with nothing to do? Where would I find such a loser?",
      "So, this flannel thing. Is that a nod to the crispy Seattle weather, or are you just trying to stay warm in front of the refrigerator?",
      "Suddenly a dark cloud settled over first period... I got a C in debate?",
      "I expect you to walk through this door in twenty minutes.",
      "It might take longer than that Dad.",
      "Everywhere in L.A takes twenty minutes.",
      "She could be a farmer in those clothes.",
      "Ugh. Skateboards. That's like so five years ago.",
      "It's like that book I read in the 9th grade that said 'tis a far far better thing doing stuff for other people.",
      "Shit, you guys, I have never had straight friends before!",
      "We're going to have a NICE FAMILY MEAL.",
      "You think I'm a mentally challenged airhead?",
      "I never said that, I just think you two wouldn't mesh.",
      "Nice stems.",
      "Oh honey, you baked.",
      "As if!",
      "Whatever!",
      "Hey James Bond, In America we drive on the right side of the road!",
      "You try driving in platforms.",
      "Tardiness is not something you can do on your own. Many, many people contributed to my tardiness.",
      "I would like to thank my parents for never giving me a ride to school,",
      "the LA city bus driver who took a chance on an unknown kid.",
      "Cher's saving herself for Luke Perry.",
      "Dionne and her boyfriend Murray are in this dramatic relationship.",
      "I think they've seen that Ike and Tina Turner movie too many times.",
      "Until mankind is peaceful enough not to have violence on the news, there's no point in taking it out of shows that need it for entertainment value.",
      "Okay, so you're probably going, Is this like a Noxzema commercial or what?",
      "But seriously,",
      "I actually have a way normal life for a teenage girl.",
      "She could be a farmer in those clothes.",
      "Girlie, as far as you're concerned, I am the messiah of the DMV.",
      "Anything you can do to draw attention to your mouth is good.",
      "Sometimes you have to show a little skin.",
      "This reminds boys of being naked, and then they think of sex.",
      "Do you like Billie Holiday?",
      "Would you look at that body language?",
      "Legs crossed towards each other. That is an unequivocal sex invite.",
      "Isn't my house classic? The columns date all the way back to 1972.",
      "Hey man, the protective vibe. I dig.",
      "Oh look, Josh is dancing with Tai, he never dances.",
      "Miss Stoeger, I would just like to say that physical education in this school is a disgrace.",
      "Standing in line for forty minutes is hardly aerobically effective.",
      "I doubt I've worked off the calories in a stick of Carefree gum.",
      "I have direction...",
      "Yeah, towards the mall.",
      "Be seeing you.",
      "I hope not sporadically.",
      "Miss Stoeger, my plastic surgeon doesn't want me doing any activity where balls fly at my nose.",
      "Well there goes your social life.",
      "Hello? Was I the only one listening? I mean, I thought it reeked.",
      "I believe that was your designer imposter perfume.",
      "Want to practice parking?",
      "What's the point? Everywhere you go has valet.",
      "Would you call me selfish?",
      "not to your face.",
      "Hello? There was a stop sign.",
      "I totally paused.",
      "Howd you do? Well, let's see shall we?",
      "You can't park, you can't switch lanes, you can't make right hand turns",
      "you damaged private property and you almost killed someone. Off hand, I'd say you failed.",
      "Watch out for the bike rider!",
      "Oops, my bad!",
      "Lucy you know I don't speak Mexican.",
      "I'm not a Mexican!",
      "Whatever!",
      "He does dress better than I do. What would I bring to the relationship?",
      "I can't find my Cranberries CD, I gotta go to the quad before somebody snags it.",
      "I am totally butt crazy in love with Josh.",
      "I feel like such a heifer.",
      "I had two bowls of Special K, 3 pieces of turkey bacon, a handful of popcorn, 5 peanut butter M&M's and like 3 pieces of licorice.",
      "Christian said he'd call the next day, but in boy time that meant Thursday.",
      "You look like Pippi Longstocking.",
      "Are you bitches blind?",
      "No, she's a full-on Monet.",
      "It's like a painting, see? From far away, it's okay, but up close it's a big old mess.",
      "Are we going somewhere to make left turns?",
      "Do you drink?",
      "No, thanks, I'm cool.",
      "I'm not offering, I'm asking.",
      "You think I give alcohol to teenagers taking my daughter out.",
      "Do you know what time it is?",
      "A watch doesn't really go with this outfit daddy...",
      "Says who?.",
      "Calvin Klein!",
      "If anything happens to my daughter, I have forty-five and a shovel. I doubt anyone would miss you.",
      "You're a virgin who can't drive.",
      "That's Ren and Stimpy. They're way existential.",
      "As if!"
    ];

    let paragraph = "";

    // random number of lines with the constraint between min max set
    const numberLines = this.generateRandomNum(1, 2);

    for (let i = 0; i < numberLines; i++) {
      paragraph += lines[Math.floor(Math.random() * lines.length)] + " ";
    }

    return paragraph;
  };

  // generates random number that can be used elsewhere
  generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // outputs 3 or specififed amount of paragraphs
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="App-inner">
          {this.state.showResults && (
            <div class="Generated-text">
              <p>{this.generatePageText()}</p>
              <p>{this.generatePageText()}</p>
            </div>
          )}

          <button class="Go-button" onClick={this.onClickGenerate}>
            UGH, AS IF!
          </button>
        </div>
      </div>
    );
  }
}

export default App;
