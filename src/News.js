import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articals: [],
      DetaisLoaded: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ad0e3eb9afaa461e87d24bbe471db446";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articals: parsedData.articles });
  }

  render() {
    console.log(this.state, "er");
    return (
      <div className="container mx-auto">
        <h2 className="font-medium leading-tight text-5xl mt-0 mb-2 text-slate-700 text-center">
          Top Headlines
        </h2>
        <div className="grid grid-rows-3 grid-flow-col gap-4 mt-4 px-10">
          {this.state.articals?.map((element) => {
            return (
              <div className="grid grid-cols-1 gap-1" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 82) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                ></NewsItem>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
