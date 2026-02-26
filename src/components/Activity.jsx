import "./components.css";

export default function Activity({ value }) {
  return (
    <li className="act-item">
      <p className="act-meta">
        <span className="act-user">{value.user.username}</span>
        <span className="act-verb"> added </span>
        <span className="act-title">{value.title.title}</span>
        <span className="act-date">
          {value.activityType === "favorite" ? " to favorites " : " to watch later "} - {new Date(value.createdAt).toLocaleDateString("fr-FR", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </p>
    </li>
  );
}