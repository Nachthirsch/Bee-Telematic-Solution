import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export const ProjectDetail = ({ project }) => {
  return (
    <div className="bg-gradient-to-br from-orange-400 via-orange-300 to-orange-500 min-h-screen font-poppins relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"/>
        <div className="absolute top-40 right-10 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-8 md:px-16 pb-16 pt-20"
        >
          <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
              {project.title}
              <span className="block text-orange-800">Project Details</span>
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 bg-orange-800 text-white rounded-full text-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            
            {project.images && (
              <div className="my-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-2xl overflow-hidden shadow-lg bg-white/30 backdrop-blur-sm p-2"
                    >
                      <img
                        src={img}
                        alt={`${project.title} ${idx + 1}`}
                        className="w-full h-64 object-cover rounded-xl transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="font-poppins space-y-8 mb-12">
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <ReactMarkdown
                  components={{
                    h1: ({node, children, ...props}) => (
                      <h2 className="text-2xl font-bold text-orange-800 mb-4" {...props}>
                        {children}
                      </h2>
                    ),
                    h2: ({node, children, ...props}) => (
                      <h3 className="text-xl font-semibold text-gray-800 mb-3" {...props}>
                        {children}
                      </h3>
                    ),
                    p: ({node, ...props}) => (
                      <p className="text-gray-700 mb-4 leading-relaxed" {...props} />
                    ),
                    ul: ({node, ...props}) => (
                      <ul className="space-y-2 mb-4 ml-4" {...props} />
                    ),
                    li: ({node, ...props}) => (
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-orange-800 rounded-full"/>
                        <span>{props.children}</span>
                      </li>
                    )
                  }}
                >
                  {project.fullDescription}
                </ReactMarkdown>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-orange-800 mb-2">Client</h3>
                <p className="text-gray-800">{project.client}</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-orange-800 mb-2">Completed</h3>
                <p className="text-gray-800">{project.completionDate}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};