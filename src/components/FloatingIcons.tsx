import { Apple, Leaf, Carrot, Cherry, Wheat, Fish, Milk, Egg } from "lucide-react";

const FloatingIcons = () => {
  const icons = [
    { Icon: Apple, delay: 0, left: "10%", top: "20%" },
    { Icon: Leaf, delay: 1, left: "85%", top: "15%" },
    { Icon: Carrot, delay: 2, left: "15%", top: "70%" },
    { Icon: Cherry, delay: 0.5, left: "90%", top: "60%" },
    { Icon: Wheat, delay: 1.5, left: "5%", top: "45%" },
    { Icon: Fish, delay: 2.5, left: "80%", top: "85%" },
    { Icon: Milk, delay: 3, left: "25%", top: "10%" },
    { Icon: Egg, delay: 1.8, left: "70%", top: "40%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {icons.map(({ Icon, delay, left, top }, index) => (
        <div
          key={index}
          className="absolute floating opacity-20"
          style={{
            left,
            top,
            animationDelay: `${delay}s`,
            animationDuration: `${8 + index * 0.5}s`,
          }}
        >
          <Icon 
            className="w-8 h-8 md:w-12 md:h-12 text-primary/60 drop-shadow-sm" 
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
