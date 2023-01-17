import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {/* "testimonials" add after skills if you have testimonials */}
      {["home", "about", "work", "skills" , "contacts"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
