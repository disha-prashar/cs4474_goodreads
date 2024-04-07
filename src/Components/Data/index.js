import { faker } from "@faker-js/faker";
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
} from "phosphor-react";
import audrey from '../../Components/Chat/Images/audrey.jpeg';
import author1 from '../../Components/Chat/Images/colleen_hoover.jpeg';
import julie from '../../Components/Chat/Images/julie.jpeg';
import author2 from '../../Components/Chat/Images/rick_riordan.jpeg';
import author3  from '../../Components/Chat/Images/sarah_jmaas.jpeg';


const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Logout",
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

const CallLogs = [
  {
    id:0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: false,
    incoming: true,
  },
  {
    id:1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: true,
    incoming: true,
  },
  {
    id:2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: false,
    incoming: false,
  },
  {
    id:3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: false,
    incoming: true,
  },
  {
    id:4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: true,
    incoming: true,
  }
];

const AuthorUpdatesList = [
  {
    id:0,
    img: author1,
    name: "Colleen Hoover",
    online: true,
    msg: "March 29th: Sneak peek into my latest novel!"
  },
  {
    id:1,
    img: author2,
    name: "Rick Riordan",
    online: false,
    msg: "🌟 Exciting News! 🌟 See you at Camp Half-Blood!"
  },
  {
    id:2,
    img: author3,
    name: "Sarah J Maas",
    online: true,
    msg: "📚 Exciting Announcement! 📚"
  }
];

const MembersList = [
  {
    id:3,
    img: audrey,
    name: "Audrey Miller",
    online: true,
    msg: "Hi, did you finish that page yet?"
  },
  {
    id:4,
    img: julie,
    name: "Julia Sims",
    online: true,
    msg: "Can you call me later? I..."
  }
];

const SampleChatDMs = {
  'Audrey Miller': [
    {
      type: "msg",
      message: "Hi! 👋🏻, How are you doing? Did you finish the reading?",
      incoming: true,
      outgoing: false,
    },
    {
      type: "divider",
      text: "Today",
    },
    {
      type: "msg",
      message: "Not bad, you?",
      incoming: false,
      outgoing: true,
    },
    {
      type: "msg",
      subtype: "img",
      message: "Did finish this today though",
      img: faker.image.abstract(),
      incoming: true,
      outgoing: false,
    },
    {
      type: "msg",
      message: "Nice!",
      incoming: true,
      outgoing: false,
    }
  ],
  'Julia Sims': [
    {
    type: "msg",
    subtype: "img",
    message: "As requested...",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
    },
    {
      type: "msg",
      message: "Can you please send this in file format?",
      incoming: false,
      outgoing: true,
    },
    {
      type: "msg",
      subtype: "doc",
      message: "Yes sure, here you go.",
      incoming: true,
      outgoing: false,
    }
  // ],
  
  // {
  //   type: "msg",
  //   subtype: "link",
  //   preview: faker.image.cats(),
  //   message: "Yep, I can also do that",
  //   incoming: true,
  //   outgoing: false,
  // },
  // {
  //   type: "msg",
  //   subtype: "reply",
  //   reply: "This is a reply",
  //   message: "Yep, I can also do that",
  //   incoming: false,
  //   outgoing: true,
  // },
]};

const SampleChatBookClubs = {
  
};

const SampleChatAuthorUpdates = {
  'Colleen Hoover': [
    {
      type: "divider",
      text: "Today",
    },
    {
      type: "msg",
      message: `Hi dear readers!\n\nI’d like to personally thank each of you for following me on my journey of writing. I am releasing a new romance thriller coming out in a few months and would love to offer you all a special sneak peek!\n\nI’ve attached the front cover to this message along with the book’s preface! I hope you all enjoy and are as excited as I am!\n\nThank you all!`,
      incoming: true,
      outgoing: false,
    }
  ],
  'Rick Riordan': [
    {
      type: "msg",
      message: `      
      
      Dear Demigods and Mortal Friends,
      
      I am thrilled to announce that the beloved adventures of Percy Jackson are coming to life on the small screen in an all-new TV series! Get ready to dive back into the world of Camp Half-Blood, where heroes are born and legends are made.
      
      Join Percy, Annabeth, Grover, and the rest of the gang as they embark on epic quests, battle fearsome monsters, and uncover the secrets of the gods. From the shores of Long Island to the depths of the Underworld, every moment will be packed with action, humor, and heart.
      
      This series is a dream come true for me, and I can't wait to share it with you all. Whether you're a longtime fan of the books or new to the world of Percy Jackson, there's something magical in store for everyone.
      
      So grab your sword, strap on your armor, and get ready for the adventure of a lifetime. The demigods are back, and they're ready to take on the world like never before!
      
      See you at Camp Half-Blood!
      
      Best Wishes,
      Rick Riordan 🌊⚡🏹`,
      incoming: true,
      outgoing: false,
    }
  ],
  'Sarah J Maas': [
    {
      type: "msg",
      message: `

      Dear Readers and Fantasy Enthusiasts,
      
      I am thrilled to unveil a brand new adventure that will transport you to a world of magic, intrigue, and romance like never before. Introducing my latest series, filled with breathtaking landscapes, unforgettable characters, and twists and turns that will keep you on the edge of your seat.
      
      Join me on a journey through kingdoms and courts, where alliances are forged and destinies are entwined. From the glittering halls of power to the shadowy depths of ancient forests, each page will immerse you in a world of wonder and danger.
      
      Prepare to meet fierce heroines, dashing heroes, and villains whose secrets will leave you guessing until the very end. With each chapter, you'll uncover new mysteries and uncover the true meaning of courage, loyalty, and love.
      
      I poured my heart and soul into this series, and I can't wait for you to experience it for yourself. Whether you're a longtime fan or new to my work, I promise an adventure you'll never forget.
      
      So grab your copy, settle in with a cup of tea, and lose yourself in a world where anything is possible. The journey begins now.
      
      Happy reading!
      
      Warmest regards,
      Sarah J. Maas 📖🌟🏰`,
      incoming: true,
      outgoing: false,
    }
  ]
};

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

const SHARED_LINKS = [
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  }
]

const SHARED_DOCS = [
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
 
]

export {
  AuthorUpdatesList,
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  SampleChatAuthorUpdates,
  SampleChatDMs,
  SampleChatBookClubs,
  Message_options,
  SHARED_DOCS,
  SHARED_LINKS,
  CallLogs,
  MembersList
};