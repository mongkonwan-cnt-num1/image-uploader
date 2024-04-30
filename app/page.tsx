import ImageUploadPage from "./image-uploader/page";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-8 gap-4">
      <div className="inline-block max-w-lg text-center justify-center">
        <ImageUploadPage />
      </div>
    </section>
  );
}
