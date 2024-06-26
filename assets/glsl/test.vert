varying vec2 fragCoord; 

void main() {
    fragCoord = position.xy; 

    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition; 
}