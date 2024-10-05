import Image from 'next/image';
import ravenUIGraphic from '../../../../public/assets/RavenUIGraphic.png';

const RavenUI = () => {
    return (
        <div className='md:pt-36 lg:pt-36 pt-16 flex flex-col gap-10 border-b border-gray-100 shadow-base'>
            <div className='flex flex-col gap-4 px-8 md:mb-4'>
                <h2 className='text-center text-4xl md:text-6xl font-bold font-calsans'>Smart.  Easy.  Elegant.</h2>
                <p className='text-center text-[18px] md:text-xl text-gray-500'>Meticulous by design, so your team can focus on what’s essential.</p>
            </div>
            <div className="w-full flex justify-center overflow-hidden">
                <div className="relative w-full lg:w-full overflow-hidden md:overflow-visible h-[40vh] md:h-[90vh]">
                    <Image
                        src={ravenUIGraphic}
                        alt="Raven UI Graphic"
                        layout="fill"
                        objectFit="cover"
                        className="transform md:transform-none scale-250 md:scale-100"
                    />
                </div>
            </div>
        </div>
    );
};

export default RavenUI;
