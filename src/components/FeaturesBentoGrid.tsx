import { FC } from 'react';
import Image from 'next/image'

interface GridItemProps {
  title: string
  description: string
  image: React.ReactNode
  className?: string
  headingPosition?: 'above' | 'below'
}

const FeaturesBentoGrid: FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
        <GridCard
          title="Lorem ipsum dolor sit amet"
          description="rutrum bibendum sit amet eu leo. Vivamus viverra ligula non quam consequat pulvinar"
          image={<Image src="/placeholder.svg" alt="Placeholder" width={400} height={200} className="rounded-md" />}
          className="md:col-span-2"
          headingPosition="below"
        />
        <GridCard
          title="Nam at erat felis"
          description="Proin pharetra maximus nulla, in venenatis mi blandit non, Morbi at libero nunc. Nulla at neque id neque"
          image={<Image src="/placeholder.svg" alt="Placeholder" width={200} height={100} className="rounded-md" />}
          headingPosition="below"
        />
        <GridCard
          title="consectetur adipiscing el"
          description=" Nulla sapien ante, lacinia eu lectus in, blandit hendrerit diam elementum nec elit et tincidunt"
          image={<Image src="/placeholder.svg" alt="Placeholder" width={200} height={100} className="rounded-md" />}
          headingPosition="below"
        />
        <GridCard
          title="Ut sollicitudin lacus dolor, vel eleifend"
          description="Mauris lorem velit, venenatis finibus risus in, elementum interdum risus. Nulla leo lectus, accumsan"
          image={<Image src="/placeholder.svg" alt="Placeholder" width={400} height={200} className="rounded-md" />}
          className="md:col-span-2"
          headingPosition="above"
        />
      </div>
    </div>
  )
}

export default FeaturesBentoGrid;

const GridCard: React.FC<GridItemProps> = ({ title, description, image, className, headingPosition = 'above' }) => (
  <div className={`bg-white rounded-xl shadow-xs border border-gray-200 p-4 sm:p-6 flex flex-col justify-between ${className}`}>
    {headingPosition === 'above' && (
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-bold mb-2">{title}</h2>
        <p className="text-gray-500 text-sm sm:text-base">{description}</p>
      </div>
    )}
    <div className="relative w-full mb-4">
      {image}
    </div>
    {headingPosition === 'below' && (
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-bold mb-2">{title}</h2>
        <p className="text-gray-500 text-sm sm:text-base">{description}</p>
      </div>
    )}
  </div>
)
