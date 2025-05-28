import { useEffect, useState } from "react";

const ParallaxBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div
        className="absolute inset-x-0 transform-gpu overflow-hidden blur-[50px]"
        aria-hidden="true"
        style={{
          top: `-40px`,
          transform: `translateY(${-scrollPosition * 0.6}px)`,
        }}
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] 
               bg-gradient-to-tr from-purple-500 via-pink-500 to-sky-500 
               opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 transform-gpu overflow-hidden blur-[50px]"
        aria-hidden="true"
        style={{
          top: `calc(60vh - 80px)`,
          transform: `translateY(${-scrollPosition * 0.4}px)`,
        }}
      >
        <div
          className="relative left-[calc(80%-11rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[0deg] 
               bg-gradient-to-tr from-blue-600 via-cyan-400 to-teal-500 
               opacity-10 sm:left-[calc(70%)] sm:w-[50rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 transform-gpu overflow-hidden blur-[50px]"
        aria-hidden="true"
        style={{
          top: `calc(100vh - 100px)`,
          transform: `translateY(${-scrollPosition * 0.5}px)`,
        }}
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] 
               bg-gradient-to-tr from-purple-500 via-pink-500 to-sky-500 
               opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 transform-gpu overflow-hidden blur-[50px]"
        aria-hidden="true"
        style={{
          top: `calc(165vh - 150px)`,
          transform: `translateY(${-scrollPosition * 0.35}px)`,
        }}
      >
        <div
          className="relative aspect-[900/500] w-[45rem] -translate-x-1/2 rotate-[50deg] 
               bg-gradient-to-tr from-pink-500 via-red-400 to-purple-500 
               opacity-5 sm:left-[calc(50%-30rem)] sm:w-[60rem]"
          style={{
            clipPath:
              "polygon(30% 0%,76.1% 97.7%, 54.1% 94.1%, 70% 0%, 100% 30%,85.5% 0.1%, 80.7% 2%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 150% 30%)",
          }}
        />
      </div>{" "}
      <div
        className="absolute inset-x-0 transform-gpu overflow-hidden blur-[50px]"
        aria-hidden="true"
        style={{
          top: `calc(160vh - 150px)`,
          transform: `translateY(${-scrollPosition * 0.4}px)`,
        }}
      >
        <div
          className="relative left-[calc(80%-11rem)] aspect-[1200/208] w-[40rem] -translate-x-1/2 rotate-[0deg] 
               bg-gradient-to-tr from-blue-600 via-cyan-400 to-teal-500 
               opacity-10 sm:left-[calc(70%)] sm:w-[50rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>{" "}
      <div
        className="absolute inset-x-0 transform-gpu overflow-hidden blur-[50px]"
        aria-hidden="true"
        style={{
          top: `calc(180vh - 100px)`,
          transform: `translateY(${-scrollPosition * 0.5}px)`,
        }}
      >
        <div
          className="relative left-[calc(20%)] aspect-[400/800] w-[35rem] -translate-x-1/2 rotate-[220deg] 
               bg-gradient-to-tr from-primary to-purple-400 
               opacity-10 sm:left-[calc(95%)] sm:w-[45rem]"
          style={{
            clipPath:
              "polygon(20% 5%, 80% 0%, 100% 60%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
          }}
        />
      </div>
      {/* Dodatkowe elementy wielokątne, aby wypełnić całą długość strony */}
      <div
        className="absolute inset-x-0 transform-gpu overflow-hidden blur-[50px]"
        aria-hidden="true"
        style={{
          top: `calc(250vh - 150px)`,
          transform: `translateY(${-scrollPosition * 0.45}px)`,
        }}
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[120deg] 
               bg-gradient-to-tr from-blue-300 via-indigo-400 to-purple-300 
               opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 transform-gpu overflow-hidden blur-[50px]"
        aria-hidden="true"
        style={{
          top: `calc(250vh - 200px)`,
          transform: `translateY(${-scrollPosition * 0.35}px)`,
        }}
      >
        <div
          className="relative aspect-[400/800] w-[40rem] -translate-x-1 rotate-[25deg] 
               bg-gradient-to-tr from-teal-300 via-cyan-300 to-blue-300 
               opacity-5 sm:left-[calc(60%)] sm:w-[50rem]"
          style={{
            clipPath:
              "polygon(50% 0%, 55% 50%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 50% 100%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 0% 50%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 transform-gpu overflow-hidden blur-[50px]"
        aria-hidden="true"
        style={{
          top: `calc(320vh - 150px)`,
          transform: `translateY(${-scrollPosition * 0.4}px)`,
        }}
      >
        <div
          className="relative left-[calc(25%)] aspect-[1200/800] w-[45rem] -translate-x-1/2 rotate-[75deg] 
               bg-gradient-to-tr from-purple-300 via-violet-400 to-fuchsia-300 
               opacity-5 sm:left-[calc(30%)] sm:w-[60rem]"
          style={{
            clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxBackground;
