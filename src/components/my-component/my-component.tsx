import { Component, Prop, h } from '@stencil/core';
// import { UsaLink } from '@uswds/web-components/components/usa-link';
// import { UsaLink } from '@uswds/web-components/components/usa-link';
import { UsaLink } from '@uswds/web-components/dist/components/usa-link.js';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The last name
   */
  @Prop() href: string;

  connectedCallback() {
    customElements.get('usa-link') || window.customElements.define('usa-link', UsaLink);
  }

  render() {
    return (
      <usa-link href={this.href}>
        <slot></slot>
      </usa-link>
    );
  }
}
