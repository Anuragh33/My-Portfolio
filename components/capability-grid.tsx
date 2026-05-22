import { Bot, Boxes, CircuitBoard, PanelsTopLeft } from "lucide-react";

import { capabilities } from "@/lib/data";

const icons = [Bot, PanelsTopLeft, CircuitBoard, Boxes];

export function CapabilityGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {capabilities.map((capability, index) => {
        const Icon = icons[index];

        return (
          <div
            key={capability.title}
            className="glass-panel p-6"
          >
            <div className="liquid-glass flex h-11 w-11 items-center justify-center rounded-2xl text-accent">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl text-white">{capability.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">{capability.description}</p>
          </div>
        );
      })}
    </div>
  );
}
