import { cn } from "../lib/utils";

type HackathonCardProps = {
  backgroundImageUrl: string;
  header: string;
  description: string;
  opacity?: undefined | number;
};

export default function HackathonCard({
  backgroundImageUrl,
  header,
  description,
  opacity = 0.9,
}: HackathonCardProps)  {
  return (
    <div className="max-w w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
        )}
        >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: opacity, // Only this layer is semi-transparent
        }}
      />
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10"></div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray relative z-10">
            {header}
          </h1>
          <p className="font-normal text-lg text-gray relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}


