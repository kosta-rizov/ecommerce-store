"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Modal from "@/components/ui/modal";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return ( 
    <Modal 
      open={previewModal.isOpen} 
      onClose={previewModal.onClose}
    >
      <div className="flex max-sm:flex-col gap-5 w-full ">
          <Gallery images={product.images} />
          <Info data={product} />
      </div>
    </Modal>
  );
};

export default PreviewModal;
