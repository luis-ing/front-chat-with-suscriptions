import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import ChatList from "@/components/ChatList";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <ChatList />
    </div>
  );
}
