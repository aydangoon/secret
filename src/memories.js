const e = {
  happy: 'happy',
  sad: 'sad',
  angry: 'angry',
  annoyed: 'annoyed',
  default: 'default',
  shy: 'shy',
}

const memories = [
  {
    src: null,
    texts: [
      {
        emotion: e.happy,
        text: 'Hey Aalia! (press space)',
      },
      {
        emotion: e.happy,
        text: `I am Luna! I'll be a proxy for Aydan since I'm way cuter! Anways welcome to the digital scrapbook :)`,
      },
      {
        emotion: e.default,
        text: `What is this? Well its a digital scrapbook--a collection of some of my happiest memories with you.`,
      },
      {
        emotion: e.sad,
        text: `I know right now we're far apart.`,
      },
      {
        emotion: e.happy,
        text: `So I figured I'd make a cozy little site for us we can always visit when we miss each other.
        Plus I can keep adding memories to the digital scrapbook. That's kinda romantic right?`,
      },
      {
        emotion: e.happy,
        text: `Snuggle up inside, listen to My Dude with the pitter patter of rain outside :)`,
      },
      {
        emotion: e.default,
        text: `Anyways heres how it works: just pressing space will pull up a random happy, silly, embarrassing, etc. memory of us.`,
      },
      {
        emotion: e.default,
        text: `I'll share a little about the memory, then press space to see the next one!`,
      },
      {
        emotion: e.happy,
        text: `If I don't have a photo from the memory, I'll just share a cute photo of you!`,
      },
      {
        emotion: e.happy,
        text: `Sound good? Go ahead! Press space and try it!`,
      },
    ],
  },
  // roller skating
  {
    src: 'roller.jpg',
    texts: [
      {
        emotion: e.happy,
        text: `Ah! Rollerskating at the Rockefeller Center.`,
      },
      {
        emotion: e.shy,
        text: `I was so sure I was going to embarrase myself and you were going to be super cool.`,
      },
      {
        emotion: e.happy,
        text: `I was right about the you being super cool part! I didn't do so bad though... right?`,
      },
      {
        emotion: e.shy,
        text: `Anyways... I felt so happy that night. I loved dancing with you on the roller rink and 
        watching you gracefully skate around like you were born with skates on haha.`,
      },
      {
        emotion: e.happy,
        text: `Honestly one of the happiest nights of my life :)`,
      },
    ],
  },
  // ascher
  {
    src: 'asher.JPG',
    texts: [
      {
        emotion: e.happy,
        text: `Hiking the Asher!`,
      },
      {
        emotion: e.shy,
        text: `Not going to lie, I was so scared I was going to mess up something about this day trip.`,
      },
      {
        emotion: e.shy,
        text: `From the mountain driving, to finding the place, haha I was really worried.`,
      },
      {
        emotion: e.happy,
        text: `I was also worried you weren't going to like the hike... I couldn't have been more wrong :)`,
      },
      {
        emotion: e.happy,
        text: `The day was amazing. Fantastic weather, beautiful views... Oh and you were there of course!
        I felt so happy when we were relaxing up by the lake. I was catching fish and you were dipping your toes
        in the water.`,
      },
      {
        emotion: e.happy,
        text: `There's nobody I would have rather shared that experience with.`,
      },
      {
        emotion: e.angry,
        text: `Even though you made me ask that guy to charge up your phone grrr`,
      },
      {
        emotion: e.happy,
        text: `Just kidding! The photos were way better, I'm glad we charged it lol`,
      },
    ],
  },
  // first date
  {
    src: 'date.jpg',
    texts: [
      {
        emotion: e.happy,
        text: `Our first date!`,
      },
      {
        emotion: e.annoyed,
        text: `First of all I still can't believe I wore flip flops. Thats so embarrasing.`,
      },
      {
        emotion: e.default,
        text: `But anyways, I've already told you so much about the silly things I did. Like how
        I watched a video about how to be a good listener. Wanna know something even sillier?`,
      },
      {
        emotion: e.shy,
        text: `I saw outside ur door for like a good 5 minutes doing my eyebrows and eyelashes and practing
        what I was going to say when you opened the door...`,
      },
      {
        emotion: e.sad,
        text: `I was flip flopping between the cool "Hey whats up?" and the "Hey, you look pretty."`,
      },
      {
        emotion: e.happy,
        text: `I'm glad I went with the latter :)"`,
      },
      {
        emotion: e.happy,
        text: `Anyways you looked so so beautiful, you had no idea how nervous I was. I felt like I was 
        trying to hold on for my dear life.`,
      },
      {
        emotion: e.happy,
        text: `You're so beautiful when you're talking about something you love. I still remember your eyes 
        lighting up when I asked about roller derby. `,
      },
      {
        emotion: e.happy,
        text: `Best first date ever!`,
      },
    ],
  },
  // first day in zurich with you
  {
    src: 'zurich.jpg',
    texts: [
      {
        emotion: e.default,
        text: `First day in Zurich! Honestly I'm amazed we had the energy to explore the city
        after our long ass flight but we did.`,
      },
      {
        emotion: e.default,
        text: `You were so excited and inquisitive. It made exploring the city so so much fun.`,
      },
      {
        emotion: e.happy,
        text: `I remember all the silly little things, we'd be like "oh wanna go up that hill?" "Yeah! 
        Lets go up that hill."`,
      },
      {
        emotion: e.happy,
        text: `I'm so glad I got to show you that part of my heritage.`,
      },
    ],
  },
  // dancing at the carinval
  {
    src: 'ferris.jpg',
    texts: [
      {
        emotion: e.default,
        text: `This is a small one...`,
      },
      {
        emotion: e.happy,
        text: `Dancing at the Mt. Carmel carnival.`,
      },
      {
        emotion: e.happy,
        text: `When we were dancing together, I felt like the whole world slipped away. It was just you and me and the music.`,
      },
      {
        emotion: e.default,
        text: `Oh the ferris wheel was great to. Got some beautiful pictures of you.`,
      },
      {
        emotion: e.happy,
        text: `Although I guess that's not anything special since yknow you are beautiful.`,
      },
    ],
  },
  // ice skating
  {
    src: 'iceskating.jpg',
    texts: [
      {
        emotion: e.happy,
        text: `Ice Skating at Dilworth Park!`,
      },
      {
        emotion: e.default,
        text: `Haha you fell as soon as you got on the ice!`,
      },
      {
        emotion: e.happy,
        text: `Just kidding! Although it did make me feel better about my ice skating abilities
        when you starting going circles around me... literally.`,
      },
      {
        emotion: e.default,
        text: `The skating was lots of fun, but I really loved going around the little Christmas
        Village with you after.`,
      },
      {
        emotion: e.happy,
        text: `This silly little socks you were debating buying, walking around chatting about how gift-giving is pointless,
        it was a really awesome night.`,
      },
      {
        emotion: e.happy,
        text: `You're cheeks were a rosy red from the cold. You looked so cute.`,
      },
    ],
  },
  // holding your hand after pattaya
  {
    src: 'pat.JPG',
    texts: [
      {
        emotion: e.happy,
        text: `Haha another really small one...`,
      },
      {
        emotion: e.happy,
        text: `Holding you're hand for the first time after Pattaya.`,
      },
      {
        emotion: e.default,
        text: `I remember everything about this day...`,
      },
      {
        emotion: e.shy,
        text: `I came to pick up at Penn Closet, oh god I made awful small talk. Didn't I buy some stupid shirt?`,
      },
      {
        emotion: e.happy,
        text: `NO you tried to get me to buy that wack ass Zelda shirt! Actually it looked kinda sick...`,
      },
      {
        emotion: e.default,
        text: `Anyways...`,
      },
      {
        emotion: e.happy,
        text: `The dinner date was fun! I remember talking about dinosaurs and god and other silly stuff`,
      },
      {
        emotion: e.happy,
        text: `But I really loved after. When we were walking back and I just went for it and reached out and took your hand.
        I still remember youre smile.`,
      },
      {
        emotion: e.happy,
        text: `Not to tease but you lowkey started skipping afterwards... it was so sweet.`,
      },
    ],
  },
  // distrito
  {
    src: 'distrito.jpg',
    texts: [
      {
        emotion: e.sad,
        text: `Distrito...`,
      },
      {
        emotion: e.happy,
        text: `I'm just playing! This one is a super funny memory to look back on.`,
      },
      {
        emotion: e.sad,
        text: `In retrospect, we should not have tried to double team that pitcher, but we
        kinda enable each other sometimes don't we? Like with candy lol`,
      },
      {
        emotion: e.happy,
        text: `You were so funny drunk. I don't even remember what we were talking about but you
        go off with a bunch of stories and wave youre hands around and smile and it was so cute.`,
      },
      {
        emotion: e.angry,
        text: `Oh and you also broke two glasses.`,
      },
      {
        emotion: e.happy,
        text: `Thank god they're closing!`,
      },
    ],
  },
  // frankfurt airport
  {
    src: 'frankfurt.jpg',
    texts: [
      {
        emotion: e.happy,
        text: `Another small one: the Frankfurt Airport.`,
      },
      {
        emotion: e.sad,
        text: `I know running around desperately trying to make our connecting flight was stressful...`,
      },
      {
        emotion: e.happy,
        text: `But we made it! When we finally got on the plane and just held hands and relaxed it felt so nice.
        I was so glad to be there with you.`,
      },
    ],
  },
  // the night i made u laugh a lot
  {
    src: 'silly.jpg',
    texts: [
      {
        emotion: e.happy,
        text: `This one you might not remember... and It doesn't really have a title...`,
      },
      {
        emotion: e.default,
        text: `I'll just call it: "The Night I made you Laugh a Lot".`,
      },
      {
        emotion: e.default,
        text: `I don't remember exactly when this was, but one night we were lying on your bed and for some reason...`,
      },
      {
        emotion: e.happy,
        text: `Whatever stupid words came out of mouth made you laugh and laugh and laugh.`,
      },
      {
        emotion: e.happy,
        text: `I'd make ape sounds and you'd laugh.`,
      },
      {
        emotion: e.happy,
        text: `I'd do some stupid impression or poke you in random places and you'd laugh.`,
      },
      {
        emotion: e.happy,
        text: `I remember just holding each other in our arms you laughing uncontrollably. Such a blissful night.`,
      },
    ],
  },
  // u coming to watch our show
  {
    src: 'show.jpg',
    texts: [
      {
        emotion: e.default,
        text: `You coming to my shows. Thanks!`,
      },
      {
        emotion: e.sad,
        text: `I know Mask and Wig is cringe, but it meant a lot when you came to my show and supported me.
        Just knowing you're there to see my perform makes me happy.`,
      },
      {
        emotion: e.happy,
        text: `and the candy you gave me before was huge. fr.`,
      },
      {
        emotion: e.happy,
        text: `Oh, and you and Elena carrying the audience. You guys are real ones.`,
      },
      {
        emotion: e.sad,
        text: `I wish I could have come see your show.`,
      },
      {
        emotion: e.angry,
        text: `Next year I'm skipping rehearsals if I have to.`,
      },
    ],
  },
  // the way you say my name
  {
    src: 'video.png',
    texts: [
      {
        emotion: e.default,
        text: `This is one I'm 100% sure you don't remember...`,
      },
      {
        emotion: e.happy,
        text: `"The way you say my name is!"`,
      },
      {
        emotion: e.happy,
        text: `"This was over Thanksgiving break. I sent you some text like "am I pronouncing youre name right
        for my family" since I was letting them know I was seeing someone.`,
      },
      {
        emotion: e.sad,
        text: `Also fyi I told them you were my girlfriend even though it wasn't official lol please don't be mad at me
        boomers don't get it.`,
      },
      {
        emotion: e.default,
        text: `Anyways after I asked that expecting you to just tell me the pronounciation, you send me a video.`,
      },
      {
        emotion: e.happy,
        text: `"Ok, the way you say my name is... Aalia, Aalia, um... Hi my name is Aalia, haha now I feel like I'm 
        saying it weird."`,
      },
      {
        emotion: e.happy,
        text: `You were so beautiful and sweet... I watched that video at least 50 times, little embarrasing to admit.`,
      },
    ],
  },
  // favorites
  {
    src: 'favorites.jpg',
    texts: [
      {
        emotion: e.happy,
        text: `Another nother small one: Favorites!`,
      },
      {
        emotion: e.happy,
        text: `I remember we did this for the first time after the second date. I think I started with something cringe
        like what's your favorite ice cream.`,
      },
      {
        emotion: e.happy,
        text: `I remember just trading favorites back and forth until we fell asleep in each others arms.`,
      },
      {
        emotion: e.happy,
        text: `Best second date ever :)`,
      },
    ],
  },
  // u doing my makeup for wiggles
  {
    src: 'wiggles.jpg',
    texts: [
      {
        emotion: e.happy,
        text: `You doing my makeup for the Wiggles!`,
      },
      {
        emotion: e.default,
        text: `I remember actually a lot about that whole day. I tried to do a lot to impress you.`,
      },
      {
        emotion: e.happy,
        text: `First of all I thought you doing my makeup would make me hotter and that would help loool`,
      },
      {
        emotion: e.sad,
        text: `Sad I didn't fit into you're dress.`,
      },
      {
        emotion: e.happy,
        text: `That day was a lot of fun. I'm glad we were put together.`,
      },
    ],
  },
  {
    src: 'end.jpg',
    texts: [
      {
        emotion: e.happy,
        text: `That's all the memories I've put in this digital scrapbook so far!`,
      },
      {
        emotion: e.default,
        text: `I'll keep adding more whenever I get a chance.`,
      },
      {
        emotion: e.happy,
        text: `And when we make a new memory worth saving`,
      },
      {
        emotion: e.happy,
        text: `I love you!`,
      },
    ],
  },
]

export default memories
