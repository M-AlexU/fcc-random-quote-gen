/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { connect } from "react-redux";
import '../index.scss';
import { fetchQuote } from "../store/ducks/quote";

class Container extends React.Component {

    handleDisplayClick = () => {
        this.props.fetchQuote();
    }

    render() {
        const { quote, author, requesting } = this.props;

        return (
            <section className="container-fluid col-md-6 text-center bg-secondary py-4 rounded-top rounded-1 d-flex flex-column gap-5" id="quote-box">
                <h3 className="text-center py-2 px-5 mb-auto" id="text">❝{quote || (requesting && <p>Loading...</p>)}❞</h3>
                <div>
                    <p className="text-end pt-3 px-4 fs-5" id="author">- {author}</p>
                    <button className="btn btn-outline-light" id="new-quote" onClick={this.handleDisplayClick}>Give me a lil' Quote</button>
                    <div className="d-flex gap-2 px-2 pt-4" id="share">
                        <a 
                        href={
                            `https://twitter.com/intent/tweet?` +
                            `text="${encodeURIComponent(this.props.quote)}" %0A- ${encodeURIComponent(this.props.author)}%0A%0A` + 
                            `&hashtags=QuoteOfTheDay,WordsOfWisdom`
                        }
                            className="btn btn-outline-light border-0 col-md-1" 
                            id="tweet-quote" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href={
                            "https://www.tumblr.com/widgets/share/tool?posttype=quote" + 
                            "&tags=QuoteOfTheDay,WordsOfWisdom" + 
                            `&caption=${encodeURIComponent(this.props.author)}` + 
                            `&content=${encodeURIComponent(this.props.quote)}` + 
                            "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons" + 
                            "&shareSource=tumblr_share_button"
                        }
                            className="btn btn-outline-light border-0 col-md-1" 
                            id="tublr-quote" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <i className="fa-brands fa-tumblr"></i>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        quote: state.quote.quote,
        author: state.quote.author,
        requesting: state.quote.requesting,
    };
};

export default connect(mapStateToProps, { fetchQuote })(Container);