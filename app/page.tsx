import ChatSection from "./components/chat-section";
import { Link } from "lucide-react";
import NextLink from "next/link";
import MainSection from "./components/ui/main-section";

export default function Home() {
  return (
    <main className=" background-gradient font-serif">
            <header
        id="header"
        className="fixed top-0 w-full bg-[#00303F] text-white flex items-center py-2 z-10"
      >
        <div className="w-1/5 ml-4">
          <img
            id="header-img"
            className="w-1/2 cursor-pointer"
            src="https://imgur.com/IXMsbAn.png"
            alt="company-logo"
            
          />
        </div>
        <nav id="nav-bar" className="w-4/5">
          <ul className="flex justify-around text-gray-400">
            <li>
              <a className="nav-link" href="#overview">
                FinVents
              </a>
            </li>
            <li>
              <a className="nav-link" href="#story">
                Our Story
              </a>
            </li>
            <li>
              <a className="nav-link" href="#events">
                Events
              </a>
            </li>
            
          </ul>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center gap-10 p-24 background-gradient">
      <h1>Talk to one of our agents with our costumer service chat</h1>
      <ChatSection />
    </main>
    <footer className="bg-[#00303F] text-white text-center py-4">
        <div className="flex justify-center space-x-4 mb-2">
          <span>Privacy</span>
          <span>Terms</span>
          <a href="http://localhost:5176">
            <span>AI Customer Support</span>
          </a>
        </div>
        <p>
          Created by FinVents Team in collaboration with Capital One
          <br />
          Copyright 2024
        </p>
      </footer>
    </main>
    
  );
}
