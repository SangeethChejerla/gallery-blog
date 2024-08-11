import { motion } from 'framer-motion';
interface GalleryItemProps {
  id: number;
  title: string;
  image: string;
  description: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  id,
  title,
  image,
  description,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-lg shadow-lg"
    >
      <a href={`item/${id}`}>
        <img src={image} alt={title} className="w-hull h-64 object-cover" />
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex  items-center justify-center opacity-0 hover:opacity-100
    transition-opacity duration-300"
        >
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
      </a>
    </motion.div>
  );
};

export default GalleryItem;
