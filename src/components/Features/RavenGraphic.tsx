import Image from 'next/image';

const RavenGraphic = () => {
    return (
        <div className="w-full flex justify-center overflow-hidden">
            <div className="relative w-full md:w-3/4 lg:w-full overflow-hidden md:overflow-visible h-[62vh] md:h-[120vh]">
                <Image
                    src="/images/RavenUI.png"
                    alt="Raven Graphic"
                    layout="fill"
                    objectFit="cover"
                    className="transform md:transform-none scale-250 md:scale-100"
                />
            </div>
        </div>
    );
};

export default RavenGraphic;
