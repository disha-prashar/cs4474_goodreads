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
    online: true
  },
  {
    id:1,
    img: author2,
    name: "Rick Riordan",
    online: false
  },
  {
    id:2,
    img: author3,
    name: "Sarah J Maas",
    online: true
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
    // {
    //   type: "msg",
    //   subtype: "doc",
    //   message: "Yes sure, here you go.",
    //   incoming: true,
    //   outgoing: false,
    // }
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
  'Rick Riordan': [
    {
    type: "msg",
    subtype: "img",
    message: "As requested...",
    incoming: true,
    outgoing: false,
    },
    {
      type: "msg",
      message: "Can you please send this in file format?",
      incoming: false,
      outgoing: true,
    },
  ],
  'Sarah J Maas': [
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