import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
} from "@/Types";
import { BsVectorPen, BsCode } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";

const navLinks: NavLink[] = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/portfolio", label: "PORTFOLIO" },
  { path: "/contact", label: "CONTACT" },
];

const services: ServiceProps[] = [
  { id: 2, title: "Web Developmemt", icon: <BsCode /> },
  { id: 3, title: "Android Development", icon: <AiFillAndroid /> },
  { id: 4, title: "IOS Development", icon: <AiFillApple /> },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 9,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 178,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 742,
    text: "Design Items",
  },
  {
    id: 4,
    number: 112,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/cryptoProject.png",
    name: "Crypto Currencies watcher",
    tools: ["React", "Tailwind CSS"],
  },
  {
    id: 2,
    img: "/landingProject.png",
    name: "Landing page sample",
    tools: ["Next JS", "Tailwind CSS"],
  },
  {
    id: 3,
    img: "/weatherProject.png",
    name: "Weather App",
    tools: ["React", "CSS"],
  },
  {
    id: 4,
    img: "/snakeProject.jpg",
    name: "React Native classic snake game",
    tools: ["ReactNative", "TypeScript"],
  },
  {
    id: 5,
    img: "/todoProject.jpg",
    name: "Todolist React Native App",
    tools: ["React Native", "Redux-Toolkit"],
  },
];

const skills = [
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 60 },
  { name: "ReactJS", level: 75 },
  { name: "NextJS", level: 60 },
  { name: "ReactNative", level: 70 },
  { name: "Node js", level: 40 },
  { name: "Tailwind CSS", level: 80 },
];

const contacts: ContactsProps[] = [
  { id: 2, title: "PHONE", text: "+98922-925-7388" },
  { id: 3, title: "EMAIL", text: "aheydariamjad@gmail.com" },
];

export { navLinks, projects, countUpItems, services, skills, contacts };
