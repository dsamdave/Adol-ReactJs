

export const uploadImageToCloud = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ltr1zri2");
    formData.append("cloud_name", "virtualsavvyng");
  
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/virtualsavvyng/upload",
      {
        method: "POST",
        body: formData,
      }
    );
  
    const data = await res.json();
    return { public_id: data.public_id, url: data.secure_url };
  };