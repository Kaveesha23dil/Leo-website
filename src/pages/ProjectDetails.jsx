import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "../sections/Navbar";
import Squares from "../components/Squares";
import { getProjectById } from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const project = getProjectById(id);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="relative min-h-screen pt-16 bg-slate-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <button
              onClick={() => navigate('/projects')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
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
            speed={0.3}
            borderColor="rgba(59, 130, 246, 0.1)"
            squareSize={60}
            hoverFillColor="rgba(59, 130, 246, 0.05)"
            className="w-full h-full"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="relative mb-6">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover rounded-xl"
                />
                
                {/* Image Navigation */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Image Thumbnails */}
              {project.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'border-blue-500' 
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Information */}
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-400 text-sm font-medium">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 text-sm font-medium border rounded-full ${getStatusBadgeColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
                
                <p className="text-white/80 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {project.details.participants}
                  </div>
                  <div className="text-white/70 text-sm">Participants</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {project.details.hoursContributed}
                  </div>
                  <div className="text-white/70 text-sm">Hours Contributed</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 col-span-2">
                  <div className="text-white/70 text-sm mb-2">Project Date</div>
                  <div className="text-lg font-semibold text-white">
                    {new Date(project.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Objective</h3>
                  <p className="text-white/80 leading-relaxed">{project.details.objective}</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Impact</h3>
                  <p className="text-white/80 leading-relaxed">{project.details.impact}</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Key Outcomes</h3>
                  <ul className="space-y-2">
                    {project.details.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start text-white/80">
                        <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Challenges</h3>
                  <p className="text-white/80 leading-relaxed">{project.details.challenges}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;