import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const data = [
  {
    name: "DFS",
    details: [
      {
        title: "Background",
        description:
          "AnimViewer3D is a personal project focused on loading any FBX file into a game engine to improve future development and workflow flexibility. The project explores how to construct static meshes and skeletal meshes from scratch, implements an animation system capable of sampling data over time, and sets up a level showcasing different animation types such as idle, walk, and run. The project also dives deeper into transformation matrices and keyframes.",
        imgSrc: "dfs/preview.png",
      },
      {
        title: "Gameplay",
        description: "",
        imgSrc: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWlkdHFwd29wbnVhY2owbjZiaDE2ZWJmeHUwd2d4ZHk3aTU5dnBhcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wQclSvQQKtObPx9UKY/giphy.gif",
      },
      {
        title: "Role",
        description: "Solo Developer",
      },
      {
        title: "Programming Languages",
        description: (
          <ul className="list-disc ml-10">
            <li>C++</li>
          </ul>
        ),
      },
      {
        title: "FBX File Loading",
        description:
          "Implemented support for loading any FBX file into the engine, enabling flexible asset import for future development workflows.",
        imgSrc: "",
      },
      {
        title: "Static Mesh & Skeletal Mesh",
        description:
          "Built the pipeline for constructing both static meshes and skeletal meshes from scratch, establishing the foundation for rendering and animation.",
        imgSrc: "",
      },
      {
        title: "Animation System",
        description:
          "Implemented an animation system that samples keyframe data over time, supporting smooth playback of skeletal animations driven by transformation matrices.",
        imgSrc: "",
      },
      {
        title: "Animation Types",
        description:
          "Set up a level demonstrating different animation states including idle, walk, and run.",
        imgSrc: "",
      },
    ],
  },
  {
    name: "TGP1",
    details: [
      {
        title: "Background",
        description:
          "Kill the Makers is a 2D platformer developed in Unity. Players navigate through levels, defeat enemies, interact with switches, and respawn at checkpoints. The game features responsive controls, enemy AI, an energy system, and a polished UI.",
      },
      {
        title: "Role",
        description: "Game Developer",
      },
      {
        title: "Programming Languages",
        description: (
          <ul className="list-disc ml-10">
            <li>C#</li>
          </ul>
        ),
      },
      {
        title: "Development Environment",
        description: (
          <ul className="list-disc ml-10">
            <li>Unity</li>
            <li>Perforce</li>
          </ul>
        ),
      },
      {
        title: "Checkpoint System",
        description:
          "When the player passes the checkpoint, it turns green. After that, no matter how the player dies, they will respawn at this checkpoint.",
        imgSrc: "tgp1/YShi_TGP1_KilltheMakers_Screenshot_02.png",
      },
      {
        title: "Enemy Avoidance Using Raycast",
        description:
          "A raycast is used to check whether the player is near an enemy. If so, a fleeing animation is played, and the character runs away in the opposite direction.",
        imgSrc: "tgp1/YShi_TGP1_KilltheMakers_Screenshot_08.png",
      },
      {
        title: "Switch Interaction Using Collision Box",
        description:
          "A collision box is used to check whether the player is within the switch's range. If so, the player can activate or deactivate the switch.",
        imgSrc: "tgp1/YShi_TGP1_KilltheMakers_Screenshot_06.png",
      },
      {
        title: "Enemy Player Detection and Chase Behavior",
        description:
          "A raycast is used to detect the player's position. If the player is within the enemy's detectable range, the enemy will run toward the player.",
        imgSrc: "tgp1/YShi_TGP1_KilltheMakers_Screenshot_05.png",
      },
      {
        title: "Enemy Attack Logic",
        description:
          "When the enemy reaches the player and enters attack range, it performs an attack. The attack is triggered only when both the chase condition and distance requirement are met, preventing the enemy from attacking from an unrealistic distance.",
        imgSrc: "tgp1/YShi_TGP1_KilltheMakers_Screenshot_04.png",
      },
      {
        title: "Energy System",
        description:
          "When the player kills an enemy, the system restores a portion of the player's energy. This rewards aggressive gameplay and encourages engaging with enemies rather than avoiding them.",
        imgSrc: "tgp1/YShi_TGP1_KilltheMakers_Screenshot_03.png",
      },
      {
        title: "Double Jump and Dash",
        description:
          "Implemented a double jump mechanic that allows the player to jump a second time while in the air. Also implemented a dash ability that lets the player quickly move a short distance in a chosen direction.",
        imgSrc: "tgp1/YShi_TGP1_KilltheMakers_Screenshot_07.png",
      },
      {
        title: "UI System",
        description:
          "Created a pause menu that lets the player temporarily halt the game. When opened, the menu provides options to Resume, return to the Main Menu, or Quit.",
        imgSrc: "tgp1/YShi_TGP1_KilltheMakers_Screenshot_01.png",
      },
      {
        title: "Personal Roles and Responsibilities",
        description: (
          <ul className="list-disc ml-10 space-y-1">
            <li>Checkpoint system — implemented player respawn points, allowing checkpoints to activate and update the respawn location.</li>
            <li>Enemy AI behaviors — implemented enemy detection, chase, fleeing, and attack mechanics using raycasts and distance checks.</li>
            <li>Player controller — developed double jump and dash mechanics, including input handling and Rigidbody movement.</li>
            <li>Energy system — managed energy consumption for abilities and energy restoration upon defeating enemies.</li>
            <li>UI system — created a simple UI to display player energy and menus.</li>
            <li>Pause menu — implemented a functional pause menu that disables player input and allows Resume, back to main menu, and Quit options.</li>
          </ul>
        ),
      },
    ],
  },
  {
    name: "TGP2",
    details: [
      {
        title: "Background",
        description:
          "Hamsterballin is an arcade racing game where players race as hamsters rolling inside balls through creative tracks. The game features competitive multiplayer racing with a grand prix mode and dynamic leaderboards.",
      },
      {
        title: "Role",
        description: "Game Developer",
      },
      {
        title: "Programming Languages",
        description: (
          <ul className="list-disc ml-10">
            <li>Unreal Engine</li>
          </ul>
        ),
      },
      {
        title: "Development Environment",
        description: (
          <ul className="list-disc ml-10">
            <li>Unreal Engine</li>
            <li>Perforce</li>
          </ul>
        ),
      },
      {
        title: "Player Position Tracking",
        description:
          "Real-time race position tracking that calculates each player's standing throughout the race based on progress along the track.",
        imgSrc: "tgp2/temp..png",
      },
      {
        title: "Grand Prix Mode",
        description:
          "A grand prix system that manages multi-race series, accumulates points across races, and determines the overall series winner.",
        imgSrc: "tgp2/temp..png",
      },
      {
        title: "Leaderboard UI",
        description:
          "An in-race leaderboard UI that displays live player standings and updates dynamically as positions change during the race.",
        imgSrc: "tgp2/temp..png",
      },
      {
        title: "Roles and Responsibilities",
        description: (
          <ul className="list-disc ml-10 space-y-1">
            <li>Race position system — real-time player ranking logic based on track progress.</li>
            <li>Grand Prix mode — multi-race series flow, point accumulation, and series result tracking.</li>
            <li>Race UI — leaderboard and race-related UI elements that reflect live race state.</li>
          </ul>
        ),
      },
    ],
  },

  {
    name: "library-management-system",
    details: [
      {
        title: "Background",
        description:
          "Developed a comprehensive Library Management System to manage library operations efficiently. The system includes features for user authentication, book transactions, inventory management, and fee processing. I chose to submit this interactive software prototype because it effectively showcases my development skills in both front-end and back-end technologies.",
      },
      {
        title: "Role",
        description:
          "Responsible for full stack development and user experience design.",
      },
      {
        title: "Programming Languages",
        description: (
          <ul className="list-disc ml-10">
            <li>JavaScript/TypeScript</li>
          </ul>
        ),
      },
      {
        title: "Development Environment",
        description: (
          <ul className="list-disc ml-10">
            <li>Front-End: Next.js, React.js, NextAuth.js, Tailwind CSS</li>
            <li>Back-End: Next.js, Node.js</li>
            <li>Database: MongoDB, Mongoose.js</li>
          </ul>
        ),
      },

      {
        title: "Home Page",
        description: "",
        imgSrc: "lms/home.png",
      },
      {
        title: "Signup",
        description:
          "Users can sign up using email or log in with their Gmail or GitHub account.",
        imgSrc: "lms/signup.png",
      },
      {
        title: "Login",
        description:
          "Users can use email or login with their Gmail or GitHub account.",
        imgSrc: "lms/login.png",
      },
      {
        title: "Book List",
        description: "Display list of books.",
        imgSrc: "lms/book-list.png",
      },
      {
        title: "Book Detail",
        description:
          " Display basic book information, check stock availability, and borrow books.",
        imgSrc: "lms/book-detail.png",
      },

      {
        title: "Book Shelf",
        description: "Display a list of books that the user has borrowed.",
        imgSrc: "lms/book-shelf.png",
      },
      {
        title: "OTP",
        description:
          "The user needs to input the OTP that the system sent to their email.",
        imgSrc: "lms/otp.png",
      },
      {
        title: "Reset Password",
        description:
          "The user inputs a new password and confirms the new password to reset their password.",
        imgSrc: "lms/reset-password.png",
      },
      {
        title: "Settings",
        description: "Display the user's settings.",
        imgSrc: "lms/settings.png",
      },
      {
        title: "Payment",
        description: "The user makes a payment to cover the late fee.",
        imgSrc: "lms/payment.png",
      },
      {
        title: "Website Link",
        description: (
          <Link
            className="underline"
            to="https://library-management-system-teal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://library-management-system-teal.vercel.app/
          </Link>
        ),
      },
    ],
  },
  {
    name: "twitter-clone",
    details: [
      {
        title: "Background",
        description:
          "This project is a full-stack web application that replicates the core functionalities of Twitter, including user authentication, posting tweets, following users, and real-time updates. The goal of this clone is to understand how large-scale social platforms manage data, handle user interactions, and ensure performance across a growing user base.",
      },
      {
        title: "Role",
        description:
          "Responsible for full stack development and optimized user experience design to deliver seamless, high-performance applications.",
      },
      {
        title: "Programming Languages",
        description: (
          <ul className="list-disc ml-10">
            <li>Javascript/Typescript</li>
            <li>SQL</li>
          </ul>
        ),
      },
      {
        title: "Development Environment",
        description: (
          <ul className="list-disc ml-10">
            <li>Front-End: React.js, Tailwind CSS</li>
            <li>Back-End: Node.js</li>
            <li>Database: Supabase, Postgresql</li>
          </ul>
        ),
      },
      {
        title: "Home Page",
        description: "",
        imgSrc: "tc/home.png",
      },
      {
        title: "Sign in",
        description:
          "The user can sign in with their Google or GitHub account, or alternatively, use their own username and password for login.",
        imgSrc: "tc/signin.png",
      },
      {
        title: "Sign up",
        description: "Users can register an account using email.",
        imgSrc: "tc/signup.png",
      },
      {
        title: "Tweets",
        description:
          "The Tweets page displays all the tweets posted by the people you follow.",
        imgSrc: "tc/tweets.png",
      },
      {
        title: "Comments",
        description:
          "You can view the comments on a specific tweet or leave a comment on it.",
        imgSrc: "tc/comments.png",
      },
      {
        title: "Profile",
        description:
          "You can click on a user's profile picture to view their information and the tweets they have posted.",
        imgSrc: "tc/profile.png",
      },
      {
        title: "Replies",
        description: "You can view all of your replies.",
        imgSrc: "tc/replies.png",
      },
      {
        title: "Likes",
        description: "Users can view all the tweets they have liked.",
        imgSrc: "tc/likes.png",
      },
      {
        title: "Following",
        description: "View all the users you are following.",
        imgSrc: "tc/following.png",
      },
      {
        title: "Followers",
        description: "Show all your followers.",
        imgSrc: "tc/followers.png",
      },
      {
        title: "Website Link",
        description: (
          <Link
            className="underline"
            to="https://twitter-clone-lake-five-57.vercel.app/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://twitter-clone-lake-five-57.vercel.app/#/
          </Link>
        ),
      },
    ],
  },
  {
    name: "real-time-chat-application",
    details: [
      {
        title: "Background",
        description:
          "My project focuses on developing a real-time chat application designed to enhance user interaction through instant messaging capabilities. This application aims to provide a seamless experience for users, whether for personal conversations or professional collaborations.",
      },
      {
        title: "Role",
        description:
          "Directed full stack development and enhanced user experience design, focusing on creating fluid, high-performance applications that meet user needs and drive engagement.",
      },
      {
        title: "Programming Languages",
        description: (
          <ul className="list-disc ml-10">
            <li>Javascript/Typescript</li>
          </ul>
        ),
      },
      {
        title: "Development Environment",
        description: (
          <ul className="list-disc ml-10">
            <li>Front-End: React.js, Material-UI</li>
            <li>Back-End: Node.js</li>
            <li>Database: Firebase, Firestore</li>
          </ul>
        ),
      },
      {
        title: "Home Page",
        description:
          "Users have the option to sign in with their Google or GitHub accounts, or alternatively, they can use their personal username and password to log in.",
        imgSrc: "rca/home.png",
      },

      {
        title: "Send Request",
        description:
          "Users can send friend requests by using the other person's ID.",
        imgSrc: "rca/request.png",
      },
      {
        title: "Accept Request",
        description: "Display the list of requests.",
        imgSrc: "rca/accept.png",
      },
      {
        title: "Chat",
        description: "Once you add a friend, you can start chatting with them.",
        imgSrc: "rca/chat.png",
      },
      {
        title: "Website Link",
        description: (
          <Link
            className="underline"
            to="https://realtime-chat-app-green.vercel.app/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://realtime-chat-app-green.vercel.app/#/
          </Link>
        ),
      },
    ],
  },
];

export const useDetails = (projectId: string) => {
  const location = useLocation();
  const details: Detail[] = useMemo(() => {
    return data.find((item) => item.name === projectId)?.details || [];
  }, [location.pathname]);

  return { details };
};
