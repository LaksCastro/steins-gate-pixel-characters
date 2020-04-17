import Canvas from "../Canvas";

export default function Wrapper(id) {
  return `
        <div class="wrapper">
            ${Canvas(id)}
        </div>
    `;
}
