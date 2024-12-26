import React from "react"
import'./App.css'
export default function TopicBox(){
    return(
        <div>
            <div className="topicBox">
                <samp className="text">This is the topic</samp>
                <div>
                    <App/>
                </div>
            </div>
        </div>
    )
}