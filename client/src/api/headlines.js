import React, {Component} from "react";
import SingleHeadline from "./singleHeadline";
import axios from 'axios';
 
class Headlines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }
 
    componentDidMount() {
        const apiUrl = process.env.REACT_APP_HEADLINES_URI;
        axios.get(apiUrl)
            .then((response) => {
                this.setState({
                    news: response.data.articles
                })
            })
            .catch((error) => console.log(error))
    }
 
    renderItems() {
        return this.state.news.map((item) => (
            <SingleHeadline key={item.url} item={item}/>
        ));
    }
 
    render() {
        return <div id="rowNews" className="row d-flex">{this.renderItems()}</div>;
    }
}
 
export default Headlines;