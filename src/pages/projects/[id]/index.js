import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectDetail } from '../../../components/projects/ProjectDetail';
import { portfolioData } from '../../../data/portofolioData';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = portfolioData.find(p => p.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-amber-50 to-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-amber-900">Project not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-50 to-amber-500 py-16">
      <ProjectDetail project={project} />
    </div>
  );
};

export default ProjectDetailPage;