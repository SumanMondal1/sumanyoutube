import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className='searchpage'>
        <div className='searchpage_filter'>
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
        </div>
        <hr/>
        <ChannelRow
        image="https://www.teahub.io/photos/full/300-3001203_hd-1080p-samantha-hd.jpg"
        channel="Suman Mondal"
        verified
        subs='10M'
        noOfVideos={345}
        description="You will learn frontend development here and become a good developer and be a good student" 
        />
        <hr />
        <VideoRow 
        views="1.5M"
        subs='10M'
        description="Do you love to play cricket or watching cricket"
        timestamp="5 days ago"
        channel="Suman Mondal"
        title="Lets play cricket live"
        image="https://cdn.pixabay.com/photo/2017/07/24/12/43/schrecksee-2534484__340.jpg"
        />

    </div>
  )
}

export default SearchPage;