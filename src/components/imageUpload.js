import { useState } from "react";

const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;

export const ImageUpload = (props) => {
  const [imageFile, setImageFile] = useState("");

  const handleChooseImage = (event) => {
    if (!event.target.files || event.target.files.length === 0)
      return alert("Failed to choose image");

    const file = event.target.files[0];
    setImageFile(URL.createObjectURL(file));
  };

  const handleUploadImage = async () => {
    try {
      const data = new FormData();
      data.append("file", imageFile);
      data.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );
      data.append("cloud_name", CLOUD_NAME);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const jsonData = await response.json();
      await props.setItem({
        ...props.item,
        image: jsonData.url,
      });
      alert("画像アップロード成功");
    } catch (error) {
      alert("画像アップロード失敗");
    }
  };

  return (
    <div className="img-upload">
      <input
        type="file"
        onChange={handleChooseImage}
        accept="image/png, image/jpg"
      />
      <button onClick={handleUploadImage} disabled={!imageFile}>
        画像アップロード
      </button>
    </div>
  );
};
