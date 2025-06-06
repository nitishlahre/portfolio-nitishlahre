"use client";
import React, { useEffect, useState } from "react";
import Home from "../components/home";
import useLenis from "../hooks/useLenis";
import Loader from "../components/Loader";
import Router from "next/router"; // Note: Ensure this import is correct based on your Next.js version.

function Page() {
  useLenis();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Explicitly type the event handlers
    const handleStart: () => void = () => setIsLoading(true);
    const handleStop: () => void = () => setIsLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleStop);
    Router.events.on("routeChangeError", handleStop);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleStop);
      Router.events.off("routeChangeError", handleStop);
    };
  }, []);

  return (
    <div className="overflow-auto">
      {isLoading && <Loader />}
      <Home />
    </div>
  );
}

export default Page;
