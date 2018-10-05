import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery : '',
            queryResult: [],
            searched: null,
            pageNo: 0,
        };
        this.search = this.search.bind(this);

    }


    search() {
        debugger
        const PATH_BASE = 'https://hn.algolia.com/api/v1';
        const PATH_SEARCH = '/search';
        const PARAM_SEARCH = 'query=';
        const PARAM_PAGE = 'page=';

        axios.get(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${this.props.searchQuery}&&${PARAM_PAGE}${this.props.pageNo}`)
            .then(data => {
                debugger
                if (this.props.searchQuery !== this.state.searchQuery) {
                    this.setState({
                        searchQuery : this.props.searchQuery,
                        queryResult: data.data.hits,
                        searched: true
                    })
                } else {
                    this.setState({
                        queryResult: [...this.state.queryResult, ...data.data.hits]
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        return (
            <div>
                <div>                        
                    <button className="btn btn-outline-primary" onClick={this.search}>Fetch Data</button>

                    {this.state.searched && <h1 className="display-4 bg-info pb-1">Response</h1>}

                    {this.state.queryResult && this.state.queryResult.map(item => {
                        return <li className="form-control" key={item.objectID}>{item.title}</li>
                    })}
                </div>
            </div>
        );
    }
}

export default Search;