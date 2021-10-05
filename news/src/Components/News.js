import React, { Component } from 'react'
import Newsitem from './Newsitem'
import './News.css'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'
export default class News extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            articles: [],
            loading: false,
            page: 1,
            totalresult: 0,
        }
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.substring(1)}-NEWS`;
    }
    async componentDidMount() {
        this.props.prog(10);
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=17357b8d1d8b4fb8b273fd9024cc6a8a&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.prog(50);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false,
            totalresult: parsedData.totalresult
        });
        this.props.prog(100);
    }
     fetchMoreData= async()=>{
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=17357b8d1d8b4fb8b273fd9024cc6a8a&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalresult: parsedData.totalresult,
            loading:false,
            page: this.state.page + 1
        });
    }
    render() {
        return (
            <div style={this.props.design}>
                <h2>{(this.props.category).toUpperCase()} NEWS HEADLINES</h2>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalresult}
                        loader={this.state.loading && <Spinner />}>
                            {this.state.articles.map((value, index) => {
                                return (
                                    <div className="dis"><Newsitem design={this.props.design} title={value.title} desc={value.description} url={value.urlToImage} newsurl={value.url} author={value.author} publishedAt={value.publishedAt} /></div>
                                )
                            })}
                    </InfiniteScroll>
            </div>
        )
    }
}