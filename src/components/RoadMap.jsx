import React, { useEffect, useState , useRef  } from "react";
import firstGenration from "../assets/generation1.2.png";
import secondGenration from "../assets/generation2.2.png";
import thirdGenration from "../assets/generation3.1.png";
import thirdGenrationtwo from "../assets/generation3.2.png";
import fourthGenration from "../assets/generation4.1.png";
import fourthGenrationtwo from "../assets/generation4.2.png";
import fiveGenration from "../assets/fivegeneration.gif"


const RoadMap = () => {
  const [activeGenerations, setActiveGenerations] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(1);
  const generationsRef = useRef(null);
  const [sectionId , setSectionId] = useState()
  const [fixedNavbar , setFixedNavbar] = useState(false);

  function handleGenerationClick(generation , flag) {
   // If the clicked generation is not active, activate generations up to the clicked one

   if(flag === true) {
     setCount(1)
   }else{
     setCount(count + 1);
   }

   setFixedNavbar(true)

   const generationsUpToClicked = Array.from(
      { length: generation },
      (_, i) => i + 1
   );
   setActiveGenerations(generationsUpToClicked);
   
}

function scrollToActiveGeneration() {
   // Scroll to the corresponding section
   const sectionId = `generation${activeGenerations[activeGenerations.length - 1]}`;
   const section = document.getElementById(sectionId);
   if (section) {
      section.scrollIntoView({ behavior: "smooth" });
   }
}

  useEffect(() => {
    // Scroll to the corresponding section
    console.log("count" , count)
    if (count !== 1) {
      const sectionId = `generation${
        activeGenerations[activeGenerations.length - 1]
      }`;

      setSectionId(sectionId)
      console.log("sectionId" , sectionId)

      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [activeGenerations]);

  // console.log("activeGenerations", activeGenerations);

  // scroll up button 
   const scrollToActiveGeneration23 = () => {
    if (generationsRef.current) {
      generationsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // handleGenerationClick(5 , true)
  };

useEffect(() => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    // threshold: 0.1 // Trigger when 30% of the element is visible
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-up"); // Add fade-up animation class
      } else {
        entry.target.classList.remove("fade-up"); // Remove fade-up animation class when not intersecting
      }
    });
    console.log("entries", entries);
  }, observerOptions);

  // Observe elements with the class "animated"
  const animatedElements = document.querySelectorAll(".animated");
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Clean up
  return () => {
    animatedElements.forEach(element => {
      observer.unobserve(element);
    });
  };
}, []);




  return (
    <div className="w-[100%] pb-[5%]">

      <div>
        <img src={fiveGenration} className="w-[100%] h-[100vh] " />
      </div>

      <div className="w-[90%] mx-auto">
        <div className="w-full ">
          <h1 ref={generationsRef} className="text-center uppercase   pt-[3%] text-[#011222] text-3xl font-optima font-normal">
            {" "}
            Moloobhoy LEgacy
          </h1>
        </div>
        <div className={ `w-[80%] mx-auto mt-[3%] flex `}>
          {/* ${fixedNavbar ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md" : "" }  */}
          <p
           
          className="p-3 bg-[#003B73] text-center text-white w-[20%] uppercase cursor-pointer" onClick={() => handleGenerationClick(5 , true) }>
            Generations
          </p>
          <div className="w-[80%] flex justify-around border-t-2 border-b-2 border-black border-opacity-5 items-center text-2xl">
            <div
              className={`cursor-pointer ${
                activeGenerations.includes(1) ? "highlighted" : ""
              } ${
                activeGenerations[activeGenerations.length - 1] === 1
                  ? "bg-[#003B73] text-white h-full px-3 pt-1"
                  : ""
              }`}
              onClick={() => handleGenerationClick(1)}
            >
              01
            </div>
            <div
              className={`cursor-pointer ${
                activeGenerations.includes(2) ? "highlighted" : ""
              } ${
                activeGenerations[activeGenerations.length - 1] === 2
                  ? " bg-[#003B73] text-white h-full px-3 pt-1"
                  : ""
              }`}
              onClick={() => handleGenerationClick(2)}
            >
              02
            </div>
            <div
              className={`cursor-pointer ${
                activeGenerations.includes(3) ? "highlighted" : ""
              } ${
                activeGenerations[activeGenerations.length - 1] === 3
                  ? "bg-[#003B73] text-white h-full px-3 pt-1"
                  : ""
              }`}
              onClick={() => handleGenerationClick(3)}
            >
              03
            </div>
            <div
              className={`cursor-pointer ${
                activeGenerations.includes(4) ? "highlighted" : ""
              } ${
                activeGenerations[activeGenerations.length - 1] === 4
                  ? "bg-[#003B73] text-white h-full px-3 pt-1"
                  : ""
              }`}
              onClick={() => handleGenerationClick(4)}
            >
              04
            </div>
            <div
              className={`cursor-pointer ${
                activeGenerations.includes(5) ? "highlighted" : ""
              } ${
                activeGenerations[activeGenerations.length - 1] === 5
                  ? "bg-[#003B73] text-white h-full px-3 pt-1"
                  : ""
              }`}
              onClick={() => handleGenerationClick(5)}
            >
              05
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto mt-[3%]">
          <div className="w-full flex flex-col justify-center items-center">
            {(activeGenerations.includes(1) ||
              activeGenerations.includes(2)) && (
              <div
                id="generation1"
                className={`w-[350px] h-[440px] bg-[#F8F9FB] z-30 mb-[2%] shadow-2xl ${sectionId === "generation1" ? "fade-up" : "" }`}
              >
                <div className="w-[96%] h-[96%] animated flex flex-col justify-between mx-auto pt-[3.5%]">
                  <img
                    src={firstGenration}
                    alt=""
                    className="w-[96%] mx-auto h-[50%] object-cover"
                  />

                  <div className="mt-[5%] w-[96%] mx-auto h-[50%]">
                    <h1 className="text-center text-[#003B73] font-normal text-2xl font-optima  uppercase">
                      Ahmed S. Moloobhoy
                    </h1>
                    <h6 className="text-center mt-[4%] text-lg font-sans font-normal text-[#323135] uppercase">
                      Founder (1905 - 1955)
                    </h6>
                    <p className="mt-[4%] text-center text-base font-sans font-light text-[#323135]">
                      Ahmed S Moloobhoy was an entirely self made man. He set up
                      his business in 1890, dismantling disused bridges, mills
                      and later shipbreaking.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeGenerations.includes(2) && (
              <>
                <div
                 
                  className="flex items-center border1  border-[#323135] w-[5%] border-dotted justify-center relative rotate-90 "
                >
                  <div className=" bg-transparent "></div>
                </div>
                <div  id="generation2" className="w-[350px] h-[440px] animated bg-[#F8F9FB] z-30 mt-[2%] shadow-2xl">
                  <div className="w-[96%] h-[96%] flex flex-col justify-between mx-auto pt-[3.5%] ">
                    <img
                      src={secondGenration}
                      alt=""
                      className="w-[96%] mx-auto h-[50%] object-cover"
                    />

                    <div className="mt-[5%] w-[96%] mx-auto h-[50%]">
                      <h1 className="text-center  text-[#003B73] font-normal text-2xl font-optima  uppercase">
                        Shareef A. Moloobhoy
                      </h1>
                      <h6 className="text-center mt-[4%] text-lg font-sans font-normal text-[#323135] uppercase">
                        1st Chairman (1916 - 1988)
                      </h6>
                      <p className="mt-[4%] text-center text-base font-sans font-light text-[#323135]">
                        Shareef, the youngest of the 3 sons of Ahmed Moloobhoy,
                        was a gifted architect by qualification (ARIBA) and one
                        of the few privileged srudents of Frank Lloyd Wright.
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </>
            )}
            {activeGenerations.includes(3) && (
              <>
                <div
                  
                  className="w-[6%] mx-auto border1  rotate-90 relative "
                ></div>
                <div className="w-[75%]  p-2  flex ">
                  <div className="w-[52%]  border4 border-black">

                  </div>
                  <div className="w-[52%]  border5 border-black">

                  </div>
                </div>

                <div id="generation3" className={`flex w-[100%] justify-between ${sectionId == "generation3" ? "fade-up" : "" } `}>
                  <div className="w-[350px] h-[440px] bg-[#F8F9FB] z-30 shadow-2xl animated">
                    <div className="w-[96%] h-[96%] flex flex-col justify-between mx-auto pt-[3.5%]">
                      <img
                        src={thirdGenration}
                        alt=""
                        className="w-[96%] mx-auto h-[50%] object-cover"
                      />

                      <div className="mt-[5%] w-[96%] mx-auto h-[50%]">
                        <h1 className="text-center font-normal text-2xl font-optima text-[#003B73]  uppercase">
                          Adil S. Moloobhoy
                        </h1>
                        <h6 className="text-center mt-[4%] text-lg font-sans font-normal text-[#323135] uppercase">
                          Chairman (1977 - Today)
                        </h6>
                        <p className="mt-[4%] text-center text-base font-sans font-light text-[#323135]">
                          My working life started with the firm in 1977. My
                          father's indifferent health and subsequent stroke
                          precipitated this move half way through my higher
                          education.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-[350px] h-[440px] bg-[#F8F9FB] z-30 shadow-2xl animated">
                    <div className="w-[96%] h-[96%] flex flex-col justify-between mx-auto pt-[3.5%]">
                      <img
                        src={thirdGenrationtwo}
                        alt=""
                        className="w-[96%] mx-auto h-[50%] object-cover"
                      />

                      <div className="mt-[5%] w-[96%] mx-auto h-[50%] ">
                        <h1 className="text-center font-normal text-2xl font-optima text-[#003B73]  uppercase">
                          Nafeesa A. Moloobhoy
                        </h1>
                        <h6 className="text-center mt-[4%] text-base font-sans font-normal text-[#323135] uppercase">
                          Managing Director (2000 - Today)
                        </h6>
                        <p className="mt-[4%] text-center text-base font-sans font-light text-[#323135]">
                          A.S.Moloobhoy Pvt Ltd. is the parent company of the
                          Moloobhoy Group of Companies, formerly known as
                          A.S.Moloobhoy and Sons, and is 112 years old,
                          inaugurated in 1905 during World War I.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </>
            )}
            {activeGenerations.includes(4) && (
              <>
                 <div 
                 
                 className="w-[75%] generation4 p-2 rotate-180 flex ">
                  <div className="w-[52%]  border6 border-black">

                  </div>
                  <div className="w-[52%]  border7 border-black">

                  </div>
                </div>
                <div
                  className="w-[6%] mx-auto border1  rotate-90 relative "
                ></div>
                <div className="w-[75%] p-2 flex ">
                  <div className="w-[52%]  border4 border-black">

                  </div>
                  <div className="w-[52%]  border5 border-black">

                  </div>
                </div>

                <div id="generation4" className="flex w-[110%] justify-between ">
                  <div className="w-[350px] h-[440px] bg-[#F8F9FB] z-30 shadow-2xl animated">
                    <div className="w-[96%] h-[96%] flex flex-col justify-between mx-auto pt-[3.5%]">
                      <img
                        src={fourthGenrationtwo}
                        alt=""
                        className="w-[96%] mx-auto h-[50%] object-cover"
                      />

                      <div className="mt-[5%] w-[96%] mx-auto h-[50%]">
                        <h1 className="text-center font-normal text-2xl font-optima text-[#003B73]  uppercase">
                          Ghazalah Moloobhoy
                        </h1>
                        <h6 className="text-center mt-[4%] text-base font-sans font-normal text-[#323135] uppercase">
                          Director (2009 - Today)
                        </h6>
                        <p className="mt-[4%] text-center text-base font-sans font-light text-[#323135]">
                          As the fourth generation at A. S. Moloobhoy Pvt. Ltd.,
                          a company initiated by my great grandfather, now, over
                          a hundred years old – my vision is one of growth,
                          development.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-[350px] h-[440px] bg-[#F8F9FB] z-30  shadow-2xl animated">
                    <div className="w-[96%] h-[96%] flex flex-col justify-between mx-auto pt-[3.5%]">
                      <img
                        src={fourthGenration}
                        alt=""
                        className="w-[96%] mx-auto h-[50%] object-cover"
                      />

                      <div className="mt-[5%] w-[96%] mx-auto h-[50%]">
                        <h1 className="text-center font-normal text-2xl font-optima text-[#003B73]  uppercase">
                          Tehzeeb Moloobhoy
                        </h1>
                        <h6 className="text-center mt-[4%] text-lg font-sans font-normal text-[#323135] uppercase">
                          Director (2011 - Today)
                        </h6>
                        <p className="mt-[4%] text-center text-base font-sans font-light text-[#323135]">
                          Being the fourth generation standard-bearer of a
                          century old company like A.S. Moloobhoy Pvt. Ltd. is
                          both an honor as well as a great responsibility.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  
                </div>
              </>
            )}

            {activeGenerations.includes(5) && (
              <>
                <div
                  
                  className="w-[75%] flex  justify-end  relative "
                >
                  <div className="flex justify-end w-[9%] items-end border9  rotate-90  border-black"></div>
                </div>
                <div className="flex justify-end w-[75%] items-end ">
                  <div className=" flex justify-end w-[50%]  border8 "></div>
                </div>
                <div className="flex justify-start  w-[3%] items-end ">
                  <div className=" flex justify-end w-[100%] border9  rotate-90  mt-[0%] border-black"></div>
                </div>
                <div  id="generation5"  className="w-[350px] h-[440px] bg-[#F8F9FB] z-30 mt-[2%] shadow-2xl animated">
                  <div className="w-[96%] h-[96%] flex flex-col justify-between mx-auto pt-[3.5%]">
                    <img
                      src={fourthGenration}
                      alt=""
                      className="w-[96%] mx-auto h-[50%] object-cover"
                    />

                    <div className="mt-[5%] w-[96%] mx-auto h-[50%]">
                      <h1 className="text-center font-normal text-2xl font-optima text-[#003B73]  uppercase">
                       Tehzeeb Moloobhoy
                      </h1>
                      <h6 className="text-center mt-[4%] text-lg font-sans font-normal text-[#323135] uppercase">
                        Director (Today)
                      </h6>
                      <p className="mt-[4%] text-center text-base font-sans font-light text-[#323135]">
                        Being the fourth generation standard-bearer of a century
                        old company like A.S. Moloobhoy Pvt. Ltd. is both an
                        honor as well as a great responsibility.
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </>
            )}
          </div>
          
        </div>
        <div className="w-[100%] flex justify-end items-end">

           <button
            onClick={scrollToActiveGeneration23}
            className="mt-2 text-white scroll"
            >
            
          </button>
            </div>
      </div>
    </div>
  );
};

export default RoadMap;
