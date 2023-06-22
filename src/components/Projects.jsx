import React from "react";
import ProjectItem from "./ProjectItem";
import NespressoImg from "../assets/Nespresso.jpg";
import TerrysImg from "../assets/Terryscafe.jpg";

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#olive]">Recent Projects</h1>
            <p className="text-center py-8" >The left project is Nespresso website I copied using HTML/CSS/Java Script; The right project is Terry's Cafe website I copied using HTML/CSS.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={NespressoImg} title='Nespresso App' />
            <ProjectItem img={TerrysImg} title='Terrys Cafe App' />
            </div>
        </div>
    )
}

export default Projects;