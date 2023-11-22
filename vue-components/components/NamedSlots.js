export default {
  template: `<div>
    <slot name="slot1"></slot>
    <slot></slot>
    <slot name="slot3"></slot>
    <slot name="slot4"> This is fallback content </slot>
    </div>`,
}
