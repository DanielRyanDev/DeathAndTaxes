let button = document.getElementById("button");
let inputBox = document.getElementById("inputText");
let para = document.getElementById("Example");

// button.addEventListener('click', () => {
//     para.innerHTML = inputBox.value;
// })

let direction = "";
let response = "";
const playerObj = {
    inventory: [],
}

// button.addEventListener('click', () => {
//     response = input.value;
// })

para.innerHTML = `After a long day of tilling the fields, you clamber back to your tiny cottage - weather-beaten and weather-worn (you - not the cottage. But also the cottage). It's cold this time of year, you think, and your concerned that your crop won't survive. You've got mouths to feed and the Lord of the Shire wants his shillings. You close the rickety wooden door of your humble abode and take a seat by the fire. Do you:\nA: Take a nap\nB: Keep yourself company by whistling a jaunty tune\nC: Eat some mud`;

function day1(){
    response = inputBox.value;
    if (response === "A" || response === "a") {
        para.innerHTML = "You lay down on a bed of hay. You fall into a deep sleep almost instantly. All those hours of work - you need it. Whilst asleep, you have a vivid dream. You dream of a mirage; veiled with fog. In the distance are three figures. You can just about make out these silhouettes. One is quite clearly a woman, decked in white with flowing blonde hair. The other is a man. You seem to recognise him. He appears to be wounded. At this side stands another man - a burly man whose clothes look as if they are made of burlap. Which of these mysterious characters do you approach?\nA: Lady in White\nB: Wounded Man";}   
    button.setAttribute("onClick", "dream()");
    if (response === "B" || response === "b") {
        para.innerHTML = "Stoking the fire, you keep yourself busy by whilstling the time away. You whilst every tune you know - all two of them. You notice that, as you whistle, the fire becomes warmer; the more you whistle, the warmer it becomes. You continue filling the airwaves and stoking the flames when an almighty bang knocks you backwards off your stool. Was that an explosion? The fire in the hearth still roars amongst a sea of smoke and ash. Out of this grey mist appears a figure. 'What's it, culver. I'm Stan.' Stan, you ask, the figure replies 'Yes! The writer made a typo' What? 'It is I! The Devil! Beelzebub! You summon me with your melodies' Uh-oh. Well, bollocks, you've done it now. This is it. Bon voyage, au revoir; farewell children! Farewell my love! Farewell sweet-sweet mud! The hooved figure interrupts your amatuer dramatics 'Oh, stop being dram, would yer? Stone me, you're giving me a headache! Look, I ain't gonna take yer to the pits - not yet, anyway. 'Ere, take a look at this' From his hooded cape, he produces a small flute made of pewter ('custom made, that is!'); inspects it and places it on his lap. 'Look, am a gamblin' man and you're a God-fearin' one - maybe we can come to a compromise?' Doing deals with the Devil is largely frowned upon in Christendom but you don't feel as if you've got much say in this matter, 'Okay? So, here's the deal: I'm going to play this flute and you're gonna sing, yeah? Impress me, I'll let you go - simple as. If not, I'll have you digest your own insides, okay? Cushty.' He gets comfortable, putting the flute to his lips he says 'get singin' bordar!' What do you sing about?\nA: Mud \nB: Cows and Trees \nC: The Devil himself"
        button.setAttribute("onClick", "devil()");
    }
}

function dream() {
    response = inputBox.value;
    if (response === "A" || response === "a") {
        para.innerHTML = "You approach the Lady in White. You are amazed by her beauty. Her grace is intoxicating. You try to muster the courage to ask if she would share some mud with you when, in a angelic timbre, the Lady speaks: 'Good morrow, Lambkin. What is thy bidding?' What say you?\nA: Who are you?\nB: Would you like some mud?\nC: *Say nothing and gawp like a simpleton*";    
        button.setAttribute("onClick", "whiteLady()");
    } else if (response === "B" || response === "b") {
        para.innerHTML = "The fog fades and blidning light eminates from behind the wounded man. His side is bloodstained as is his fringe, the wind, not unlike a flute, whistles an angelic tune through the wounds in his hands. It's him. He smiles as you approach and beckons you to speak. What do you say?\nA: Jesus Christ!\nB: Oh my God, flute-hands!\nC: Some mud, m'lord?";
        button.setAttribute("onClick", "woundedMan()");
    } else if (response === "C" || "c"){
        para.innerHTML = "asdf";
    }
    inputBox.value = "";
}

function whiteLady() {
    response = inputBox.value;
    if (response === "A" || response === "a") {
        para.innerHTML = "'Do you not recognise me, Lambkin?' she smiles, 'I am Alice. The Lady of Tropes.' You're confused. You have no idea what a trope is. You're a feudal famer, your mind was not made to think of such concepts. No, your mind is filled with thoughts of dread; of plague, illness, and death. You spends your days deep in anxious thoughts of not being able to survive and support your young (but ridiculously large) family. These are the things you were born to think about. These and mud - lovely mud. She continues 'My form has been used throughout the ages. Every great scribe, spotty teenager, and Fantasy RPG developer on this mortal plain has sought inspiration from my divine stature...' the Lady in White continues but your mind wanders. Suddenly, a great flash of white - you're awake. It seems the visitor in your dreams has left you a token of their affection. Clasped in your hand is a generic brooch";
        playerObj.inventory.push["Generic Brooch"]
        button.setAttribute("onClick", "day2()");
    } else if (response === "B" || response === "b") {
        para.innerHTML = "She smiles and, shaking her head, politely declines. Clasping your hand in hers, she looks upon you still smiling. You feel small. Inhaling through her nose, she tilts her head back. A great flash of light blinds your vision and when you are able to see again, you're staring up at your shabby, decrepit ceiling. You're awake! Your hand, the very same that was clasped in that fair maiden's hands, feels warm. You open your palm to reveal - it can't be. The blood rushes and you begin to feel dizzy. You thought it was just a rumour - just a myth; an old wives tale! But no, there it is - in your hand. This could be the making of you. You put it away and vow not to tell another living soul. When the time is right, all shall bare witness to this mighty relic...";
        playerObj.inventory.push["Mud o' the Lake"]
    } else if (response === "C" || response === "c") {
        para.innerHTML = "You stand there like an utter pillock; like a Pug at a countertop, mouth open; catching flies. The Lady in White chuckles. You feel a sense of accomplishment. You never make women laugh. The only time you ever made a woman laugh was your wife on your marriage night and, much like your children, she was not laughing with you. You wake up sweaty."
    }
    inputBox.value = "";
}

function woundedMan() {
    response = inputBox.value; 
    if (response === "A" || response === "a") {
        para.innerHTML = "'I'll pretend I didn't hear that' he scowls. Quite clearly your blasphemous tounge upsets Our Lord so you try to apologise but he simply sighs and takes a seat on the ground next to you. 'It's fine. I've just been so down lately. Do you have any idea how hard it is, being the son of God?' This doesn't sound like the man you hear about every Sunday from the pulpit, you think... 'I mean, every few seconds some trumped-up mandrake mymmerkin on their knees 'Oh, please Jesus make me rich' 'Oh, please Jesus give me muscles' 'Oh, please me Jesus save my child from typhoid and leprosy' - Jesus this and Jesus that. I mean, what about me? What about what I want? Who do I pray to, huh?' It's safe to say at this point, you're weirded out. Not wanting to be on the receiving end of the Creator's wrath, you get up and begin to leave. As you walk into the distance, you can still hear the man from Nazareth's complaints '..and everywhere I go - eeeeeeverywhere I go, people everywhere, you know what they wear? Yeah, little statues of me dying? Oh, you better believe it! Other people, they get postcards of golden retrievers in Christmas jumpers but when you're Jesus the Christ? Nooooooo...' You wake up confused and decide to shake off your fever-dream with a bowl of mud.";
        button.setAttribute("onClick", "day2()");
    } else if (response === "B" || response === "b") {
        para.innerHTML = "'Flute-hands?' he ponders 'That gives me an idea' He turns and smiles 'Thank you, my Child. I shall not forget this. You shall have a seat with my Father. Go forth, my disciple' Quite simply, you're befuddled. What? Father? Who? Damn it man, I wanna hear some flute-hands! Your dissapoint is washed away as you awake. It was all just a dream. However, as you raise your head, you see some parchment lying on your chest. You sit up and read the note: 'Thanks man, when I get the band together, I'll be in touch. See you soon... Manager. Signed, y.' It may be becuase you've just woken up but you don't really know. Why would someone call you Manager? Who is y? Why can you understand the letter when you can't even read? You put it away safely and tell nobody.";
        playerObj.inventory.push["Management contract"]
    } else if (response === "C" || response === "c") {
        para.innerHTML = "You offer the Good Lord half of your mud. His eyes well up and grinning he says 'Lowly farmer, you would share your nutritious mud with me? Sit, my child.' You take a seat on the ground opposite the man himself. He continues 'I've not been welcomed into the homes of many, y'know. Strange, isn't it?' There was a melancholic air to his tone 'No, only the few - Martha and Mary, Zaccheus, yourself. No, most bet on me appearing in their toast - take this, my son' He stuck his hand out. As you grasp, a blinding light passes over you. Suddenly, you are back in your home; upright in your bed. Only be looking into your palm, you know the man you met was who he said he was. You have been given a great responsibility - better keep it safe until it's time..."
        playerObj.inventory.push["Relic of the Holy Mud of St. Atticus"]
    }
    inputBox.value = "";
}

function devil() {
    response = inputBox.value;
    if (response === "A" || response === "a") {
        para.innerHTML = "You dedicate your song to your greatest pleasure in life: mud. To the Devil's dulcet fluting your sing: 'Mud is warm! Mud is nice! Mud's so good, I'll eat it twice!' You give the performance of your life. To end, you leap and land with one knee bent in an epic display of showmanship - you'd have made a great court jester in another life. As you raise your head you see the lifeless eyes of Stan staring back at you... in astonishment. 'That was... the... stupidest thing I've ever seen!', uh-oh, 'What was all that about it? Mud? What's so good about Mud? Are you stupid' You're not sure but you feel like you're being slightly patronised. The Devil turns to his assistant; they whisper and seem to come to an agreement - 'Yeah, this fella is ten sheets to the wind'. You don't quite understand but you're certain this is a compliment. They continue whispering then begin to giggle 'Okay, okay, I'll tell him'. The lifeless eyes meet yours once more 'Okay' sighs the Devil 'I don't really understand what just happened and I won't pretend that I do. You're quite mad - are you afflicted with the dancing mania, mucker?' what? 'No matter. Listen, am feeling generous so I'll let you live, 'kay? I couldn't kill someone with the intellect of a pug - even Stan has standards, you know?' what? The Devil gets up from his stool and heads back into the hearth. Before disappearing, however, he turns to you for the final time. 'Oi, Culver? Catch!' and catch you do! In your palm you hold a pewter mound, 'See that? That's Mud o' Pewter, that is - very special that. One of a kind. It'll come in handy some day - go thy way Culver!' and just like that - poof! Gone. But in your hands, a gift from the prince of darkness himself - Mud o' Pewter. Best put it somewhere safe if it's gonna come in handy, someday..."; 
            playerObj.inventory.push["Mud o' Pewter"]   
        // button.setAttribute("onClick", "whiteLady()");
    } else if (response === "B" || response === "b") {
        para.innerHTML = "The Devil's a man of taste, you think to yourself, what he'll enjoy is a right-ol' ballad - a proper chest-beater! You sing a song of the land - of hills, and grass; of cows, and clouds. You sing about how lovely all the trees are and how your love has not returned. You don't understand any of it - but it definitely sounds good. By the time you've finished, you don't even realise that the King of the Underworld's playing had stopped long ago - you don't even realise he's dissapeeared completely. You see a long grey stick near the Hearth - it's the Devil's flute! He must've forgotten it when he left in a rush. Why he left in a rush, you're not sure but you're certain he enjoyed the performance.";
        playerObj.inventory.push["Stan's Flute"]
        // button.setAttribute("onClick", "woundedMan()");
    } else if (response === "C" || "c"){
        para.innerHTML = "It may cost you your soul but you sing an Ode to Stan - the Devil himself. You sing of his grace, his excellence; his dashing good lucks and endless charms. You sing of how excellently he maim and mangles those under his care and of his excellent fashion sense. Giving it all you got, you thank the Devil at the end and give him a round of applause. You look up to see him and his servant looking back... grimly... 'No one likes a kiss-arse, Culver. C'mon M, let's dive.' and with that, both Stan and his servant M disappeared in a poof of smoke. Bit rude really...";
    }
    inputBox.value = "";
}




// playerObj.inventory.utility[0];
// playerObj.inventory.misc.torch

// for (let i = 0; i < playerObj.inventory.utility.length; i++){
//     if (playerObj.inventory.utility[i] === "Bread") {
//         HP++;
//         playerObj.inventory.utility[i];
//         break;
//     }
// }

