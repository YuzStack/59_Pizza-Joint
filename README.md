# 🍕 Pizza Joint | Framer Motion Showcase

![Pizza Joint](/pizza-joint.png)

**Pizza Joint** is a high-fidelity React application designed to explore the boundaries of **Motion Design** in web interfaces. Built using **Framer Motion**, the project demonstrates how orchestrated animations can transform a standard functional flow into a premium, interactive user experience.

**[Live Preview](https://yuzstack-pizza-joint.netlify.app/)**

## ✨ The "Alive" Experience

The core philosophy behind this project is that web applications should feel responsive and organic. I implemented several advanced animation patterns to achieve this:

1. **Orchestrated Variants**
   Instead of hardcoding individual animations, I utilized Variants. This allowed for clean, declarative code where parent containers coordinate the timing and stagger of their children.

2. **SVG Path Animations**
   The landing page features a custom-animated SVG logo. By leveraging `pathLength` and `pathOffset` transitions, the logo "draws" itself onto the screen, creating an immediate premium first impression.

3. **Interactive Micro-interactions**
   - **Spring Physics**: Buttons and selections use "spring" rather than "tween" transitions, giving them a physical, tactile weight.
   - **Gestures**: Integrated `whileHover` and `whileTap` states across all interactive elements to provide instant visual feedback.
   - **Draggable UI**: Implemented constrained drag gestures, allowing users to interact with UI elements in a 2D space.

4. **Component Lifecycles**
   Used the `AnimatePresence` component to handle complex "Exit" animations for modals and notification pop-ups, ensuring that elements don't just vanish but transition gracefully out of the DOM.

## 🛠️ Technical Skills Demonstrated

- **Declarative Animations**: Managing complex UI states using Framer Motion variants.
- **Keyframes:** Creating custom multi-step animation sequences (like the Pizza Loader).
- **Layout Animations**: Using `layout` props to smoothly animate elements as their position in the DOM changes.
- **Transition Orchestration**: Fine-tuning `staggerChildren`, `when`, and `mass/stiffness/damping parameters`.

## 🚦 Future Technical Roadmap

While the application is fully functional, I have intentionally reserved **Route Transitions** for a future update. This will be implemented once I integrate **React Global Context**, allowing for seamless state persistence and shared animation keys across the `react-router` `<Outlet />` tree.

## 📜 Acknowledgments

- Inspired by the **Framer Motion for Beginners** series by **The Net Ninja.**
- Built with **React** and **Vite** for optimized performance.
