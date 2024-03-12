import PageClient from './page.client'

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 20 }}>
      <button data-event="button_event" data-type="attributes">
        Track with attributes
      </button>
      <PageClient />
    </div>
  )
}