import React from "react";
import Iframe from 'react-iframe';

export default function Frame()
{
    return(
        <>
        <Iframe url="https://10.10.237.155:6001/"
            width="100%"
            display="block"
            id="myId"
            className="p-2 min-h-[110vh]"
            // allowFullScreen="fullscreen"
            />
            {/* <iframe src="https://10.10.237.155:6001/" title="W3Schools Free Online Web Tutorials"></iframe> */}
    </>
    )
}