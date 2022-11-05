import React from "react";
import Iframe from 'react-iframe';

export default function Frame()
{
    return(
    <section>
        <Iframe url="https://10.10.237.155:6001/"
            display="block"
            id="myId"
            className="p-2 min-h-[110vh] min-w-[100%]"
            // allowFullScreen="fullscreen"
            />
    </section>
    )
}