import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

let shader_path = '/assets/glsl/';

let clock = new THREE.Clock();
let delta = 0;
let interval = 1 / 24; // 30 fps

let scene;
let scene_objects = [];

function addLighting() {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
}

function addObject(color, x) {
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const material = new THREE.MeshPhongMaterial({ color });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = x;
    scene.add(cube);
    scene_objects.push(cube);
}

async function getShader(file_name) {
    var response = await fetch(shader_path + file_name);
    // .then(response => response.text())
    // .then(data => text = data);

    var text = await response.text();

    console.log(text);

    return text;
}

async function addExperimentalCube() {
    let uniforms = {
        // colorB: { type: 'vec3', value: new THREE.Color(0xACB6E5) },
        // colorA: { type: 'vec3', value: new THREE.Color(0x74ebd5) }
        iResolution: { type: 'vec3', value: new THREE.Vector3(60,30,1) },
        // need to somehow update iTime uniform every frame ********************************
        iTime: { type: 'float', value: delta }, 
        iChannel0: { type: 'sampler2D', value: new THREE.TextureLoader().load("/assets/img/teapot.png") },
    }

    let geometry = new THREE.BoxGeometry(1, 1, 1)

    let material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: await getShader('test.vert'),
        fragmentShader: await getShader('fractal_flythrough.frag'),
    })

    let mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = 2
    scene.add(mesh)
    scene_objects.push(mesh)
}

async function main() {
    // set canvas for rendering
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ canvas });

    // set up camera
    const fov = 80;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2.5;

    scene = new THREE.Scene();

    addLighting();
    addObject(0xA271D6, 0);
    // addObject(0xA271D6, -2);
    // addObject(0xA271D6,  2);
    await addExperimentalCube()

    function render(time) {
        delta += clock.getDelta();

        time *= 0.001;  // convert time to seconds

        scene_objects.forEach((cube, ndx) => {
            const speed = 1 + ndx * .1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
        });

        if (delta > interval) {
            renderer.render(scene, camera);
            delta = delta % interval;
        }

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);


}

await main();

