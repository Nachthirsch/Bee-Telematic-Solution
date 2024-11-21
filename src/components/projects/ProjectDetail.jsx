import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { HiOutlineCalendar } from 'react-icons/hi';
import { IoLayersOutline } from 'react-icons/io5';
import { BsArrowUpRight } from 'react-icons/bs';

export const ProjectDetail = ({ project }) => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-r from-amber-50 to-amber-500">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#f59e0b_0,transparent_50%)] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl relative overflow-hidden border border-amber-100"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-300/30 rounded-full blur-3xl" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#fef3c7_0,transparent_25%)] pointer-events-none" />
          
          <div className="mb-12 relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '3rem' }}
              className="h-1 bg-gradient-to-r from-amber-400 to-amber-600 mb-4"
            />
            <div className="flex items-start justify-between">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-bold text-gray-800 leading-tight mb-2 hover:text-amber-600 transition-colors"
                >
                  {project.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <IoLayersOutline className="w-5 h-5" />
                  <p className="text-lg">{project.client}</p>
                </motion.div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-amber-50 hover:bg-amber-100 transition-colors"
              >
                <BsArrowUpRight className="w-5 h-5 text-amber-600" />
              </motion.button>
            </div>
          </div>

          {project.images && (
            <div className="mb-12 group">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative overflow-hidden rounded-2xl ring-1 ring-amber-100"
              >
                <motion.img
                  src={project.images[0]}
                  alt={project.title}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                >
                  <p className="text-sm font-medium">View Project Details</p>
                </motion.div>
              </motion.div>
            </div>
          )}

          <div className="mb-12 prose prose-amber max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ node, children, ...props }) => (
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2 group" 
                    {...props}
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full group-hover:w-4 transition-all duration-300" />
                    {children}
                  </motion.h2>
                ),
                p: ({ node, ...props }) => (
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-gray-700 mb-4 leading-relaxed hover:text-gray-900 transition-colors" 
                    {...props} 
                  />
                ),
                ul: ({ node, ...props }) => (
                  <motion.ul 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-3 mb-4 ml-4" 
                    {...props} 
                  />
                ),
                li: ({ node, ...props }) => (
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 text-gray-700 group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <span className="group-hover:text-gray-900 transition-colors">{props.children}</span>
                  </motion.li>
                ),
              }}
            >
              {project.fullDescription}
            </ReactMarkdown>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {project.tags.map((tag, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="px-4 py-1.5 bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 
                          rounded-full text-sm font-medium border border-amber-200/50
                          hover:from-amber-100 hover:to-amber-200 transition-all duration-300 
                          cursor-default shadow-sm"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2 text-gray-600 group"
          >
            <HiOutlineCalendar className="w-5 h-5 group-hover:text-amber-600 transition-colors" />
            <p className="group-hover:text-gray-900 transition-colors">Completed on {project.completionDate}</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};