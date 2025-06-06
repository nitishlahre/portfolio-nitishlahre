import React from "react";

function Header() {
  return (
    <header
      id="header"
      className="w-auto h-fit lg:h-screen bg-white scroll-smooth flex flex-col items-center"
    >
      <div className="pt-16 md:pt-28 text-center main-text">
        <div className="text-wrapper">
          <h1 className="animated-text font-bold text-purple-600 text-xl md:text-3xl">
            WEB DEVELOPER
          </h1>
        </div>
        <div className="text-wrapper">
          <h1 className="animated-text text-5xl md:text-9xl font-semibold">
            MAKING
          </h1>
        </div>
        <div className="text-wrapper flex-column">
          <h1 className="animated-text text-5xl md:text-9xl font-semibold">
            STUN
            <p className="text-purple-600 inline">NNIG</p>
          </h1>
        </div>
        <div className="text-wrapper">
          <h1 className="animated-text text-5xl md:text-9xl font-semibold text-right text-purple-600">
            WEB
          </h1>
        </div>
        <div className="text-wrapper">
          <h1 className="animated-text text-4xl md:text-8xl italic font-semibold">
            experiences
          </h1>
        </div>
        <div className="text-wrapper"></div>
      </div>
    </header>
  );
}

export default Header;
