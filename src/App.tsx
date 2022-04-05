import React from "react";
import "./App.scss";
import VideoPlayer from "video-player";
import Editor from "editor";
import Timeline from "timeline";
import Header from "header";
function App() {
  return (
    <div className="app-container">
      <div className="app-container-header">
        <Header></Header>
      </div>
      <div className="app-container-editing">
        <div className="app-container-editing-player">
          <VideoPlayer />
        </div>
        <div className="app-container-editing-coder">
          <Editor />
        </div>
      </div>
      <div className="app-container-timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default App;
