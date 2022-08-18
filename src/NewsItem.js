import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    return (
      <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={this.props.imageUrl} alt="" />

          <div className="px-6 py-4 max-w-sm rounded overflow-hidden shadow-lg mt-5">
            <div className="font-bold text-xl mb-2">{this.props.title}...</div>
            <p className="text-gray-700 text-base">
              {this.props.description}...
            </p>
            <a
              href={this.props.newsUrl}
              target="_blank"
              type="button"
              // onClick={this.fetchNews}
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-4"
            >
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
