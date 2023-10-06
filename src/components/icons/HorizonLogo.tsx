import React from 'react';

function TheLogo() {
  return (
    <g fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.42.748V19h-4.446v-7.514H5.058V19H.612V.748h4.446v7.15h6.916V.748h4.446Zm11.842 18.434c-1.716 0-3.294-.399-4.732-1.196a9.092 9.092 0 0 1-3.406-3.328c-.832-1.439-1.248-3.05-1.248-4.836 0-1.785.416-3.389 1.248-4.81a9.092 9.092 0 0 1 3.406-3.328C24.968.887 26.546.488 28.262.488c1.716 0 3.284.399 4.706 1.196a8.665 8.665 0 0 1 3.38 3.328c.832 1.421 1.248 3.025 1.248 4.81 0 1.785-.416 3.397-1.248 4.836a8.901 8.901 0 0 1-3.38 3.328c-1.422.797-2.99 1.196-4.706 1.196Zm0-4.056c1.456 0 2.617-.485 3.484-1.456.884-.97 1.326-2.253 1.326-3.848 0-1.612-.442-2.895-1.326-3.848-.867-.97-2.028-1.456-3.484-1.456-1.474 0-2.652.477-3.536 1.43-.867.953-1.3 2.245-1.3 3.874 0 1.612.433 2.903 1.3 3.874.884.953 2.062 1.43 3.536 1.43ZM49.377 19l-3.796-6.89h-1.066V19h-4.446V.748h7.462c1.439 0 2.66.251 3.666.754 1.023.503 1.785 1.196 2.288 2.08.503.867.754 1.837.754 2.912 0 1.213-.347 2.297-1.04 3.25-.676.953-1.681 1.63-3.016 2.028L54.395 19h-5.018ZM44.515 8.964h2.756c.815 0 1.421-.2 1.82-.598.416-.399.624-.962.624-1.69 0-.693-.208-1.24-.624-1.638-.399-.399-1.005-.598-1.82-.598h-2.756v4.524ZM61.476.748V19H57.03V.748h4.446ZM69.43 15.36h7.852V19H64.386v-3.38l7.8-11.232h-7.8V.748h12.896v3.38L69.43 15.36Zm19.388 3.822c-1.716 0-3.293-.399-4.732-1.196a9.093 9.093 0 0 1-3.406-3.328c-.832-1.439-1.248-3.05-1.248-4.836 0-1.785.416-3.389 1.248-4.81a9.093 9.093 0 0 1 3.406-3.328C85.525.887 87.102.488 88.818.488c1.716 0 3.285.399 4.706 1.196a8.664 8.664 0 0 1 3.38 3.328c.832 1.421 1.248 3.025 1.248 4.81 0 1.785-.416 3.397-1.248 4.836a8.9 8.9 0 0 1-3.38 3.328c-1.421.797-2.99 1.196-4.706 1.196Zm0-4.056c1.456 0 2.618-.485 3.484-1.456.884-.97 1.326-2.253 1.326-3.848 0-1.612-.442-2.895-1.326-3.848-.866-.97-2.028-1.456-3.484-1.456-1.473 0-2.652.477-3.536 1.43-.866.953-1.3 2.245-1.3 3.874 0 1.612.434 2.903 1.3 3.874.884.953 2.063 1.43 3.536 1.43ZM116.954 19h-4.446l-7.436-11.258V19h-4.446V.748h4.446l7.436 11.31V.748h4.446V19Zm21.238-12.818c0 1.508-.52 2.765-1.56 3.77-1.022.988-2.591 1.482-4.706 1.482h-3.484V19h-2.366V.878h5.85c2.046 0 3.597.494 4.654 1.482 1.075.988 1.612 2.262 1.612 3.822Zm-6.266 3.302c1.318 0 2.288-.286 2.912-.858.624-.572.936-1.387.936-2.444 0-2.236-1.282-3.354-3.848-3.354h-3.484v6.656h3.484ZM150.675 19l-4.316-7.41h-2.86V19h-2.366V.878h5.85c1.369 0 2.522.234 3.458.702.953.468 1.664 1.1 2.132 1.898.468.797.702 1.707.702 2.73 0 1.248-.364 2.349-1.092 3.302-.711.953-1.785 1.586-3.224 1.898l4.55 7.592h-2.834Zm-7.176-9.308h3.484c1.283 0 2.245-.312 2.886-.936.641-.641.962-1.49.962-2.548 0-1.075-.321-1.907-.962-2.496-.624-.59-1.586-.884-2.886-.884h-3.484v6.864Zm21.668 9.49c-1.681 0-3.215-.39-4.602-1.17a8.885 8.885 0 0 1-3.302-3.302c-.797-1.421-1.196-3.016-1.196-4.784 0-1.768.399-3.354 1.196-4.758.815-1.421 1.916-2.522 3.302-3.302 1.387-.797 2.921-1.196 4.602-1.196 1.699 0 3.242.399 4.628 1.196a8.496 8.496 0 0 1 3.276 3.276c.798 1.404 1.196 2.999 1.196 4.784 0 1.785-.398 3.38-1.196 4.784a8.682 8.682 0 0 1-3.276 3.302c-1.386.78-2.929 1.17-4.628 1.17Zm0-2.054c1.266 0 2.401-.295 3.406-.884 1.023-.59 1.82-1.43 2.392-2.522.59-1.092.884-2.357.884-3.796 0-1.456-.294-2.721-.884-3.796-.572-1.092-1.36-1.933-2.366-2.522-1.005-.59-2.149-.884-3.432-.884-1.282 0-2.426.295-3.432.884-1.005.59-1.802 1.43-2.392 2.522-.572 1.075-.858 2.34-.858 3.796 0 1.439.286 2.704.858 3.796.59 1.092 1.387 1.933 2.392 2.522 1.023.59 2.167.884 3.432.884Z"
        fill="currentColor"
      />
    </g>
  );
}

export default TheLogo;
