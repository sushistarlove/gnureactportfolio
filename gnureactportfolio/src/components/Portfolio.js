import React from 'react'

function portfolio() {
    return (
        <div>
            <div className="card">
                <h1 style={{color: "greenyellow", textShadow: "1px 1px 2px black"}}>Movie Shelf</h1>
         <img src="../movieshelf.png" alt="Movie Shelf Logo" style={{height: "110px",
        width: "270px",
        paddingLeft: "50px",
        paddingTop: "50px",
        }}></img>
        <p style={{paddingLeft: "60px", paddingTop: "30px"}}>Link To Deployed App: <a href="https://yourmovieshelf.herokuapp.com/" target="_blank" rel="noopener noreferrer">Here</a></p>
        <p style={{paddingLeft: "60px",}}>Link To Repository: <a href="https://github.com/sushistarlove/movie_shelf" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
        <div className="card">
            <h1 style={{color: "greenyellow", textShadow: "1px 1px 2px black"}}>Simple Portfolio</h1>
         <img src="../portsc.jpg" alt="Portfolio Logo" style={{height: "auto",
        width: "300px",
        paddingLeft: "50px",
        paddingTop: "50px",
        }}></img>
        <p style={{paddingLeft: "60px", paddingTop: "30px"}}>Link To Deployed App: <a href="https://sushistarlove.github.io/aqua-portfolio123/" target="_blank" rel="noopener noreferrer">Here</a></p>
        <p style={{paddingLeft: "60px",}}>Link To Repository: <a href="https://github.com/sushistarlove/aqua-portfolio123" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
        <div className="card">
            <h1 style={{color: "greenyellow", textShadow: "1px 1px 2px black"}}>Movie Trivia Quiz</h1>
         <img src="../movietrivia.jpg" alt="Movie Trivia Logo" style={{height: "auto",
        width: "300px",
        paddingLeft: "50px",
        paddingTop: "50px",
        }}></img>
        <p style={{paddingLeft: "60px", paddingTop: "30px"}}>Link To Deployed App: <a href="https://sushistarlove.github.io/movie-trivia-jbg/" target="_blank" rel="noopener noreferrer">Here</a></p>
        <p style={{paddingLeft: "60px",}}>Link To Repository: <a href="https://github.com/sushistarlove/movie-trivia-jbg" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
        <div className="card">
        <h1 style={{color: "greenyellow", textShadow: "1px 1px 2px black"}}>Workout Tracker</h1>
         <img src="../workout-tracker-screenshot.jpg" alt="Workout Tracker Logo" style={{height: "auto",
        width: "300px",
        paddingLeft: "50px",
        paddingTop: "50px",
        }}></img>
        <p style={{paddingLeft: "60px", paddingTop: "30px"}}>Link To Deployed App: <a href="https://workout-tracker-88.herokuapp.com/?id=611400edcbc079001529299a" target="_blank" rel="noopener noreferrer">Here</a></p>
        <p style={{paddingLeft: "60px",}}>Link To Repository: <a href="https://github.com/sushistarlove/workout-tracker-88" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
        </div>
    )
}

export default portfolio
