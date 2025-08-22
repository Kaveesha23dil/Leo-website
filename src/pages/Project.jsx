import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../sections/Navbar";
import Squares from "../components/Squares";
import { projects } from "../data/projects";

const Project = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const getStatusBadgeColor = (status) => {
    return status === 'Completed' 
      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
      : 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen pt-16 bg-slate-900">
        {/* Squares Background */}
        <div className="absolute inset-0 z-0">
          <Squares
            direction="diagonal"
            speed={0.5}
            borderColor="rgba(59, 130, 246, 0.2)"
            squareSize={50}
            hoverFillColor="rgba(59, 130, 246, 0.1)"
            className="w-full h-full"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white">Our Projects</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Discover our impactful initiatives that create positive change in our community. 
              Click on any project to learn more about our work and achievements.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 text-xs font-medium border rounded-full ${getStatusBadgeColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-400 text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-white/60 text-sm">
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>{project.details.participants} participants</span>
                    <span className="text-blue-400 group-hover:text-blue-300 font-medium">
                      Learn more →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Project