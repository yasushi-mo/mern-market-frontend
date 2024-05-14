import { useState } from "react";

export const ImageUpload = () => {
  const [imageFile, setImageFile] = useState("");

  const handleClick = async () => {
    try {
      const data = new FormData();
      data.append("file", imageFile);
    } catch (error) {
      alert("画像アップロード失敗");
    }
  };

  return (
    <div className="img-upload">
      <input
        type="file"
        onChange={(event) => setImageFile(event.target.files[0])}
        accept="image/png, image/jpg"
      />
      <button onClick={handleClick} disabled={!imageFile}>
        画像 Upload
      </button>
    </div>
  );
};
