import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onOpen }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onOpen={() => onOpen(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
