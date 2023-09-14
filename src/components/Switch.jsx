// Header.js
// import React, { useState, useEffect, useCallback } from "react";
import React from "react"
// import BiGridHorizontal from "react-icons/bi";
import ReactPlayer from 'react-player/lazy'

function Header() {
    // const [archiveView, setArchiveView] = useState("");
    // const [showSwipe, setShowSwipe] = useState(true);

    // const applyArchiveView = useCallback(() => {
    //     const elements = document.querySelectorAll(".contentpanel");
    //     elements.forEach((el) => {
    //         if (archiveView === "grid") {
    //             el.classList.remove("horizontal-scroll", "panels");
    //             el.classList.add("grid-container");
    //             // document.body.classList.add("scrollable");
    //             // document.querySelector('#showPosts').style.height = 'auto';
    //             // window.scrollTo(0, 0);
    //         } else if (archiveView === "swipe") {
    //             el.classList.remove("grid-container");
    //             el.classList.add("horizontal-scroll", "panels");
    //             // document.body.classList.remove("scrollable");
    //             document.querySelector(".contentpanel").style.transition = "all .5s ease-in-out";
    //             // document.querySelector('#showPosts').style.height = '600px';
    //             window.scrollTo(0, 0);
    //         }
    //     });
    //     localStorage.setItem("archiveView", archiveView);
    // }, [archiveView]);

    // useEffect(() => {
    //     if (showSwipe) {
    //         // Retrieve the selected option from local storage or default to 'grid' or 'swipe'
    //         const storedArchiveView = localStorage.getItem("archiveView");
    //         setArchiveView(storedArchiveView || (showSwipe ? "grid" : "swipe"));
    //     }
    // }, [showSwipe]);

    // useEffect(() => {
    //     // Apply the selected option on page load
    //     applyArchiveView();
    // }, [applyArchiveView]);

    const toggleArchiveView = () => {
        // const newArchiveView = archiveView === "grid" ? "swipe" : "grid";
        // setArchiveView(newArchiveView);
        // applyArchiveView();
        console.log("Button clicked"); // Add this line
    };



    return (
        <div>
            <button
                aria-label="Grid/Swipe View"
                onClick={toggleArchiveView}
                className="swipescroll"
                id="swipebutt"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "0px",
                    textAlign: "center",
                }}
            >
                <span className="themetext"> TTT</span>
            </button>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </div>
    );
}

export default Header;
