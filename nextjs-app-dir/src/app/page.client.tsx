"use client"

import { trackEvent, setProfile } from "@openpanel/nextjs";

export default function PageClient() {
  return (
    <>
      <button onClick={() => {
        trackEvent('button_event', {type: 'js'})
      }}>Track with JS</button>

      <button onClick={() => {
        setProfile({
          profileId: '736d86b0-4a77-43d8-ae79-6ed83187fd85',
          avatar: 'https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg',
          firstName: 'Jane',
          lastName: 'Doe',
        })
      }}>Set profile info</button>
    </>
  );
}
