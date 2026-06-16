import Icon from './Icon.jsx';

export default function UploadDropzone({ title, description }) {
  return (
    <label className="upload-dropzone">
      <input type="file" />
      <span className="upload-dropzone__content">
        <Icon name="upload" size={24} />
        <span className="upload-dropzone__copy">
          <strong>{title}</strong>
          <small>{description}</small>
        </span>
      </span>
    </label>
  );
}
