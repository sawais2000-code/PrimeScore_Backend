// Landingpage.jsx
import {useEffect} from 'react';
import { FaPlay, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Landingpage.css';
import cardone from "../../assets/cardone.png";
import cardtwo from "../../assets/cardtwo.png";
import cardthree from "../../assets/cardthree.png";
import male from "../../assets/male.png";
import female from "../../assets/female.png";


// Navbar Component
const Navbar = () => {
    const navigate = useNavigate();

    return (
        <header className="navbar">
            <div className="logo">CRM</div>
            <nav>
                <a>Features</a>
                <a>Pricing</a>
                <a>Blog</a>
                <a>Contact</a>
                <button onClick={()=> navigate('user-login')} className="nav-btn">Sign Up</button>
            </nav>
        </header>
    );
};

// Hero Component
const Hero = () => {
    return (
        <section className="hero hero-with-humans">
            <div className="hero-human left">
                <img
                    style={{ height: "40rem" }}
                    src={male}
                    alt="CRM Boy"
                />
            </div>

            <div className="hero-content">
                <h1>
                    Streamline Your Business with<br />
                    Our Powerful CRM Solution
                </h1>
                <p>Manage leads, sales, and cases efficiently.</p>

                <div className="hero-btns">
                    <button className="btn-primary">Get Started</button>
                    <button className="btn-glass">
                        <FaPlay style={{ marginRight: '8px' }} /> Watch Demo
                    </button>
                </div>
            </div>

            <div className="hero-human right">
                <img
                    style={{ height: "40rem" }}
                    src={female}
                    alt="CRM Girl"
                />
            </div>
        </section>
    );
};

// Preview Component
const Preview = () => {
    const previewCards = [
        cardone,
        cardtwo,
        cardthree
    ];

    return (
        <section className="preview">
            {previewCards.map((title, index) => (
                <div key={index} className="preview-card">
                    <img style={{ width: "100%", borderRadius: "1.5rem" }} src={title} alt={`Preview ${index + 1}`} />
                </div>
            ))}
        </section>
    );
};

// CTA Component
const CTA = () => {
    const navigate = useNavigate();
    return (
        <section className="cta">
            <h2>Boost Your Business Efficiency Today!</h2>
            <p>Join now & transform your workflow.</p>
            <button onClick={()=> navigate('user-login')} className="btn-primary">Sign Up Now</button>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div>
                    <h3>CRM</h3>
                    <p>Powerful CRM software designed to manage leads, sales and cases efficiently.</p>
                </div>

                <div>
                    <h4>Features</h4>
                    <ul>
                        <li>Dashboard</li>
                        <li>Lead Management</li>
                        <li>Sales Tracking</li>
                        <li>Case Management</li>
                    </ul>
                </div>

                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h4>Newsletter</h4>
                    <input placeholder="Email address" />
                    <button className="btn-primary small">Subscribe</button>
                    <div className="social">
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © 2026 CRM. All rights reserved | Privacy | Terms
            </div>
        </footer>
    );
};


// Features Component - Preview सेक्शन के बाद डालें
const Features = () => {
    const features = [
        {
            icon: "📊",
            title: "Advanced Analytics",
            description: "Get real-time insights and detailed reports to track your sales performance."
        },
        {
            icon: "🤝",
            title: "Lead Management",
            description: "Capture, track, and nurture leads efficiently with automated workflows."
        },
        {
            icon: "📈",
            title: "Sales Pipeline",
            description: "Visualize your entire sales process and identify bottlenecks instantly."
        },
        {
            icon: "🔔",
            title: "Smart Notifications",
            description: "Never miss important updates with intelligent alerts and reminders."
        },
        {
            icon: "📱",
            title: "Mobile Landingpage",
            description: "Manage your CRM on the go with our fully-featured mobile Landingpagelication."
        },
        {
            icon: "🛡️",
            title: "Secure & Compliant",
            description: "Enterprise-grade security with GDPR, HIPAA, and SOC2 compliance."
        }
    ];

    return (
        <section className="features">
            <div className="section-header">
                <h2>Powerful Features for Modern Businesses</h2>
                <p>Everything you need to manage customer relationships effectively</p>
            </div>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};


// Testimonials Component - Features के बाद डालें
const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechCorp",
            content: "This CRM transformed our sales process. Our conversion rates increased by 40% in just 3 months!",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Sales Director, GrowthInc",
            content: "The automation features saved us 20+ hours per week. Highly recommended for scaling businesses.",
            rating: 5
        },
        {
            name: "Priya Sharma",
            role: "Marketing Head, InnovateLabs",
            content: "Best CRM solution we've used. The customer support team is exceptional and always helpful.",
            rating: 4
        }
    ];

    return (
        <section className="testimonials">
            <div className="section-header">
                <h2>Trusted by 5000+ Companies</h2>
                <p>See what our customers say about us</p>
            </div>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="stars">
                            {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                        </div>
                        <p className="testimonial-content">"{testimonial.content}"</p>
                        <div className="testimonial-author">
                            <div className="author-info">
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


// Integrations Component - Testimonials के बाद डालें
const Integrations = () => {
    const integrations = [
        { name: "Slack", logo: "💬" },
        { name: "Google Workspace", logo: "📧" },
        { name: "Microsoft 365", logo: "💼" },
        { name: "Salesforce", logo: "☁️" },
        { name: "Zapier", logo: "⚡" },
        { name: "Mailchimp", logo: "📨" },
        { name: "QuickBooks", logo: "💰" },
        { name: "HubSpot", logo: "🎯" }
    ];

    return (
        <section className="integrations">
            <div className="section-header">
                <h2>Seamless Integrations</h2>
                <p>Connect with your favorite tools and services</p>
            </div>
            <div className="integrations-grid">
                {integrations.map((integration, index) => (
                    <div key={index} className="integration-item">
                        <div className="integration-logo">{integration.logo}</div>
                        <p>{integration.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};


// Main Landingpage Component
function Landingpage() {
    useEffect(() => {
        // Landing page पर body को एक class add करें
        document.body.classList.add('landing-page-active');

        // Cleanup
        return () => {
            document.body.classList.remove('landing-page-active');
        };
    }, []);
    return (
        <div className="landing-page-container">
            {/* Background Waves */}
            <div className="bg-waves"></div>

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* Preview Section */}
            <Preview />

            {/* NEW: Features Section */}
            <Features />

            {/* NEW: Testimonials Section */}
            <Testimonials />

            {/* NEW: Integrations Section */}
            <Integrations />
            {/* CTA Section */}
            <CTA />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Landingpage;


