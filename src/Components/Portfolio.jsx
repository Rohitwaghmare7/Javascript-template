/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "Portfolio landscape Background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Preet Makeup",
    description:
      "A sleek and modern website built with ReactJS, showcasing a makeup artist's portfolio, services, and client testimonials through dynamic galleries and interactive booking features.",
    url: "https://github.com/SAWASTHA/MakeUp",
  },
  {
    title: "Dating App",
    description:
      "A sophisticated dating app built with Flutter, offering users a smooth and engaging interface for connecting with potential matches.",
    url: "https://github.com/Rohitwaghmare7/DatingApp",
  },
  {
    title: "Social Media App",
    description:
      "The Social Media App is a feature-rich, React-based application that allows users to connect, share, and engage with content in a dynamic and interactive environment.",
    url: " https://6651813fa8055ad888175684--leafy-dieffenbachia-a74145.netlify.app",
  },
  {
    title: "SWASTHA",
    description:
      "The project 'SWASTHA' was developed by me and my team members as a solution to one of the problem statements of Smart India Hackathon (SIH-2022)",
    url: "https://github.com/Rohitwaghmare7/swastha",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
