import React from "react";
import Button from "./Button";

class QuoteBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            quotes: [
                {
                    quote: "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
                    author: "Walt Disney"
                },
                {
                    quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
                    author: "Winston Churchill"
                },
                {
                    quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
                    author: "Will Rogers"
                },
                {
                    quote: "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
                    author: "Unknown"
                },
                {
                    quote: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
                    author: "Steve Jobs"
                }
            ]
        }

            this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const randomNum = Math.floor(Math.random() * 5)
        this.setState({
            initialQuote: this.state.quotes[randomNum].quote,
            initialAuthor: this.state.quotes[randomNum].author
        })
    }

    handleClick(e) {
        const newRandomNum = Math.floor(Math.random() * 5)
        this.setState({
            initialQuote: this.state.quotes[newRandomNum].quote,
            initialAuthor: this.state.quotes[newRandomNum].author
        })
    }

    

    render() {
        const quotes = this.state.quotes;
        console.log(quotes)
        return(
            <main id="quote-box">
                <section className="text-container">
                    <p id="text">{this.state.initialQuote}</p>
                </section>
                <section className="author-container">
                    <p id="author">{this.state.initialAuthor}</p>
                </section>
                <section className="button-section">
                    <a href="twitter">Twitter Logo</a>
                    {/* <Button onClick={this.handleClick} buttonText="New Quote" /> */}
                    <button onClick={this.handleClick}>Click Me</button>
                </section>
            </main>
        )
    }
}

export default QuoteBox;