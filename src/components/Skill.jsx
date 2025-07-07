import InfiniteScroll from "./InfiniteScroll";

const items = [
    { content: "Attentive" },
    { content: <p>Strong Analytical</p> },
    { content: "Excellent Communication" },
    { content: <p>Excellent Collaboration</p> },
    { content: "Curious and Proactive" },
    { content: <p>Strong Time Management</p> },
    { content: "Patience and Perseverance" },
    { content: <p>User-Centric Mindset</p> },
    { content: "Product Oriented" },
    { content: <p>Process Oriented</p> }
];

const Skill = () => {
    return (
        <div style={{ height: '100vh'}} id="skill">
            <InfiniteScroll
                items={items}
                isTilted={true}
                tiltDirection='left'
                autoplay={true}
                autoplaySpeed={0.5}
                autoplayDirection="up"
                pauseOnHover={true}
            />
        </div>
    )
}

export default Skill