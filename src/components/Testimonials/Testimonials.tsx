interface Testimonial {
    id: number;
    name: string;
    username: string;
    message: string;
    avatarUrl: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "John Doe",
        username: "@johndoe",
        message: "This service has revolutionized my workflow! Highly recommend it.",
        avatarUrl: "https://via.placeholder.com/50",
    },
    {
        id: 2,
        name: "Jane Smith",
        username: "@janesmith",
        message: "Incredible platform, fantastic support, and great user experience!",
        avatarUrl: "https://via.placeholder.com/50",
    },
    {
        id: 3,
        name: "Mark Johnson",
        username: "@markjohnson",
        message: "I've never been more efficient. This tool is a game-changer.",
        avatarUrl: "https://via.placeholder.com/50",
    },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
    testimonial,
}) => {
    return (
        <div className="max-w-md border border-gray-100 rounded-lg p-4 mb-4">
            <div className="flex items-center">
                <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex flex-col">
                    <span className="font-bold">{testimonial.name}</span>
                    <span className="text-gray-500">{testimonial.username}</span>
                </div>
            </div>
            <p className="mt-4 text-gray-800">{testimonial.message}</p>
        </div>
    );
};

const Testimonials: React.FC = () => {
    return (
        <div>
            {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
        </div>
    );
};

export default Testimonials;
