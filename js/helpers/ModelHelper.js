import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export const LoadGLTFByPath = (scene, startingModelPath) => {
    return new Promise((resolve, reject) => {
      // Create a loader
      const loader = new GLTFLoader();
  
      // Load the GLTF file
      loader.load(startingModelPath, (gltf) => {

        scene.add(gltf.scene);

        resolve();
      }, undefined, (error) => {
        reject(error);
      });
    });
};

export const LoadGLBByPath = (scene, startingModelPath) => {
  return new Promise((resolve, reject) => {
    // Create a loader
    const loader = new GLTFLoader();

    // Load the GLTF file
    loader.load(startingModelPath, (glb) => {

      scene.add(glb.scene);

      resolve();
    }, undefined, (error) => {
      reject(error);
    });
  });
};