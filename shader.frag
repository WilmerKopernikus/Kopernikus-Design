// shader.frag
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.5 + 0.5 * cos(u_time + st.xyx + vec3(0, 2, 4)));
    gl_FragColor = vec4(color, 1.0);
}
