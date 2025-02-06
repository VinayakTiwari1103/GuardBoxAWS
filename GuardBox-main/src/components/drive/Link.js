import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Link({ link}) {
  return (
    <a
      href={link.name}
      target="_blank"
      className="btn btn-outline-dark text-truncate w-100"
      rel="noreferrer"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", color: "white" }}
    >
      <FontAwesomeIcon icon={faLink} className="mr-2" />
      {link.name.substring(0, 15)}
    </a>
  );
}
