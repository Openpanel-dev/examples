import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const emails: Record<string,string> = {
  '1@openpanel.dev': '1xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx1',
  '2@openpanel.dev': '2xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx2',
}

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  return (
    <div>
      <label>Your email</label>
      <input placeholder="abc@openpanel.dev" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={() => {
        const id = emails[email];
        if(!id) {
          alert('Email not found');
          return;
        }
        localStorage.setItem('session', JSON.stringify({ email, id }));
        router.push('/protected')
      }}>Sign in</button>
    </div>
  );
}
