namespace UPLOAD {
  type UploadResponse = {
    name: string;
    format: string;
    url: string;
  };
  type UploadRequest = FormData;
}
