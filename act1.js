// Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// GUI for Ambient Light
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001);

// Directional Light
const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3);
scene.add(directionalLight);

directionalLight.position.set(1, 0.25, 0);

// Hemisphere Light
const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3);
scene.add(hemisphereLight);

// Point Light
const pointLight = new THREE.PointLight(0xff9000, 0.5, 10, 2);
scene.add(pointLight);

pointLight.position.set(1, -0.5, 1);

// RectAreaLight
const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 2, 1, 1);
scene.add(rectAreaLight);

rectAreaLight.position.set(-1.5, 0, 1.5);
rectAreaLight.lookAt(new THREE.Vector3());

// Spot Light
const spotLight = new THREE.SpotLight(0x78ff00, 0.5, 10, Math.PI * 0.1, 0.25, 1);
spotLight.position.set(0, 2, 3);
scene.add(spotLight);

spotLight.target.position.x = -0.75;
scene.add(spotLight.target);

// Helpers
const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2);
scene.add(hemisphereLightHelper);

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2);
scene.add(directionalLightHelper);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2);
scene.add(pointLightHelper);

// Import RectAreaLightHelper and use it
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight);
scene.add(rectAreaLightHelper);
