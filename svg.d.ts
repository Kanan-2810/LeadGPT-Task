declare module "*.svg" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "@/assets/icons/*.svg" {
  const content: import("next/image").StaticImageData;
  export default content;
}

