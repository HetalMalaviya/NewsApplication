import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articals = [
    {
      source: { id: "the-huffington-post", name: "The Huffington Post" },
      author: "Ed Mazza",
      title:
        "Turning On Trump? Laura Ingraham Says 'Exhausted' Americans May Be Done With Him",
      description:
        "The Fox News host admitted that voters could reject Trump if he runs again.",
      url: "https://www.huffpost.com/entry/laura-ingraham-trump-turn-the-page_n_62fb4b5ae4b0a85a8195a4f8",
      urlToImage:
        "://img.huffingtonpost.com/asset/62fb4f2d3c00005ehttps00cc9221.jpg?cache=SwGMh5MdAw&ops=1200_630",
      publishedAt: "2022-08-16T09:07:53Z",
      content:
        "Fox News host Laura Ingraham, usually a staunch supporter of Donald Trump, said a conflict-weary nation might be ready to move on from the former president. \r\nAnd she indicated it could be time to st… [+1457 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "CBS News",
      title: "CBS Evening News, August 15, 2022",
      description:
        "Justice Department opposes unsealing Trump FBI search warrant affidavit; Wynton Bernard's long journey to Major League Baseball",
      url: "https://www.cbsnews.com/video/081522-cbs-evening-news/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2022/08/16/88b3b2d9-f6a3-4987-a97c-c454222cee71/thumbnail/1200x630/47d7aef7d5866eb9c0f73c6fc3daa910/0815-en-full-1202611-640x360.jpg",
      publishedAt: "2022-08-16T08:46:27+00:00",
      content:
        "Watch CBS News\r\nCopyright ©2022 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On",
    },
    {
      source: { id: "the-huffington-post", name: "The Huffington Post" },
      author: "AP",
      title:
        "2022 Elections: Primaries In Wyoming And Alaska Offer Final Test For Trump's Hard-Line Politics",
      description:
        "Rep. Liz Cheney, a leader in the Republican resistance to former President Trump, is fighting to save her seat in the House on Tuesday.",
      url: "https://www.huffpost.com/entry/election-2022-primaries-wyoming-alaska_n_62fb5350e4b071ea9589a296",
      urlToImage:
        "https://img.huffingtonpost.com/asset/62fb55ec2e00004f00ce0b12.jpeg?cache=RUCWMaJ4rH&ops=1200_630",
      publishedAt: "2022-08-16T08:38:30Z",
      content:
        "CHEYENNE, Wyo. (AP) Wyoming Rep. Liz Cheney, a leader in the Republican resistance to former President Donald Trump, is fighting to save her seat in the U.S. House on Tuesday as voters weigh in on th… [+6960 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: null,
      title:
        "Video: See how DeSantis addressed FBI's Mar-a-Lago search at rally - CNN Video",
      description:
        "CNN's Kyung Lah goes inside the first large Republican rally since the FBI searched Trump's Mar-A-Lago residence, where Florida Gov. Ron Desantis (R) headlined the event.",
      url: "http://us.cnn.com/videos/politics/2022/08/15/gop-arizona-rally-desantis-lake-fbi-mar-a-lago-trump-search-lah-pkg-lead-vpx.cnn",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220815173516-desantis-az-rally-lah-pkg-vpx-super-tease.jpg",
      publishedAt: "2022-08-16T08:37:38.7816392Z",
      content: null,
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "CBS News",
      title: "DOJ opposes release of Mar-a-Lago search affidavit",
      description:
        "The Justice Department says it opposes unsealing the affidavit that supported the FBI's search of Mar-a-Lago, arguing that it will harm the ongoing criminal investigation into former President Donald Trump. This comes as House Republicans are demanding the Bi…",
      url: "https://www.cbsnews.com/video/house-republicans-rally-around-fmr-pres-trump-following-mar-a-lago-search/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2022/08/16/4aae912f-3b44-46c5-bc25-4ae236a3c2f4/thumbnail/1200x630/ca032eb532c29ce339d9a4c91298feb8/cbsn-fusion-house-republicans-rally-around-fmr-pres-trump-following-mar-a-lago-search-thumbnail-1202655-640x360.jpg",
      publishedAt: "2022-08-16T08:33:25+00:00",
      content:
        "Watch CBS News\r\nCopyright ©2022 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On",
    },
    {
      source: { id: "newsweek", name: "Newsweek" },
      author: "James Bickerton",
      title:
        "Donald Trump Highlights 'Voting Surge' Among Red Wave After FBI Raid",
      description:
        "More than 80 percent of Republicans said they were more likely to vote after the Mar-a-Lago raid, according to one poll.",
      url: "https://www.newsweek.com/donald-trump-voting-surge-red-wave-gop-mar-lago-fbi-raid-1733904",
      urlToImage:
        "https://d.newsweek.com/en/full/2097871/trump-says-republicans-will-win-more-seats.jpg",
      publishedAt: "2022-08-16T08:19:38Z",
      content:
        'Donald Trump has claimed the Republicans could win "many additional seats, both in the House &amp; Senate" as a result of the FBI\'s raid on his Florida residence.\r\nAgents entered Mar-a-Lago on August… [+3651 chars]',
    },
    {
      source: { id: "cbc-news", name: "CBC News" },
      author: "CBC News",
      title:
        "Why Wyoming's dedication to Donald Trump likely means the end of the road for Liz Cheney | CBC News",
      description:
        "Despite being a staunch conservative and part of a political dynasty, Trump supporters are likely to deliver a final punishment to Wyoming Congresswoman Liz Cheney during the state's Republican primary on Tuesday.",
      url: "http://www.cbc.ca/news/world/wyoming-republican-primary-liz-cheney-1.6533584",
      urlToImage:
        "https://i.cbc.ca/1.6552148.1660609049!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/liz-cheney-lawn-sign.JPG",
      publishedAt: "2022-08-16T08:07:29.4695473Z",
      content:
        "To get a sense of just how committed the voters of Wyoming are to former U.S. president Donald Trump, look no further than the Laramie County Fair. \r\nInside a large metal barn complex on the outskirt… [+6340 chars]",
    },
    {
      source: { id: "the-huffington-post", name: "The Huffington Post" },
      author: "Josephine Harvey",
      title:
        "Rep. Adam Kinzinger Slams Trump, His 'Creepy' Supporters' Reaction To FBI Search",
      description:
        "The Illinois Republican said Trump was 100% responsible for inciting his supporters to threaten the FBI.",
      url: "https://www.huffpost.com/entry/adam-kinzinger-trump-creepy-supporters_n_62fb18dde4b06389482cdb46",
      urlToImage:
        "https://img.huffingtonpost.com/asset/62fb19713c00004300cc91fe.jpeg?cache=ETyVheIumf&ops=1200_630",
      publishedAt: "2022-08-16T07:38:16Z",
      content:
        "Rep. Adam Kinzinger (R-Ill.) slammed Donald Trump and his supporters unsettling behavior since the FBI searched the former presidents Florida home, looking for classified documents.\r\nSoon after the r… [+1704 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Fox News",
      title:
        "Justice Department opposes unsealing of Mar-a-Lago search affidavit",
      description:
        "Former U.S. attorney Brett Tolman and U.C. Berkeley law professor John Yoo discuss where the Justice Department's investigation into Donald Trump could be headed on 'Fox News @ Night.'",
      url: "https://video.foxnews.com/v/6310928724112/",
      urlToImage:
        "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/abf7c8b2-3adf-44bc-a91a-f5796e76fdf3/76e7c557-e7e2-4dff-ad2b-c5ca7e7a3877/1280x720/match/image.jpg",
      publishedAt: "2022-08-16T06:07:17.031146Z",
      content: null,
    },
    {
      source: { id: "breitbart-news", name: "Breitbart News" },
      author: "Paul Bois",
      title: "Trump Haters Duped by False DOJ Media Spin over Seized Passports",
      description:
        "Trump haters immediately fell for the Department of Justice's media spin over former President Donald Trump's seized passports.",
      url: "https://www.breitbart.com/politics/2022/08/15/trump-haters-duped-false-doj-media-spin-seized-passports/",
      urlToImage: "https://media.breitbart.com/media/2017/01/anti-trumps.jpg",
      publishedAt: "2022-08-16T04:57:04Z",
      content:
        "Trump haters immediately fell for the Department of Justice’s media spin over Donald Trump’s seized passports before the former president’s team proved it false.\r\nOn Monday, former President Trump cl… [+5431 chars]",
    },
    {
      source: { id: "the-huffington-post", name: "The Huffington Post" },
      author: "Ed Mazza",
      title:
        "‘Kimmel’ Host Desus Nice Has Field Day With Fox News’ Latest Pro-Trump Meltdown",
      description:
        "The right-wing network has been going bananas for the former president.",
      url: "https://www.huffpost.com/entry/desus-nice-donald-trump-mar-a-lago_n_62fb0a2ee4b06389482cd678",
      urlToImage:
        "https://img.huffingtonpost.com/asset/62fb1c163c00003f00cc9200.jpg?cache=LT794m41tn&ops=1200_630",
      publishedAt: "2022-08-16T04:49:12Z",
      content: null,
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "CBS News",
      title: "Rep. Liz Cheney facing tough primary on Tuesday",
      description:
        "Wyoming congresswoman Liz Cheney is fighting to hold on to her seat as voters head to the polls in the primary on Tuesday. Cheney is facing off against trial attorney Harriet Hageman, who is backed by former President Trump. CBS News' chief election and campa…",
      url: "https://www.cbsnews.com/video/rep-liz-cheney-faces-tough-primary-tuesday/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2022/08/15/a8967979-e2d3-4418-b1b4-0bc55a7af636/thumbnail/1200x630/7d0a411055ec261959ac756cdc34f169/cbsn-fusion-rep-liz-cheney-faces-tough-primary-tuesday-thumbnail-1202146-640x360.jpg",
      publishedAt: "2022-08-16T04:22:31+00:00",
      content:
        "Watch CBS News\r\nCopyright ©2022 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Fox News",
      title:
        "This unprecedented search has further eroded American's trust in the FBI: Sean Hannity",
      description:
        "Sean Hannity discusses how Trump said that the ‘temperature has to be brought down’ after FBI raid on his home on ‘Hannity.’",
      url: "https://video.foxnews.com/v/6310925294112/",
      urlToImage:
        "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/2a8ebd27-e5a9-4f14-a328-709671634280/0ead3b62-228c-41dd-9d29-5868a25ddbe8/1280x720/match/image.jpg",
      publishedAt: "2022-08-16T04:22:15.9364536Z",
      content: null,
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: "Steve Peoples",
      title: "Cheney braces for loss as Trump tested in Wyoming and Alaska",
      description:
        "CHEYENNE, Wyo. (AP) — Wyoming Rep. Liz Cheney,  a leader in the Republican resistance to former President Donald Trump , is fighting to save her seat in the U.S.",
      url: "https://apnews.com/article/2022-midterm-elections-donald-trump-presidential-wyoming-alaska-48a5444f247727d26cf67a0a72f14637",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/fa182d725d0047adb8c7b16d1cfc1628/3000.jpeg",
      publishedAt: "2022-08-16T04:16:52+00:00",
      content:
        "CHEYENNE, Wyo. (AP) Wyoming Rep. Liz Cheney, a leader in the Republican resistance to former President Donald Trump, is fighting to save her seat in the U.S. House on Tuesday as voters weigh in on th… [+6697 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "STEVE PEOPLES and MEAD GRUVER",
      title: "Cheney braces for loss as Trump tested in Wyoming and Alaska",
      description:
        "CHEYENNE, Wyo. (AP) — Wyoming Rep. Liz Cheney, a leader in the Republican resistance to former President Donald Trump, is fighting to save her seat in the U.S.",
      url: "https://apnews.com/48a5444f247727d26cf67a0a72f14637",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/fa182d725d0047adb8c7b16d1cfc1628/3000.jpeg",
      publishedAt: "2022-08-16T04:11:18Z",
      content:
        "CHEYENNE, Wyo. (AP) — Wyoming Rep. Liz Cheney, a leader in the Republican resistance to former President Donald Trump, is fighting to save her seat in the U.S. House on Tuesday as voters weigh in on … [+6787 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Analysis by Ronald Brownstein",
      title:
        "Analysis: Cheney's fate in Wyoming is a final test of Trump's hold over the GOP",
      description:
        "Rep. Liz Cheney's uphill battle to keep her seat in Wyoming's GOP primary on Tuesday underscores how Donald Trump's hold on the Republican Party is tightening even as the former President's legal challenges are mounting. That dynamic poses stark choices for t…",
      url: "http://us.cnn.com/2022/08/16/politics/cheney-wyoming-primary-trump-test-gop-analysis/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220815201414-liz-cheney-file-061622-super-tease.jpg",
      publishedAt: "2022-08-16T04:00:41Z",
      content:
        "(CNN)Rep. Liz Cheney's uphill battle to keep her seat in Wyoming's GOP primary on Tuesday underscores how Donald Trump's hold on the Republican Party is tightening even as the former President's lega… [+12587 chars]",
    },
    {
      source: { id: "independent", name: "Independent" },
      author: "Stuti Mishra",
      title:
        "Trump news – live: Justice department opposes release of Mar-a-Lago search evidence",
      description:
        "Calls for release of court documents come after search warrant showed Trump had 11 sets of classified documents",
      url: "http://www.independent.co.uk/news/world/americas/us-politics/donald-trump-passport-organisation-weisselberg-b2145768.html",
      urlToImage:
        "https://static.independent.co.uk/2022/08/12/17/newFile.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2022-08-16T03:51:36Z",
      content:
        "The justice department on Monday rebuffed efforts to make public the affidavit supporting the search warrant for former president Donald Trumps Mar-a-Lago estate in Florida.\r\nThe DoJ stated the inves… [+7308 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Sadie Gurman and Aruna Viswanatha",
      title: "Merrick Garland Weighed Search of Trump’s Mar-a-Lago for Weeks",
      description:
        "Attorney General Merrick Garland deliberated for weeks over whether to approve the application for a warrant to search former President Donald Trump’s Florida home, people familiar with the matter said.",
      url: "https://www.wsj.com/articles/merrick-garland-weighed-search-of-trumps-mar-a-lago-for-weeks-11660601292?mod=hp_lead_pos2",
      urlToImage: "https://images.wsj.net/im-604555/social",
      publishedAt: "2022-08-16T03:42:00Z",
      content: null,
    },
    {
      source: { id: "the-huffington-post", name: "The Huffington Post" },
      author: "AP",
      title:
        "Trump's Longtime Finance Chief Expected To Plead Guilty In New York Tax Case",
      description:
        "Trump Organization CFO Allen Weisselberg is expected to plead guilty as soon as Thursday in a tax evasion case.",
      url: "https://www.huffpost.com/entry/trump-org-allen-weisselberg-plead-guilty_n_62fb10dce4b0a85a8195795d",
      urlToImage:
        "https://img.huffingtonpost.com/asset/62fb10de3c00007000cc91fb.jpeg?cache=GqSBnLtuVi&ops=1200_630",
      publishedAt: "2022-08-16T03:41:22Z",
      content:
        "NEW YORK (AP) Donald Trumps longtime finance chief is expected to plead guilty as soon as Thursday in a tax evasion case that is the only criminal prosecution to arise from a long-running investigati… [+4723 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "CBS News",
      title:
        "FBI and DHS warn of extremist threats following Mar-a-Lago search",
      description:
        "The FBI and Department of Homeland Security have issued a joint bulletin warning of increased threats to law enforcement officials. The memo comes after the FBI executed a search warrant at former President Donald Trump's Mar-a-Lago home. The agencies say the…",
      url: "https://www.cbsnews.com/video/fbi-and-dhs-warn-of-extremist-threats/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2022/08/16/a6457df8-68ef-4c08-90a4-6114afee1117/thumbnail/1200x630/eac9d4a0779ec9179dfa296c58eb31cc/cbsn-fusion-fbi-and-dhs-warn-of-extremist-threats-thumbnail-1202722-640x360.jpg",
      publishedAt: "2022-08-16T03:33:11+00:00",
      content:
        "Watch CBS News\r\nCopyright ©2022 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On",
    },
  ];
  constructor() {
    super();
    this.state = {
      articals: this.articals,
    };
  }

  render() {
    return (
      <div className="container mx-auto">
        <h2 className="font-medium leading-tight text-5xl mt-0 mb-2 text-slate-700 text-center">
          Top Headlines
        </h2>
        <div className="grid grid-rows">
          <div className="grid grid-cols-3 gap-5">
            <NewsItem
              title="myTitle"
              description="mydes"
              imageUrl="https://cdn.cnn.com/cnnnext/dam/assets/220815173516-desantis-az-rally-lah-pkg-vpx-super-tease.jpg"
            ></NewsItem>
            <NewsItem title="myTitle" description="mydes"></NewsItem>
            <NewsItem title="myTitle" description="mydes"></NewsItem>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
