import { Link } from "react-router-dom";
import "../styles/Services.css";

function Services() {
    const services = [
        {
            icon: "🏋️",
            title: "Personal Training",
            text: "Get personalized workout guidance designed around your fitness goals."
        },
        {
            icon: "💪",
            title: "Strength Training",
            text: "Build strength, improve performance and become stronger every day."
        },
        {
            icon: "🧘",
            title: "Yoga & Flexibility",
            text: "Improve flexibility, mobility and balance with guided yoga sessions."
        },
        {
            icon: "🥗",
            title: "Nutrition Guidance",
            text: "Get simple nutrition guidance to support your fitness journey."
        }
    ];

    return (
        <section className="services-section">

            <div className="services-container">

                {/* Heading */}
                <div className="services-heading">
                    <p className="services-subtitle">WHAT WE OFFER</p>

                    <h2>Our Services</h2>

                    <p>
                        Everything you need to build a stronger,
                        healthier and more active lifestyle.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="services-grid">

                    {services.map((service, index) => (
                        <div className="service-card" key={index}>

                            <div className="service-icon">
                                {service.icon}
                            </div>

                            <h3>{service.title}</h3>

                            <p>{service.text}</p>

                            <Link to="/services" className="service-link">
                                Learn More →
                            </Link>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Services;

