import React, { Component } from "react";

import EventPageCard from "../../components/EventPageCards";

import image_1_1 from "../../images/event_images/image_1_2.jpg";
import image_2_1 from "../../images/event_images/image_2_3.jpg";

import "./style.css";

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upcomingEvents: [
        {
          name: "Technova",
          content:
            "The flagship event of IIIT where students come forward to present their project in front of judges.",
          day: "12",
          month: "Aug",
          year: "2018",
          image: image_1_1
        },
        {
          name: "ML Workshop",
          content:
            "In ML workshop, students learn Machine Learning concepts from scratch till the very depth.",
          day: "12",
          month: "Aug",
          year: "2018",
          image: image_2_1
        }
      ],
      pastEvents: [
        {
          name: "Technova",
          content:
            "The flagship event of IIIT where students come forward to present their project in front of judges.",
          day: "12",
          month: "Aug",
          year: "2017",
          image: image_1_1
        },
        {
          name: "ML Workshop",
          content:
            "In ML workshop, students learn Machine Learning concepts from scratch till the very depth.",
          day: "12",
          month: "Aug",
          year: "2017",
          image: image_2_1
        }
      ]
    };
  }

  renderUpcomingEvents = () => {
    return this.state.upcomingEvents.map(event => {
      return (
        <div>
          <EventPageCard
            name={event.name}
            content={event.content}
            day={event.day}
            month={event.month}
            year={event.year}
            image={event.image}
          />
        </div>
      );
    });
  };

  renderPastEvents = () => {
    return this.state.pastEvents.map(event => {
      return (
        <div>
          <EventPageCard
            name={event.name}
            content={event.content}
            day={event.day}
            month={event.month}
            year={event.year}
            image={event.image}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="page-heading upcoming">UPCOMING EVENTS</div>

        <div className="eventspage-events-container">
          {this.renderUpcomingEvents()}
        </div>

        <div className="page-heading past">PAST EVENTS</div>

        <div className="eventspage-events-container">
          {this.renderPastEvents()}
        </div>
      </div>
    );
  }
}

export default Events;
