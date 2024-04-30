"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";
import { useState, ChangeEvent } from "react";
import LoadingButton from "../loading";

export default function ImageUploadPage() {
  const [selectedImage, setSelectedImage]: [
    File | undefined,
    React.Dispatch<React.SetStateAction<File | undefined>>
  ] = useState<File>();

  const [isLoading, setIsLoading] = useState(false);

  const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file =
      e.target.files && e.target.files.length > 0
        ? e.target.files[0]
        : undefined;
    setSelectedImage(file);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const removeSelectedImage = () => {
    setSelectedImage(undefined);
  };

  if (isLoading) {
    return <LoadingButton />;
  } else
    return (
      <div className="flex justify-center items-center grid grid-rows gab-4">
        <Card
          className="bg-background/60 dark:bg-default-100/50 h-[300px] w-[610px]"
          shadow="sm"
        >
          <CardBody className="border-dashed border-1 border-gray-400 rounded-md m-2 w-auto">
            <div className="flex justify-center items-center h-screen">
              {!selectedImage ? (
                <input accept="image/*" type="file" onChange={imageChange} />
              ) : (
                <div>
                  <Image
                    src={URL.createObjectURL(selectedImage)}
                    className="pb-8 h-full"
                    alt="Thumb"
                  />
                </div>
              )}
            </div>
          </CardBody>
        </Card>
        {selectedImage && (
          <div className="py-8 grid grid-cols-3 grid-flow-col gab-4">
			<div>
			<Button onClick={removeSelectedImage}>Remove This Image</Button>
			</div>
			<div>
			<Button onClick={removeSelectedImage}>Download</Button>
			</div>
			<div>
			<Button onClick={removeSelectedImage}>Share</Button>
			</div>
    
          </div>
        )}
      </div>
    );
}
