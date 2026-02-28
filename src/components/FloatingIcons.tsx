import { Apple, Leaf, Carrot, Cherry, Wheat, Fish, Milk, Egg } from "lucide-react";

const FloatingIcons = () => {
  const icons = [
    { Icon: Apple, left: "10%", top: "20%" },
    { Icon: Leaf, left: "85%", top: "15%" },
    { Icon: Carrot, left: "15%", top: "70%" },
    { Icon: Cherry, left: "90%", top: "60%" },
    { Icon: Wheat, left: "5%", top: "45%" },
    { Icon: Fish, left: "80%", top: "85%" },
    { Icon: Milk, left: "25%", top: "10%" },
    { Icon: Egg, left: "70%", top: "40%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {icons.map(({ Icon, left, top }, index) => (
        <div
          key={index}
          className="absolute opacity-[0.12]"
          style={{ left, top }}
        >
          <Icon className="w-8 h-8 md:w-12 md:h-12 text-primary/60" />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
