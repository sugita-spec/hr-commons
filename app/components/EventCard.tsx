import Link from "next/link";
import type { EventItem } from "../data/events";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="event-card">
      <Link href={`/events/${event.slug}`} aria-label={event.title}>
        <div className="event-date">
          <strong>{event.dateLabel}</strong>
          <span>{event.day}</span>
        </div>
        <div className="event-card-body">
          <div className="event-meta">
            <span>{event.tag}</span>
            <span className={event.status === "近日受付" ? "status muted-status" : "status"}>{event.status}</span>
          </div>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <div className="event-info">
            <span>{event.time}</span>
            <span>{event.format}</span>
            <span>{event.capacity}</span>
          </div>
        </div>
        <span className="event-arrow" aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
