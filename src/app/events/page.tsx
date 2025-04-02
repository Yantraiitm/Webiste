import EventsHero from "@/components/events/events-hero"
import FeaturedEvents from "@/components/events/featured-events"
import AllEvents from "@/components/events/all-events"

export default function EventsPage() {
  return (
    <div>
      <EventsHero />
      <FeaturedEvents />
      <AllEvents />
    </div>
  )
}

