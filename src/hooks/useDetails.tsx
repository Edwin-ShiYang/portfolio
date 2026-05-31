import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const data = [
  {
    name: "DFS",
    details: [
      {
        title: "Background",
        description: "",
      },
      {
        title: "Role",
        description: "",
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
        title: "Development Environment",
        description: (
          <ul className="list-disc ml-10">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        ),
      },
    ],
  },
  {
    name: "TGP1",
    details: [
      {
        title: "Background",
        description: "",
      },
      {
        title: "Role",
        description: "",
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
        title: "Development Environment",
        description: (
          <ul className="list-disc ml-10">
            <li>1</li>
            <li>2</li>
            <li>3</li>
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
        description: "",
      },
      {
        title: "Role",
        description: "",
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
        title: "Development Environment",
        description: (
          <ul className="list-disc ml-10">
            <li>1</li>
            <li>2</li>
            <li>3</li>
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
