import { SearchIcon } from '@heroicons/react/outline'
import {TwitterTimelineEmbed} from "react-twitter-embed"
import React from 'react'

function Widgets() {
  return (
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">

    <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3 text-gray-400">
        <SearchIcon className="h-5 w-5" />
        <input type="text" placeholder="Search Twitter" className="bg-transparent outline-none flex-1"/>
    </div>
    <TwitterTimelineEmbed sourceType="profile" screenName="sonnysangha" options={{height:1000}} />
    </div>
  )
}

export default Widgets